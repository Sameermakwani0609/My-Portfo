import React, { useEffect } from "react";

const EducationCard = ({ degree, institution, period, description }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-1">
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      <div className="relative p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-1">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 flex-shrink-0 mt-0.5 sm:mt-1">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {degree}
                </h3>
              </div>
            </div>
          </div>

          {/* Period Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-500/10 border border-blue-500/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex-shrink-0 self-start sm:self-auto">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-medium">
              {period}
            </span>
          </div>
        </div>

        {/* Institution with Location Icon */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-blue-400 font-semibold text-sm sm:text-base md:text-lg">
            {institution}
          </span>
        </div>

        {/* Description List */}
        <div className="mt-3 sm:mt-4">
          <h4 className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-400 font-semibold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Key Highlights
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
            {description.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-1.5 sm:gap-2 text-gray-300 text-xs sm:text-sm md:text-base p-1.5 sm:p-2 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
                <span className="break-words">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative Element - Hidden on mobile */}
        <div className="hidden sm:block absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-purple-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
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

  const educations = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "NBN Sinhgad School of Engineering, Pune",
      period: "2023",
      description: [
        "CGPA: 8.0",
        "Focused on Mathematics, Computer Science, and Programming",
        "Developed a strong foundation in software development",
        "Built multiple full-stack projects during coursework",
        "Collaborated in technical events",
        "Served as Class Representative for 2 years, managing student-faculty coordination",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Floating Particles - Reduced on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-500/30 rounded-full animate-float"></div>
          <div className="absolute top-60 right-40 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-blue-400/30 rounded-full animate-float"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Education
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 leading-tight">
            Academic Background
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0 animate-on-scroll opacity-0">
            My educational journey and academic achievements
          </p>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 animate-on-scroll opacity-0">
            <span className="w-8 sm:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="space-y-4 sm:space-y-6">
          {educations.map((edu, index) => (
            <div key={index} className="animate-on-scroll opacity-0">
              <EducationCard {...edu} />
            </div>
          ))}
        </div>

        {/* Stats Section - Responsive grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto animate-on-scroll opacity-0">
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              B.Tech
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Degree
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              8.0
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              CGPA
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              2023
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Year
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              6+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Achievements
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 animate-on-scroll opacity-0">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>Contact for More Info</span>
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
      `}</style>
    </section>
  );
};

export default Education;