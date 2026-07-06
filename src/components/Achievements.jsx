import React, { useEffect, useState } from "react";

const AchievementCard = ({ title, issuer, date, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

      <div className="relative p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 sm:gap-3">
              {/* Achievement Icon - Responsive */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
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
              </div>

              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {title}
                </h3>
              </div>
            </div>
          </div>

          {/* Date Badge - Responsive */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-500/10 border border-blue-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex-shrink-0 self-start">
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
            <span className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
              {date}
            </span>
          </div>
        </div>

        {/* Issuer Section - Responsive */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-800/30 rounded-xl border border-gray-700/50 group-hover:border-purple-500/30 transition-all duration-300">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-purple-400 font-medium text-xs sm:text-sm md:text-base">
            {issuer}
          </span>
        </div>

        {/* Description - Responsive */}
        <div className="relative">
          <p
            className={`text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}
          >
            {description}
          </p>

          {/* Read More/Less Button */}
          {description.length > 200 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-1.5 sm:mt-2 text-purple-400 hover:text-purple-300 text-[10px] sm:text-sm font-medium flex items-center gap-1 transition-colors duration-300"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  Read More
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>

        {/* Tags/Skills - Responsive */}
        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[8px] sm:text-xs text-purple-400">
            Blockchain
          </span>
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[8px] sm:text-xs text-blue-400">
            Smart Contracts
          </span>
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-500/10 border border-green-500/20 rounded-full text-[8px] sm:text-xs text-green-400">
            Cryptocurrency
          </span>
          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-[8px] sm:text-xs text-yellow-400">
            DEX
          </span>
        </div>

        {/* Achievement Number - Hidden on mobile */}
        <div className="hidden sm:block absolute top-6 right-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white/5 group-hover:text-white/10 transition-all duration-500">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Decorative Element - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <svg
            className="w-12 h-12 sm:w-16 sm:h-16 text-purple-500"
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

const Achievements = () => {
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

  const achievements = [
    {
      title: "Decentralized Exchange for Cryptocurrencies using Blockchain",
      issuer:
        "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA-2023)",
      date: "May 2023",
      description:
        "Developed and executed a decentralized exchange (DEX) utilizing blockchain technology for peer-to-peer trading of cryptocurrencies, including Ethereum and Sprybucks. The DEX offers enhanced security, privacy, and autonomy for traders while utilizing smart contracts and a proof-of-stake consensus algorithm for transparency and reliability.",
    },
  ];

  return (
    <section
      id="achievements"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Animated Background - Optimized for mobile */}
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Recognition
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 leading-tight">
            Achievements
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0 animate-on-scroll opacity-0">
            Academic and professional accomplishments that showcase my expertise
          </p>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 animate-on-scroll opacity-0">
            <span className="w-8 sm:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Achievements List */}
        <div className="space-y-4 sm:space-y-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AchievementCard {...achievement} index={index} />
            </div>
          ))}
        </div>

        {/* Stats Section - Responsive Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto animate-on-scroll opacity-0">
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              1
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Publication
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
              ICCUBEA
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Conference
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DEX
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Project
            </div>
          </div>
        </div>

        {/* More Coming Soon - Responsive */}
        <div className="mt-10 sm:mt-12 text-center animate-on-scroll opacity-0">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-dashed border-gray-600 rounded-full">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-spin-slow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-gray-400 text-[10px] sm:text-sm font-medium">
              More achievements coming soon...
            </span>
          </div>
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
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

export default Achievements;