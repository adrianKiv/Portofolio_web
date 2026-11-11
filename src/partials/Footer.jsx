import GBRLOGO from "../assets/images/logo.png";

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="text-center">
            <a
              href="#"
              className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img src={GBRLOGO} className="h-6 sm:h-9" alt="yan Logo" />
            </a>
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              Copyright © 2025 Adrian™. All Rights Reserved. Built with{" "}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                React,
              </a>{" "}
              <a
                href="https://vite.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Vite
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline dark:text-purple-500"
              >
                Tailwind CSS
              </a>
              .
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
