import React from "react";

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn btn-primary"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Text and PDF Query App",
      description:
        "Flask app leveraging OpenAI API for querying text and PDF documents. Users can upload files, extract and analyze content using custom prompts.",
      technologies: ["Python", "Flask", "OpenAI API", "PyPDF2"],
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=AI+PDF+Query",
      link: "#",
    },
    {
      title: "QClinic - Clinic Management System",
      description:
        "Built with VB.NET and MS Access, this app helps streamline medical record keeping, billing, and prescription printing for doctors.",
      technologies: ["VB.NET", "MS Access","Java"],
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=QClinic",
      link: "#",
    },
    {
      title: "Sales & Order Management System (MERN Stack)",
      description:
        "Under development. MERN-based solution for managing sales, customers, orders, and printing support, targeting business automation.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://placehold.co/600x400/2a2a2a/FFFFFF?text=MERN+Sales",
      link: "#",
    },
  ];
  return (
    <div className="min-h-screen py-20">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
