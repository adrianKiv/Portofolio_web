import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState(""); // '', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2wxiroc",
        "template_grhubn9",
        e.target,
        "yLfGyJRmr2cjFmQeU", // atau public key dari EmailJS
      )
      .then(() => {
        setStatus("success");
        e.target.reset();
        // Sembunyikan pesan sukses setelah 5 detik
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((err) => {
        console.error("Gagal mengirim:", err);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Interested in working with me? Send a message and let's talk.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 dark:border-gray-700">
          {/* Sisi Kiri: Info Kontak (Gradien) */}
          <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                {/* Fill up the form and I will get back to you within 24 hours. */}
              </p>

              <div className="space-y-6">
                {/* Email Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">adrianmulianto@gmail.com</span>
                </div>

                {/* Location Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">
                    Sukabumi, West Java - Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Dekorasi Tambahan */}
            {/* <div className="mt-12 opacity-20">
              <svg className="w-32 h-32 absolute -bottom-6 -left-6 transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
              </svg>
            </div> */}
          </div>

          {/* Sisi Kanan: Form Input */}

          {/* <div className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div> */}
        
        </div>
      </div>
    </section>
  );
}

