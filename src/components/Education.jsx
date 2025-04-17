import React from "react";

const EducationCard = ({ degree, institution, period, description }) => {
  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg mb-3 sm:mb-6 border-2 border-transparent hover:border-blue-500 transition-all duration-300 text-base sm:text-lg">
      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
        {degree}
      </h3>

      <p className="text-primary-blue font-semibold text-base sm:text-lg">
        {institution}
      </p>
      <p className="text-gray-400 text-sm mb-4">{period}</p>

      <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm sm:text-base">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "NBN Sinhgad School of Engineering, Pune",
      period: "2023",
      description: [
        "CGPA: 8.0",
        "Focused on Mathematics, Computer Science, and Programming",
        "Developed a strong foundation in software development",
        "Built multiple full-stack projects during coursework",
        "Collaborated in technical events",
        "Served as Class Representative for 2 years, managing student-faculty coordination",
      ],
    },
  ];

  return (
    <div className="min-h-[70vh] pt-0 sm:pt-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-500 text-center mb-1 sm:mb-6">
        Education
      </h2>
      <div className="max-w-3xl mx-auto">
        {educations.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
