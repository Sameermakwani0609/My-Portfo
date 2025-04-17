import React from "react";

const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg border-2 border-gray-700 hover:border-blue-400 transition-all duration-300 p-4 w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-56 sm:h-64 object-cover object-center rounded-md"
      />
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-black border border-gray-700 text-gray-300 text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Text and PDF Query App",
      description:
        "This Flask-based application utilizes the OpenAI API to allow users to upload, analyze, and query both text and PDF documents. With intuitive prompts and real-time extraction, it streamlines data interrogation for research and productivity use cases.",
      technologies: ["Python", "Flask", "OpenAI API", "PyPDF2"],
      image: "/AIPoweredPDFExtraction.png",
    },
    {
      title: "QClinic - Clinic Management System",
      description:
        "A complete desktop solution for doctors, built using VB.NET and MS Access. It covers everything from patient data storage, appointment scheduling, medical history management, to invoice generation and print-ready prescriptions with auto-calculated vitals.",
      technologies: ["VB.NET", "MS Access"],
      image: "/QClinic.png",
    },
    {
      title: "Sales & Order Management System (MERN Stack)",
      description:
        "A modern web application (in progress) aimed at automating sales, inventory, and customer relationships for small businesses. Built on the MERN stack, it features intuitive dashboards, seamless order tracking, and invoice printing support.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: "/BillManagementMERN.jpg",
    },
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 bg-black">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-purple-500 text-center mb-10 sm:mb-14">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
