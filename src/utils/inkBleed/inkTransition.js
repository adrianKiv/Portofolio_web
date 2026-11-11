import gsap from 'gsap';
import { capturePage, layoutKey, renderScale } from './capture.js';
import { inkParams } from './params.js';
import { InkRenderer } from './renderer.js';

export const SPREAD = { growth: 0.7, cleanupFrom: 0.45, cleanupReach: 0.4, cleanupPow: 2 };
const EASE = 'power3.out';
const FADE_OUT = 0.15;
const RESIZE_DEBOUNCE_MS = 250;
const CSS_FADE_S = 0.45;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

export function getTheme() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function otherTheme(theme) {
  return theme === 'dark' ? 'light' : 'dark';
}

export function applyTheme(theme, onThemeChange) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.dataset.theme = 'light';
    localStorage.setItem('theme', 'light');
  }
  if (onThemeChange) {
    onThemeChange(theme === 'dark');
  }
}

export class InkTransition {
  constructor(canvas, toggleButton, options = {}) {
    this.canvas = canvas;
    this.toggleButton = toggleButton;
    this.onThemeChange = options.onThemeChange;
    this.destroyed = false;
    this.state = { progress: 0, time: 0 };
    this.tween = null;
    this.fade = null;
    this.frame = null;
    this.cssFadeTimer = 0;
    this.last = null;

    this.captureGen = 0;
    this.capturing = false;
    this.captureQueued = false;
    this.resizeTimer = 0;

    this.renderer = options.webgl === false ? null : InkRenderer.create(canvas);
    if (!this.renderer) {
      document.documentElement.dataset.ink = 'css';
      return;
    }
    document.documentElement.dataset.ink = 'webgl';

    this.renderer.resize(renderScale());
    this.renderer.watchContext(
      () => this.cancel(),
      () => this.scheduleCapture(0)
    );

    this.handleResize = () => {
      this.renderer?.resize(renderScale());
      if (this.frame) this.draw();
      this.scheduleCapture(RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener('resize', this.handleResize);
    this.resizeObserver = new ResizeObserver(() => this.scheduleCapture(RESIZE_DEBOUNCE_MS));
    this.resizeObserver.observe(document.body);

    if (document.fonts) {
      void document.fonts.ready.then(() => this.scheduleCapture(0));
    } else {
      this.scheduleCapture(100);
    }
  }

  get isWebGL() {
    return this.renderer !== null;
  }

  get isAnimating() {
    return this.frame !== null;
  }

  toggle(point, seed) {
    const current = getTheme();
    const to = otherTheme(current);
    const renderer = this.renderer;
    const scale = renderScale();
    const key = layoutKey(scale);
    const interrupting = this.frame !== null;

    const canAnimate =
      renderer !== null &&
      !renderer.isLost &&
      !reducedMotion.matches &&
      renderer.hasValid(to, key) &&
      (interrupting || renderer.hasValid(current, key));

    if (!canAnimate || !renderer) {
      this.cancel();
      this.crossFade(to);
      if (renderer && !reducedMotion.matches) this.scheduleCapture(0);
      return;
    }

    let from = current;
    if (interrupting) {
      this.tween?.kill();
      this.fade?.kill();
      this.tween = this.fade = null;
      renderer.resize(scale);
      const frozen = this.currentFrame();
      from = frozen && renderer.freeze(frozen) ? 'composite' : current;
    }

    const center = point ?? this.toggleCenter();
    const maxDist = farthestCorner(center);
    const frameSeed = seed ?? randomSeed();
    this.last = { point: center, seed: frameSeed, from: otherTheme(to) };
    this.frame = { from, to, center, maxDist, seed: frameSeed };
    this.state.progress = 0;
    this.state.time = 0;

    renderer.resize(scale);
    this.draw();
    gsap.set(renderer.canvas, { opacity: 1 });
    renderer.canvas.classList.add('is-active');
    applyTheme(to, this.onThemeChange);

    const duration = inkParams.duration;

    this.tween = gsap.to(this.state, {
      progress: 1,
      duration,
      ease: EASE,
      onUpdate: () => {
        this.state.time = this.tween?.time() ?? 0;
        this.draw();
      },
      onComplete: () => this.finish(),
    });
    this.tween.timeScale(inkParams.timeScale);
  }

  currentFrame() {
    if (!this.frame) return null;
    const { progress, time } = this.state;
    const { maxDist } = this.frame;
    const linear = Math.min(1, time / inkParams.duration);
    const ramp = Math.max(0, (linear - SPREAD.cleanupFrom) / (1 - SPREAD.cleanupFrom));
    const cleanup =
      ramp ** SPREAD.cleanupPow * maxDist * SPREAD.cleanupReach + Math.max(0, (linear - 0.97) / 0.03) * maxDist;
    return { ...this.frame, progress, time, radius: progress * maxDist * SPREAD.growth, cleanup };
  }

  draw() {
    const frame = this.currentFrame();
    if (this.renderer && frame) this.renderer.draw(frame);
  }

  finish() {
    const canvas = this.renderer?.canvas;
    this.tween = null;
    if (!canvas) return;
    this.fade = gsap
      .to(canvas, { opacity: 0, duration: FADE_OUT, ease: 'none', onComplete: () => this.hide() })
      .timeScale(inkParams.timeScale);
  }

  hide() {
    this.fade = null;
    this.frame = null;
    this.renderer?.canvas.classList.remove('is-active');
    if (this.captureQueued) this.scheduleCapture(0);
  }

  cancel() {
    if (!this.frame) return;
    this.tween?.kill();
    this.fade?.kill();
    this.tween = null;
    this.hide();
  }

  crossFade(to) {
    const root = document.documentElement;

    root.classList.add('theme-fade');
    root.style.setProperty('--theme-fade', `${CSS_FADE_S}s`);
    void root.offsetWidth;
    applyTheme(to, this.onThemeChange);
    window.clearTimeout(this.cssFadeTimer);
    this.cssFadeTimer = window.setTimeout(() => {
      root.classList.remove('theme-fade');
      if (this.captureQueued) this.scheduleCapture(0);
    }, CSS_FADE_S * 1000 + 50);
  }

  toggleCenter() {
    const r = this.toggleButton?.getBoundingClientRect();
    if (!r) return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  scheduleCapture(delay) {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => void this.captureAll(), delay);
  }

  async captureAll() {
    const renderer = this.renderer;
    if (this.destroyed || !renderer || renderer.isLost || reducedMotion.matches) return;

    if (this.capturing || this.frame || document.documentElement.classList.contains('theme-fade')) {
      this.captureQueued = true;
      return;
    }

    const scale = renderScale();
    const key = layoutKey(scale);
    const current = getTheme();
    const themes = [current, otherTheme(current)].filter((t) => !renderer.hasValid(t, key));
    this.captureQueued = false;
    if (themes.length === 0) return;

    const gen = ++this.captureGen;
    this.capturing = true;
    try {
      for (const theme of themes) {
        const snap = await capturePage(theme, scale, renderer.maxTextureSize);
        if (this.destroyed || gen !== this.captureGen) return;
        if (snap.key !== layoutKey(renderScale())) {
          this.captureQueued = true;
          break;
        }
        renderer.upload(snap);
      }
    } catch (err) {
      console.error('[ink] capture failed', err);
    } finally {
      this.capturing = false;
    }
    if (this.captureQueued) this.scheduleCapture(RESIZE_DEBOUNCE_MS);
  }

  destroy() {
    this.destroyed = true;
    this.captureGen += 1;
    window.clearTimeout(this.resizeTimer);
    window.removeEventListener('resize', this.handleResize);
    this.resizeObserver?.disconnect();
    this.cancel();
  }
}

function farthestCorner(p) {
  const w = document.documentElement.clientWidth;
  const h = document.documentElement.clientHeight;
  return Math.max(Math.hypot(p.x, p.y), Math.hypot(w - p.x, p.y), Math.hypot(p.x, h - p.y), Math.hypot(w - p.x, h - p.y)) + 4;
}

function randomSeed() {
  return { x: Math.random() * 64 - 32, y: Math.random() * 64 - 32, angle: Math.random() * Math.PI * 2 };
}
