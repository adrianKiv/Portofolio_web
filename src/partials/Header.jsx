function Header() {
  // Navigation links
  const navLinks = [
    { text: "About", href: "#about" },
    { text: "Experiences", href: "#experiences" },
    { text: "Project", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-white min-h-[80vh] relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover">
      <nav className="bg-transparant z-50 backdrop-filter backdrop-blur-sm fixed top-0 w-full shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="items-center justify-between h-16 bg-transparent flex relative">
            <div className="items-center flex">
              <a href="#" className="flex items-center space-x-2">
                <img
                  alt="logo"
                  src="src/assets/images/logo.png"
                  className="invert h-14 w-auto"
                />
                <span className="text-sky-300 font-bold text-2xl tracking-wide">
                  Adrian
                </span>
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                <div className="flex space-x-6">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-indigo-300 px-3 py-2 rounded-md text-sm font-medium hover:text-indigo-600"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="ml-4 items-center flex space-x-4"></div>
            </div>
            <div className="md:hidden -mr-2 flex">
              <button
                type="button"
                className="inline-flex p-2 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 items-center justify-center rounded-md text-white"
              >
                <span className="items-center justify-center h-6 w-6 text-white flex">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    id="Windframe_p206YVbJk"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>{" "}
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-32 pb-16 sm:pt-32 lg:pb-10 sm:pb-12 relative z-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-8">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {" "}
                Hi, my name is <br />{" "}
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-gray-50 to-white">
                  Adrian Mulianto
                </span>{" "}
              </p>
              <p className="mt-6 text-lg text-white max-w-lg">
                I am a computer science student with a strong passion for
                software development, data, and networking. I have actively
                participated in programming and data competitions. I am highly
                enthusiastic about expanding my knowledge in networking, data,
                and software development. I also enjoy collaborating with others
                to help improve my skills.
              </p>
            </div>
            <div className="relative">
              <img
                alt="table work"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
