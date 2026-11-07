import { createElement, useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const EMAIL = "adrianmulianto@gmail.com";

const contactCards = [
  {
    label: "Professional Network",
    title: "LinkedIn",
    description:
      "Connect with me professionally, check out my experience, and view recommendations.",
    href: "https://www.linkedin.com/in/adrianmulianto/",
    action: "Visit LinkedIn Profile",
    icon: FaLinkedin,
    iconClassName: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    label: "Code & Repositories",
    title: "GitHub",
    description:
      "Explore my open-source projects, code samples, and contributions.",
    href: "https://github.com/adrianKiv",
    action: "Explore Repositories",
    icon: FaGithub,
    iconClassName: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/adriannn_027/",
    icon: FaInstagram,
    hoverClassName: "hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/adrian.mulianto/",
    icon: FaFacebook,
    hoverClassName: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@adrian_2791",
    icon: FaYoutube,
    hoverClassName: "hover:text-red-600 dark:hover:text-red-400",
  },
];

function ExternalLinkIcon() {
  return <FiExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />;
}

function ContactCard({
  label,
  title,
  description,
  href,
  action,
  icon,
  iconClassName,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-between transform transition duration-300 hover:-translate-y-1">
      <div>
        <div
          className={`w-14 h-14 ${iconClassName} rounded-2xl flex items-center justify-center mb-6`}
        >
          {createElement(icon, { className: "w-7 h-7", "aria-hidden": true })}
        </div>
        <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500">
          {label}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          {description}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium text-sm transition"
      >
        {action}
        <ExternalLinkIcon />
      </a>
    </div>
  );
}

function SocialLink({ name, href, icon, hoverClassName }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 ${hoverClassName} rounded-xl transition`}
      title={name}
      aria-label={name}
    >
      {createElement(icon, { className: "w-5 h-5", "aria-hidden": true })}
    </a>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(copyTimeoutRef.current);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Connect
            </span>{" "}
            &amp; Collaborate
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            I am currently open to full-time opportunities, freelance projects,
            or technical discussions. Feel free to reach out through any of the
            platforms below!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-blue-200 dark:border-blue-900/50 flex flex-col justify-between transform transition duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div>
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <FiMail className="w-7 h-7" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
                Primary Contact
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">
                Direct Email
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 break-all font-mono bg-gray-50 dark:bg-gray-900/50 p-3 rounded-xl border border-gray-200 dark:border-gray-700">
                {EMAIL}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-md text-sm"
              >
                <FiArrowRight className="w-4 h-4 mr-2" aria-hidden="true" />
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium transition text-sm border border-gray-200 dark:border-gray-600 cursor-pointer"
                title="Copy Email to Clipboard"
              >
                {copied ? (
                  <>
                    <FiCheck
                      className="w-4 h-4 mr-2 text-green-500 dark:text-green-400"
                      aria-hidden="true"
                    />
                    <span className="text-green-600 dark:text-green-400">
                      Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4 mr-2" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {contactCards.map((card) => (
            <ContactCard key={card.title} {...card} />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
              <FiMapPin className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                Location
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sukabumi, West Java - Indonesia
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mr-2 hidden sm:inline-block">
              Socials:
            </span>
            {socialLinks.map((social) => (
              <SocialLink key={social.name} {...social} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
