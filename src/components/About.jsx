import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 pt-0 sm:pt-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-6">
        About Me
      </h2>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center text-gray-300 mb-12 sm:mb-16 px-2 sm:px-4">
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          I am a passionate Software Engineer with expertise in building
          innovative solutions using cutting-edge technologies. With a strong
          background in software development, I strive to create impactful
          applications that solve real-world problems.
        </p>
        <p className="mb-4 text-base sm:text-lg md:text-xl">
          My journey in technology began during my undergraduate studies, where
          I discovered my passion for coding and problem-solving. Since then,
          I've worked on various projects for web applications.
        </p>
        <p className="text-base sm:text-lg md:text-xl">
          When I'm not coding, I enjoy working on personal projects, learning
          new skills, and staying updated on industry trends to continuously
          improve my craft.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">
            Full Stack Development
          </h3>
          <p>
            Building responsive and robust web applications using both frontend
            and backend technologies.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">
            Low Code Developer
          </h3>
          <p>
            Creating applications quickly with minimal hand-coding using
            powerful low-code platforms.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2">
            Native Developer
          </h3>
          <p>
            Designing intuitive and user-friendly Android & iOS apps for a
            seamless mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
