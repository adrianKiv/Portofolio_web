import GBRLOGO from "../assets/images/logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

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
            <ul className="flex justify-center mt-5 space-x-5">
              {/* Facebook */}
              <li>
                <a
                  href="https://www.facebook.com/adrian.mulianto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/adriannn_027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:adrianmulianto@gmail.com"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/adrianKiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/in/adrianmulianto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
