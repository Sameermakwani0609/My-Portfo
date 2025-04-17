import React from "react";

const ExperienceCard = ({ role, company, period, skills }) => {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg mb-6 border-2 border-transparent hover:border-blue-500 transition-all duration-300">
      <h3 className="text-lg sm:text-xl font-semibold text-purple-500 text-center mb-4">
        Experience
      </h3>

      <h3 className="text-lg sm:text-xl font-semibold text-white">{role}</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1">
        <p className="text-primary-blue font-medium">{company}</p>
        <p className="text-gray-400 text-sm">{period}</p>
      </div>
      <div className="mb-4 text-center">
        <div className="inline-block px-4 py-2 bg-gray-800 text-white border-2 border-blue-500 hover:border-blue-700 transition-all duration-300 rounded-md text-sm sm:text-base">
          Frontend Developer
        </div>
      </div>
      <ul className="list-disc pl-5 text-gray-300 mb-4 space-y-2 text-sm sm:text-base">
        <li>
          Built responsive web applications using modern JavaScript frameworks.
        </li>
        <li>
          Collaborated with cross-functional teams to deliver high-quality
          software products.
        </li>
        <li>Optimized front-end performance and page load times.</li>
        <li>Implemented RESTful APIs and integrated with backend services.</li>
        <li>Managed application state using Redux and Context API.</li>
        <li>
          Wrote unit and integration tests to ensure application stability.
        </li>
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 text-gray-300 text-xs sm:text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
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
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Git",
        "Mendix",
      ],
    },
  ];

  return (
    <div className="sm:min-h-screen pt-2 sm:pt-20 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
