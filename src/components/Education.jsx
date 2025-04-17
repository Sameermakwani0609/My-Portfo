import React from "react";

const EducationCard = ({ degree, institution, period, description }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold text-white">{degree}</h3>
      <div className="flex justify-between items-center mb-3">
        <p className="text-primary-blue font-medium">{institution}</p>
        <p className="text-gray-400 text-sm">{period}</p>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Education = () => {
  const educations = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "NBN Singhad School of Engineering,Pune",
      period: "2023",
      description:
        "Graduated with First Class Honors. Active member of the Coding Club and AI Research Group.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h2 className="section-title">Education</h2>
      <div className="max-w-3xl mx-auto">
        {educations.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default Education;
