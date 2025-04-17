import React from "react";

const ExperienceCard = ({ role, company, period, description, skills }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold text-white">{role}</h3>
      <div className="flex justify-between items-center mb-3">
        <p className="text-primary-blue font-medium">{company}</p>
        <p className="text-gray-400 text-sm">{period}</p>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
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
      company: "Quicode Developer ",
      period: "October 2023 - Present",
      description:
        "Built responsive web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software products.",
      skills: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Git",
        "Mendix ",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
