import React, { useState } from "react";

const ExperienceCard = ({
  role,
  company,
  period,
  skills,
  description,
  achievements,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-1">
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      <div className="relative p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1">
            <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
              <div className="p-1.5 sm:p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 flex-shrink-0 mt-0.5">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {role}
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                  <span className="text-blue-400 font-medium flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="truncate">{company}</span>
                  </span>
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-gray-600"></span>
                  <span className="text-gray-400 text-[10px] sm:text-sm flex items-center gap-0.5 sm:gap-1">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">{period}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-green-500/10 border border-green-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex-shrink-0 self-start">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-green-400 text-[8px] sm:text-xs font-medium">
              Active
            </span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>
        )}

        {/* Achievements Section */}
        {achievements && (
          <div className="mb-3 sm:mb-4">
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
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
              {achievements
                .slice(0, isExpanded ? achievements.length : 4)
                .map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 sm:gap-2 bg-gray-800/50 p-2 sm:p-3 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
                  >
                    <span className="text-purple-500 mt-0.5 flex-shrink-0">
                      ▸
                    </span>
                    <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm break-words">
                      {achievement}
                    </span>
                  </div>
                ))}
            </div>
            {achievements.length > 4 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 sm:mt-3 text-purple-400 hover:text-purple-300 text-[10px] sm:text-sm font-medium transition-colors duration-300 flex items-center gap-1"
              >
                {isExpanded
                  ? "Show Less"
                  : `Show ${achievements.length - 4} More`}
                <svg
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
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
              </button>
            )}
          </div>
        )}

        {/* Skills Section */}
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="group/skill relative px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 text-gray-300 hover:text-white text-[9px] sm:text-xs md:text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <span className="relative z-10">{skill}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></span>
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-purple-500"
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

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Quicode Developer Pvt Ltd",
      period: "October 2023 - Present",
      description:
        "Working as a Full-Stack Developer building scalable web applications and enterprise solutions using modern technologies.",
      skills: [
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Git",
        "Mendix",
        "Redux",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "JWT",
      ],
      achievements: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Collaborated with cross-functional teams to deliver high-quality software products",
        "Optimized front-end performance and page load times by 40%",
        "Implemented RESTful APIs and integrated with backend services",
        "Managed application state using Redux and Context API",
        "Wrote unit and integration tests to ensure application stability",
        "Reduced bug rate by 30% through comprehensive testing",
        "Mentored junior developers and conducted code reviews",
      ],
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0">
            A timeline of my professional experience and achievements
          </p>
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            <span className="w-8 sm:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        {/* Timeline Connection Line - Hidden on mobile */}
        <div className="hidden sm:flex relative mt-12 justify-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        </div>

        {/* Bottom Action */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-purple-500/50 hover:border-purple-500 text-purple-400 hover:text-white rounded-full transition-all duration-300 hover:bg-purple-500/10 text-xs sm:text-sm w-full sm:w-auto">
            <span>View Full Resume</span>
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

        {/* Stats Footer - Responsive grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto">
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
              3+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Years Experience
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
              5+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Projects Delivered
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
              5+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Technologies
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400">
              100%
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
