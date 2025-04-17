import React from "react";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl shadow-xl mb-6 border border-transparent hover:border-blue-400 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-white border-b border-gray-700 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700 text-xs sm:text-sm text-white rounded-full border border-gray-600 hover:bg-blue-500 hover:border-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
    <div className="min-h-screen pt-0 sm:pt-20 px-4 sm:px-6 bg-black">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-purple-500 text-center mb-4 sm:mb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
