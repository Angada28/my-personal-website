import React, { useContext } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import "./Projects.css";

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built with React and modern CSS techniques. Features smooth scrolling, responsive design, and clean UI.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/Angada28/my-personal-website",
      live: "https://angadharish.ca",
      image: isDarkMode ? "/favicon-dark.ico" : "/favicon.ico",
      isPersonalWebsite: true,
    },
    {
      title: "UTAP",
      description:
        "UTAP is a teaching assistant application system designed to make applying and hiring easier for both applicants and faculty. This project was done under Professor Bogdan Simion at UTM. I made several workflow improvements, updated the ui/ux for instructors and made security improvements.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker, Python",
      ],
      live: "https://utapcsc.utm.utoronto.ca/utap/",
      image: "utmlogo.jpg",
    },
    {
      title: "Park Mindfulness",
      description:
        "Worked with a small team under John Leadston to develop mindfulness exercises for park visitors for Ontario Parks. I led the creation of the admin interface, handling both frontend and backend development while applying UX design principles to improve usability.",
      technologies: ["React", "Python", "Vercel"],
      image: "OPlogo_formal.jpg",
    },
    {
      title: "PCRS",
      description:
        "The Programming Course Resource System is a project lead by Professor Andrew Petersen at utm that is used by every campus. On this project I helped to add support for RISC-V assembly.",
      technologies: ["Java", "PostgreSQL", "Django", "Assembly"],
      live: "https://mcs.utm.utoronto.ca/~pcrs/pcrs/",
      image: "pcrs.png",
    },
  ];

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              {project.isPersonalWebsite ? (
                <img
                  src={isDarkMode ? "/favicon-dark.ico" : "/favicon.ico"}
                  alt={project.title}
                  className="portfolio-favicon"
                />
              ) : (
                <img src={project.image} alt={project.title} />
              )}
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
