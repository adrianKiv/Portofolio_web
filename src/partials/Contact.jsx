import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2wxiroc",
        "template_grhubn9",
        e.target,
        "yLfGyJRmr2cjFmQeU" // atau public key dari EmailJS
      )
      .then(() => {
        alert("Pesan berhasil dikirim!");
      })
      .catch((err) => {
        console.error("Gagal mengirim:", err);
        alert("Gagal mengirim pesan.");
      });

    e.target.reset(); // reset form
  };

  return (
    <section id="contact" className="py-16 bg-stone-100 dark:bg-gray-800">
      <div className="container mx-auto text-center px-4 max-w-xl">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-400 dark:text-indigo-200">
          Contact
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Interested in working with me? Send a message using the form below.
        </p>

        <form
          onSubmit={sendEmail}
          method="POST"
          encType="text/plain"
          className="space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="Email"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer relative bg-indigo-100 dark:bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-indigo-400 dark:hover:bg-indigo-600 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-indigo-300 dark:bg-indigo-600 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                  <div className="size-[0.8rem] text-black dark:text-white group-hover:text-white group-hover:-rotate-30 transition-all duration-[2s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
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
              <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] text-indigo-700 dark:text-white group-hover:text-black">
                Send Message
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
