import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Floating Particles - Hidden on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-500/30 rounded-full animate-float"></div>
          <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-blue-400/30 rounded-full animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              About Me
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 leading-tight">
            Know Me Better
          </h2>

          <div className="flex justify-center gap-1.5 sm:gap-2 animate-on-scroll opacity-0">
            <span className="w-8 sm:w-10 md:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Profile Image & Description */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-14 md:mb-16">
          {/* Image Section */}
          <div className="lg:col-span-2 flex justify-center animate-on-scroll opacity-0">
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full opacity-20 blur-xl sm:blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow"></div>

              {/* Outer Ring - Responsive sizes */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px] sm:p-[3px] animate-spin-slow">
                  <div className="absolute inset-[2px] sm:inset-[3px] rounded-full bg-black"></div>
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
                </div>
              </div>

              {/* Floating Badge - Responsive */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-purple-500 to-blue-500 p-1.5 sm:p-2 rounded-full shadow-lg shadow-purple-500/25">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4 animate-on-scroll opacity-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center lg:text-left">
              Passionate Software Engineer
            </h3>

            <div className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
              <p>
                I am a passionate Software Engineer with expertise in building
                innovative solutions using cutting-edge technologies. With a
                strong background in software development, I strive to create
                impactful applications that solve real-world problems.
              </p>
              <p>
                My journey in technology began during my undergraduate studies,
                where I discovered my passion for coding and problem-solving.
                Since then, I've worked on various projects for web
                applications.
              </p>
              <p className="hidden sm:block">
                When I'm not coding, I enjoy working on personal projects,
                learning new skills, and staying updated on industry trends to
                continuously improve my craft.
              </p>
            </div>

            {/* Quick Info Tags - Responsive */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 pt-1 sm:pt-2">
              <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-[8px] sm:text-xs text-purple-400">
                🎯 3+ Years Experience
              </span>
              <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[8px] sm:text-xs text-blue-400">
                💻 Full Stack Developer
              </span>
              <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-[8px] sm:text-xs text-green-400">
                🚀 5+ Projects
              </span>
            </div>
          </div>
        </div>

        {/* Expertise Cards - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 animate-on-scroll opacity-0">
            {/* Card Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              {/* Icon - Responsive */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-purple-400 transition-colors duration-300">
                Full Stack Development
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Building responsive and robust web applications using both
                frontend and backend technologies.
              </p>

              <button className="mt-3 sm:mt-4 text-purple-400 hover:text-purple-300 text-[10px] sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 animate-on-scroll opacity-0 delay-100">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400"
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

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300">
                Low Code Developer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Creating applications quickly with minimal hand-coding using
                powerful low-code platforms.
              </p>

              <button className="mt-3 sm:mt-4 text-blue-400 hover:text-blue-300 text-[10px] sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 animate-on-scroll opacity-0 delay-200">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-green-400 transition-colors duration-300">
                Native Developer
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Designing intuitive and user-friendly Android & iOS apps for a
                seamless mobile experience.
              </p>

              <button className="mt-3 sm:mt-4 text-green-400 hover:text-green-300 text-[10px] sm:text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Learn More
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 animate-on-scroll opacity-0">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>Let's Connect</span>
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
          </a>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1.5s;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 0.6s ease-out,
            transform 0.6s ease-out;
        }

        .animate-on-scroll.animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
      `}</style>
    </section>
  );
};

export default About;
