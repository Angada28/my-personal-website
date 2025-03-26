import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "University of Toronto",
      period: "Sep 2023 - Present",
      description: "Teaching assistant for CSC148: Introduction to Computer Science. Responsible for conducting tutorials, grading assignments, and providing support to students.",
      type: "work"
    },
    {
      title: "Software Engineering Intern",
      company: "Example Company",
      period: "May 2023 - Aug 2023",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to implement new features and improve existing ones.",
      type: "work"
    },
    // Add more work experiences as needed
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Toronto",
      period: "Sep 2020 - May 2024 (Expected)",
      description: "Specializing in software engineering with a focus on web development and algorithms. Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Web Development.",
      type: "education"
    },
    // Add more education entries as needed
  ];

  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="timeline-section">
          <h3><FaBriefcase /> Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3><FaGraduationCap /> Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.institution}</h5>
                  <p className="period">{edu.period}</p>
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