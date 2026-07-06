import React from "react";

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  features,
  category,
}) => {
  // Category badge colors
  const getCategoryBadge = (category) => {
    const badges = {
      Mobile: "bg-green-600/90",
      Desktop: "bg-blue-600/90",
      Web: "bg-purple-600/90",
    };
    return badges[category] || "bg-gray-600/90";
  };

  return (
    <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-purple-500/20 hover:-translate-y-2">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Project+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Badges - Responsive */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-purple-600/90 backdrop-blur-sm px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-semibold text-white z-20">
          Featured
        </div>

        {/* Category Badge */}
        <div
          className={`absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 ${getCategoryBadge(category)} backdrop-blur-sm px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-semibold text-white z-20 flex items-center gap-0.5 sm:gap-1`}
        >
          <span className="text-xs sm:text-sm">
            {category === "Mobile" && "📱"}
            {category === "Desktop" && "💻"}
            {category === "Web" && "🌐"}
          </span>
          <span className="hidden xs:inline">{category}</span>
        </div>

        {/* Live Status Indicator */}
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 bg-black/60 backdrop-blur-sm px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs text-white z-20 flex items-center gap-1 sm:gap-1.5 md:gap-2">
          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="hidden xs:inline text-[8px] sm:text-[10px] md:text-xs">
            {category === "Mobile" && "React Native"}
            {category === "Desktop" && "VB.NET"}
            {category === "Web" && "MERN Stack"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-3 sm:p-4 md:p-6">
        <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-1.5 md:mb-2 text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 mb-2 sm:mb-3 md:mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Features */}
        {features && (
          <div className="mb-2 sm:mb-3 md:mb-4">
            <h4 className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-purple-400 font-semibold mb-1 sm:mb-1.5 md:mb-2">
              Key Features
            </h4>
            <ul className="space-y-0.5 sm:space-y-1">
              {features.slice(0, 3).map((feature, idx) => (
                <li
                  key={idx}
                  className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 flex items-start gap-1 sm:gap-1.5 md:gap-2"
                >
                  <span className="text-purple-500 mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  <span className="line-clamp-1 break-words">{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-[8px] sm:text-[10px] md:text-xs text-purple-400 flex items-start gap-1 sm:gap-1.5 md:gap-2">
                  <span className="text-purple-500 mt-0.5 flex-shrink-0">
                    +
                  </span>
                  <span>{features.length - 3} more features</span>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Technologies - Responsive */}
        <div className="flex flex-wrap gap-0.5 sm:gap-1 md:gap-1.5">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-1 sm:px-1.5 md:px-2.5 py-0.5 sm:py-1 bg-black/50 backdrop-blur-sm border border-gray-700 text-gray-300 text-[7px] sm:text-[8px] md:text-[10px] rounded-full hover:border-purple-500 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-1 sm:px-1.5 md:px-2.5 py-0.5 sm:py-1 bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[7px] sm:text-[8px] md:text-[10px] rounded-full whitespace-nowrap">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Bill-Karo Offline Billing Application",
      description:
        "A comprehensive offline billing and inventory management mobile application built with React Native and SQLite. Perfect for small retailers and businesses, it enables seamless invoice generation, product management, and sales tracking without requiring an internet connection.",
      technologies: [
        "React Native",
        "SQLite",
        "JavaScript",
        "Expo",
        "AsyncStorage",
        "React Navigation",
        "Native Base",
      ],
      image: "/BillKaro.png",
      category: "Mobile",
      features: [
        "📱 Fully offline mobile application",
        "💳 Generate and manage invoices without internet",
        "📦 Real-time inventory and stock management",
        "👥 Customer management with history tracking",
        "📊 Sales analytics and daily reports",
        "🔄 Data sync when online (optional)",
        "🖨️ Print invoices via Bluetooth printer",
        "💾 Automatic data backup using SQLite",
      ],
    },
    {
      title: "QClinic - Clinic Management System",
      description:
        "A complete desktop solution for doctors and clinic management, built using VB.NET and MS Access. It handles everything from patient registration, appointment scheduling, medical history management, to invoice generation and print-ready prescriptions with auto-calculated vitals.",
      technologies: ["VB.NET", "MS Access", "Windows Forms", "Crystal Reports"],
      image: "/Qclinic.png",
      category: "Desktop",
      features: [
        "👨‍⚕️ Patient registration and history tracking",
        "📅 Appointment scheduling and reminders",
        "💊 Automated prescription generation",
        "🧾 Invoice and receipt printing",
        "📊 Medical records management",
        "📈 Daily/monthly revenue reports",
      ],
    },
    {
      title: "Sales & Order Management System",
      description:
        "A modern web application aimed at automating sales, inventory, and customer relationships for small businesses. Built on the MERN stack, it features intuitive dashboards, seamless order tracking, and invoice printing support.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Bootstrap",
        "JWT",
        "Redux",
      ],
      image: "/MERNSTACK.png",
      category: "Web",
      features: [
        "📦 Order tracking and management",
        "📊 Inventory control system",
        "👥 Customer relationship management",
        "📈 Analytics and reporting dashboard",
        "🧾 Invoice generation with print support",
        "🔐 Role-based access control",
      ],
    },
  ];

  return (
    <div className="relative py-10 sm:py-14 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2 sm:px-0">
            Explore my latest work across Mobile, Desktop, and Web platforms
          </p>
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            <span className="w-8 sm:w-10 md:w-12 h-1 bg-purple-500 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-300 rounded-full"></span>
            <span className="w-4 sm:w-5 md:w-6 h-1 bg-purple-700 rounded-full"></span>
          </div>
        </div>

        {/* Projects Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Category Tags - Responsive */}
        <div className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 px-2">
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[8px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xs sm:text-sm">📱</span> React Native
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[8px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xs sm:text-sm">💻</span> VB.NET
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-[8px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xs sm:text-sm">🌐</span> MERN Stack
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-[8px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xs sm:text-sm">🗄️</span> SQLite
          </span>
          <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[8px] sm:text-[10px] md:text-sm flex items-center gap-0.5 sm:gap-1 md:gap-2">
            <span className="text-xs sm:text-sm">🎯</span> MS Access
          </span>
        </div>

        {/* Tech Stack Showcase - Responsive */}
        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto px-2">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2.5 sm:p-3 md:p-4 text-center hover:border-green-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 md:mb-2">
              📱
            </div>
            <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm group-hover:text-green-400 transition-colors">
              Mobile
            </h4>
            <p className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs">
              React Native + SQLite
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2.5 sm:p-3 md:p-4 text-center hover:border-blue-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 md:mb-2">
              💻
            </div>
            <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm group-hover:text-blue-400 transition-colors">
              Desktop
            </h4>
            <p className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs">
              VB.NET + MS Access
            </p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2.5 sm:p-3 md:p-4 text-center hover:border-purple-500 transition-all duration-300 group">
            <div className="text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1 md:mb-2">
              🌐
            </div>
            <h4 className="text-white font-semibold text-[10px] sm:text-xs md:text-sm group-hover:text-purple-400 transition-colors">
              Web
            </h4>
            <p className="text-gray-400 text-[8px] sm:text-[10px] md:text-xs">
              MERN Stack
            </p>
          </div>
        </div>

        {/* View More Button - Responsive */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <button className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base w-full sm:w-auto">
            <span>View All Projects</span>
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"
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
  );
};

export default Projects;
