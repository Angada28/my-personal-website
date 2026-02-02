import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "University of Toronto",
      period: "Jan 2025 - Dec 2025",
      description:
        "Teaching assistant for CSC148: Introduction to Computer Science. Responsible for conducting tutorials, grading assignments, marking exams, and providing support to students.",
      type: "work",
      image: "uoftlogo.png",
    },
    {
      title: "Software Engineering",
      company: "PocketHealth",
      period: "September 2022 - Aug 2023",
      description:
        "At PocketHealth, I contributed to the development of secure healthcare solutions, enhancing the accessibility and management of medical imaging data. I led the integration of Retool for internal tooling. Additionally, I built data migration services in C#, centralized logging in Go, and enhanced software deployment tooling to optimize system reliability across hospital environments.",
      type: "work",
      image: "pockethealth_logo.jpg",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Toronto",
      period: "Sep 2019 - June 2025",
      description:
        "Specializing in software engineering with a focus on web development and algorithms. Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Web Development.",
      type: "education",
      image: "uoftlogo.png",
    },
  ];

  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="timeline-section">
          <h3>
            <FaBriefcase /> Work Experience
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="card-header">
                    <div>
                      <h4>{exp.title}</h4>
                      <h5>{exp.company}</h5>
                      <p className="period">{exp.period}</p>
                    </div>
                    <div className="card-image-wrapper">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="card-image"
                      />
                    </div>
                  </div>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3>
            <FaGraduationCap /> Education
          </h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="card-header">
                    <div>
                      <h4>{edu.degree}</h4>
                      <h5>{edu.institution}</h5>
                      <p className="period">{edu.period}</p>
                    </div>
                    <div className="card-image-wrapper">
                      <img
                        src={edu.image}
                        alt={edu.institution}
                        className="card-image"
                      />
                    </div>
                  </div>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
