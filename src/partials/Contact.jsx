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
                Fill up the form and I will get back to you within 24 hours.
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
                    Bandung, West Java - Indonesia
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
          <div className="lg:w-3/5 p-10 md:p-14">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Field Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === "sending"}
                    placeholder="Adrian Mulianto"
                    className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                {/* Field Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    required
                    disabled={status === "sending"}
                    placeholder="adrianmulianto@gmail.com"
                    className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Field Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  disabled={status === "sending"}
                  placeholder="How can I help you?"
                  className="w-full bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              {/* Status Pesan & Tombol Submit */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                {/* Notifikasi Status */}
                <div className="text-sm font-semibold h-5">
                  {status === "sending" && (
                    <span className="text-blue-500 animate-pulse">
                      Mengirim pesan...
                    </span>
                  )}
                  {status === "success" && (
                    <span className="text-green-500">
                      ✅ Pesan berhasil dikirim!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-500">
                      ❌ Gagal mengirim pesan. Coba lagi.
                    </span>
                  )}
                </div>

                {/* Tombol Animasi Kustom Anda */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cursor-pointer relative bg-blue-100 dark:bg-white/10 py-2 rounded-full min-w-[10rem] min-h-[3rem] group flex items-center justify-start hover:bg-blue-400 dark:hover:bg-blue-600 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_rgba(0,0,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                    <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                    <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-blue-300 dark:bg-blue-500 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-gray-900 dark:group-hover:bg-white">
                      <div className="size-[0.8rem] text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-gray-900 group-hover:-rotate-30 transition-all duration-[2s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 16 16"
                          height="100%"
                          width="100%"
                        >
                          <path
                            fill="currentColor"
                            d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] text-blue-800 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white font-semibold">
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
