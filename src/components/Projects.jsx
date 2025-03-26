import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive personal portfolio website built with React and modern CSS techniques. Features smooth scrolling, responsive design, and clean UI.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com",
      image: "/placeholder.jpg"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://yourecommerce.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Task Management App",
      description: "A task management application with features like task creation, due dates, priority levels, and categorization.",
      technologies: ["React", "Firebase", "Material UI", "JavaScript"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://yourtaskmanager.com",
      image: "/placeholder.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      technologies: ["JavaScript", "HTML", "CSS", "WeatherAPI"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://yourweatherapp.com",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
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