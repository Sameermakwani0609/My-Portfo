import React from "react";

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      {/* Title with gradient */}
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent mb-6">
        About Me
      </h2>

      {/* About description */}
      <div className="max-w-4xl mx-auto text-center text-gray-300 mb-16">
        <p className="mb-4">
          I am a passionate Software Engineer and Data Scientist with expertise
          in building innovative solutions using cutting-edge technologies. With
          a strong background in both software development and data science, I
          strive to create impactful applications that solve real-world
          problems.
        </p>
        <p className="mb-4">
          My journey in technology began during my undergraduate studies, where
          I discovered my passion for coding and problem-solving. Since then,
          I've worked on various projects ranging from web applications to
          complex machine learning models.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge through
          technical blogs and workshops.
        </p>
      </div>
      {/* Box section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Full Stack Development */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Full Stack Development
          </h3>
          <p>
            Building responsive and robust web applications using both frontend
            and backend technologies.
          </p>
        </div>

        {/* Low Code Developer */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Low Code Developer
          </h3>
          <p>
            Creating applications quickly with minimal hand-coding using
            powerful low-code platforms.
          </p>
        </div>

        {/* Android Developer */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center text-gray-300 hover:shadow-purple-600 transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Native Developer
          </h3>
          <p>
            Designing intuitive and user-friendly Android & ios apps for a
            seamless mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
