import GBRLOGO from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080c14]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <a href="#" className="flex items-center gap-3 text-sm font-bold text-white">
          <img src={GBRLOGO} className="h-8 w-8 rounded-full object-cover" alt="Adrian Mulianto" />
          ADRIAN MULIANTO
        </a>
        <div className="text-xs text-slate-500">
          © 2026 · Built with React, Vite & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}

export default Footer;
