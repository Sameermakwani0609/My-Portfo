import React, { useEffect, useState } from "react";

const SkillCategory = ({ title, skills, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Icon mapping for different categories
  const getCategoryIcon = (title) => {
    const icons = {
      "Programming Languages": "💻",
      "Frontend Development": "🎨",
      "Backend Development": "⚙️",
      "Low Code Development": "🚀",
      "DevOps & Cloud": "☁️",
      Databases: "🗄️",
    };
    return icons[title] || "📌";
  };

  // Color mapping for different categories
  const getCategoryColor = (title) => {
    const colors = {
      "Programming Languages": "from-purple-500 to-pink-500",
      "Frontend Development": "from-blue-500 to-cyan-500",
      "Backend Development": "from-green-500 to-emerald-500",
      "Low Code Development": "from-orange-500 to-red-500",
      "DevOps & Cloud": "from-indigo-500 to-purple-500",
      Databases: "from-yellow-500 to-amber-500",
    };
    return colors[title] || "from-gray-500 to-gray-600";
  };

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(title)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      ></div>

      {/* Glow Effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${getCategoryColor(title)} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
      ></div>

      {/* Top Gradient Line */}
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(title)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
      ></div>

      <div className="relative p-4 sm:p-6 md:p-8">
        {/* Header - Responsive */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(title)}/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
          >
            <span className="text-xl sm:text-2xl">
              {getCategoryIcon(title)}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="text-[9px] sm:text-xs text-gray-500">
                {skills.length} skills
              </span>
              <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-gray-600"></span>
              <span className="text-[9px] sm:text-xs text-gray-500">
                Expert
              </span>
            </div>
          </div>
        </div>

        {/* Skills Grid - Responsive */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="group/skill relative px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 text-[9px] sm:text-xs md:text-sm rounded-full transition-all duration-300 hover:scale-105 cursor-default"
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></span>
                {skill}
              </span>
              <span
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${getCategoryColor(title)} opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}
              ></span>
            </span>
          ))}
        </div>

        {/* Skill Progress Indicator - Responsive */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-[9px] sm:text-xs text-gray-500">
            <span>Proficiency</span>
            <span className="text-purple-400">Advanced</span>
          </div>
          <div className="w-full h-0.5 sm:h-1 bg-gray-700 rounded-full mt-1.5 sm:mt-2 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getCategoryColor(title)} rounded-full transition-all duration-1000 ease-out`}
              style={{ width: isHovered ? "90%" : "70%" }}
            ></div>
          </div>
        </div>

        {/* Decorative Element - Hidden on mobile */}
        <div className="hidden sm:block absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
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

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "VB.NET"],
    },
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Angular",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "REST API", "VB.NET", "Mendix"],
    },
    {
      title: "Low Code Development",
      skills: [
        "Mendix",
        "Microflows",
        "Pages & Navigation",
        "Custom Widgets",
        "Domain Model Design",
        "Data Integration",
        "Security & Access Rules",
        "App Deployment",
        "Custom JavaScript Actions",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
  ];

  return (
    <section
      id="skills"
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block animate-on-scroll opacity-0">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
              Expertise
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 leading-tight">
            Technical Skills
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0 animate-on-scroll opacity-0">
            Technologies and tools I work with to build amazing digital
            experiences
          </p>

          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 animate-on-scroll opacity-0">
            <span className="w-8 sm:w-10 md:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0`}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <SkillCategory {...category} index={index} />
            </div>
          ))}
        </div>

        {/* Skill Stats - Responsive */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto animate-on-scroll opacity-0">
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              6
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Categories
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              30+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Technologies
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              3+
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Years Experience
            </div>
          </div>
          <div className="text-center p-2.5 sm:p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
              Committed
            </div>
          </div>
        </div>

        {/* Bottom CTA - Responsive */}
        <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 animate-on-scroll opacity-0">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-sm sm:text-base w-full sm:w-auto"
          >
            <span>View My Projects</span>
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

export default Skills;
