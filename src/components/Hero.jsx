import React, { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Software Engineer | AI Enthusiast";
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    const typeEffect = () => {
      const currentText = text.substring(0, index);
      if (textRef.current) {
        textRef.current.textContent = currentText;
      }

      if (!isDeleting && index < text.length) {
        index++;
        timeoutId = setTimeout(typeEffect, 100);
      } else if (isDeleting && index > 0) {
        index--;
        timeoutId = setTimeout(typeEffect, 50);
      } else if (!isDeleting && index === text.length) {
        isDeleting = true;
        timeoutId = setTimeout(typeEffect, 2000);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        timeoutId = setTimeout(typeEffect, 500);
      }
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 py-8 sm:py-12 md:py-20 bg-black"
    >
      {/* Animated Background - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Gradient Orbs - Reduced sizes on mobile */}
        <div className="absolute top-10 -left-10 sm:top-20 sm:-left-20 w-36 h-36 sm:w-72 sm:h-72 bg-purple-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-10 sm:bottom-20 sm:-right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay - Reduced opacity on mobile */}
        <div
          className="absolute inset-0 opacity-30 sm:opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Text Section */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
            {/* Greeting Badge - Mobile friendly */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium">
                Available for Freelance
              </span>
            </div>

            {/* Title - Responsive sizes */}
            <div className="space-y-1 sm:space-y-2">
              <h5 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-400">
                Hi, I'm
              </h5>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-300% animate-gradient">
                  Sameer Makwani
                </span>
              </h1>
            </div>

            {/* Typing Effect - Responsive */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
                <span ref={textRef}></span>
                <span className="inline-block w-0.5 sm:w-1 h-5 sm:h-6 md:h-8 bg-purple-500 ml-1 animate-blink"></span>
              </span>
            </div>

            {/* Description - Responsive text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0 px-2 sm:px-0">
              Passionate about creating innovative solutions using cutting-edge
              technologies. Specializing in full-stack development and low-code
              platforms.
            </p>

            {/* Stats - Responsive grid */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4">
              <div className="group cursor-pointer text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  Years Experience
                </div>
              </div>
              <div className="group cursor-pointer text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  Projects Done
                </div>
              </div>
              <div className="group cursor-pointer text-center sm:text-left">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Buttons - Stack on mobile, row on larger screens */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>View My Work</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-blue-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:sameermakwani0609@gmail.com"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base w-full sm:w-auto"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-red-400 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
                <span>Email</span>
              </a>
            </div>

            {/* Tech Stack Pills - Responsive */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] sm:text-xs text-purple-400">
                React
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] sm:text-xs text-blue-400">
                Node.js
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[10px] sm:text-xs text-green-400">
                MongoDB
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[10px] sm:text-xs text-yellow-400">
                Python
              </span>
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-500/10 border border-red-500/20 rounded-full text-[10px] sm:text-xs text-red-400">
                AI/ML
              </span>
            </div>
          </div>

          {/* Image Section - Hidden on mobile, visible on tablet+ */}
          <div className="hidden sm:flex justify-center lg:justify-end mt-6 sm:mt-0">
            <div className="relative group">
              {/* Animated Ring - Smaller on tablet */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow"></div>

              {/* Outer Ring - Responsive sizes */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[3px] animate-spin-slow">
                  <div className="absolute inset-[3px] rounded-full bg-black"></div>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent">
                  <img
                    src="/Profilephoto.jpeg"
                    alt="Sameer Makwani"
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Online Status - Responsive */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-500/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs text-white font-medium flex items-center gap-1 sm:gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-pulse"></span>
                    Available
                  </div>
                </div>
              </div>

              {/* Floating Icons - Smaller on tablet */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-purple-500/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-purple-500/30 animate-float">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-blue-500/20 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-blue-500/30 animate-float-delay">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-purple-500 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Custom Animations - Inline Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatDelay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0px);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 300% 300%;
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: floatDelay 3s ease-in-out infinite 1.5s;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
