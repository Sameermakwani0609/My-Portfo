import React from "react";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-300"
          >
            {skill}
          </div>
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
      title: "Low Code Developement",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Data Visualization",
        "NLP",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: ["AWS", "Docker"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Redis", "Firebase"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h2 className="section-title">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
