import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const offset = (viewportHeight - sectionHeight) / 2;

      window.scrollTo({
        top: section.offsetTop - navbarHeight + offset,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", section: "hero" },
    { name: "About", section: "about" },
    { name: "Experience", section: "experience" },
    { name: "Education", section: "education" },
    { name: "Skills", section: "skills" },
    { name: "Projects", section: "projects" },
    { name: "Achievements", section: "achievements" },
    { name: "Contact", section: "contact" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-md sticky top-3 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-8 md:px-16">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl md:text-3xl font-bold flex items-center space-x-2 md:space-x-3"
            >
              <span className="text-blue-500">Sameer</span>
              <span className="text-purple-500">Makwani</span>
            </button>
          </div>

          <div className="hidden md:flex flex-grow justify-end space-x-6 md:space-x-10 pr-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="relative group text-white text-base md:text-lg lg:text-xl font-medium tracking-wide"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="block relative group text-white text-lg py-2 w-full text-left"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
