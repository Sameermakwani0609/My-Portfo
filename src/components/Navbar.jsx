import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", section: "hero", icon: "🏠" },
    { name: "About", section: "about", icon: "👤" },
    { name: "Experience", section: "experience", icon: "💼" },
    { name: "Education", section: "education", icon: "🎓" },
    { name: "Skills", section: "skills", icon: "⚡" },
    { name: "Projects", section: "projects", icon: "🚀" },
    { name: "Achievements", section: "achievements", icon: "🏆" },
    { name: "Contact", section: "contact", icon: "📧" },
  ];

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
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.section);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10"
          : "bg-black/80 backdrop-blur-md"
      } border-b border-gray-800/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="group relative flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-bold"
            >
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-xs sm:text-sm">
                  SM
                </span>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base lg:text-xl">
                  Sameer
                </span>
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 text-sm sm:text-base lg:text-xl">
                  Makwani
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`relative px-2 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  activeSection === link.section
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-base">{link.icon}</span>
                  {link.name}
                </span>

                {activeSection === link.section && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300 focus:outline-none touch-manipulation"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="flex flex-col items-center justify-center w-5 sm:w-6 gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                  style={{ width: "20px" }}
                ></span>
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                  style={{ width: "20px" }}
                ></span>
                <span
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                  style={{ width: "20px" }}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2 sm:py-3 space-y-0.5 border-t border-gray-800/50 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-2.5 text-sm font-medium rounded-lg transition-all duration-300 touch-manipulation ${
                  activeSection === link.section
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10"
                }`}
              >
                <span className="text-base sm:text-lg">{link.icon}</span>
                <span className="flex-1 text-left">{link.name}</span>
                {activeSection === link.section && (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles for Mobile Menu */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
