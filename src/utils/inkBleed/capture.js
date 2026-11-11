const BACKGROUND = {
  light: '#ffffff',
  dark: '#111827',
};

const isCoarsePointer = () => window.matchMedia('(pointer: coarse)').matches;

export function renderScale() {
  const cap = isCoarsePointer() ? 1.5 : 2;
  return Math.min(window.devicePixelRatio || 1, cap);
}

export function documentSize() {
  const el = document.documentElement;
  return { width: el.clientWidth, height: Math.max(el.scrollHeight, el.clientHeight) };
}

export function layoutKey(scale) {
  const { width, height } = documentSize();
  return `${width}x${height}@${scale}`;
}

export async function capturePage(theme, scale, maxTextureSize) {
  const t0 = performance.now();
  const key = layoutKey(scale);
  const { width, height } = documentSize();

  const safeScale = Math.min(scale, maxTextureSize / width, maxTextureSize / height);

  const { default: html2canvas } = await import('html2canvas-pro');
  const canvas = await html2canvas(document.body, {
    scale: safeScale,
    backgroundColor: BACKGROUND[theme] || (theme === 'dark' ? '#111827' : '#ffffff'),
    x: 0,
    y: 0,
    width,
    height,
    scrollX: 0,
    scrollY: 0,
    windowWidth: width,
    windowHeight: document.documentElement.clientHeight,
    logging: false,
    useCORS: true,
    onclone: (doc) => {
      if (theme === 'dark') {
        doc.documentElement.classList.add('dark');
        doc.documentElement.dataset.theme = 'dark';
      } else {
        doc.documentElement.classList.remove('dark');
        doc.documentElement.dataset.theme = 'light';
      }
      doc.querySelectorAll('[data-ink-live]').forEach((el) => {
        el.style.visibility = 'hidden';
      });
    },
  });

  return { theme, canvas, scale: safeScale, key, ms: performance.now() - t0 };
}
