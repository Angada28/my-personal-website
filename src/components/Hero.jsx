import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="fade-in">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Angad Harish</span>
          </h1>
          <h2 className="hero-subtitle fade-in">
            Computer Science Student & Software Engineer
          </h2>
          <p className="hero-description fade-in">
            I build modern web applications and enjoy learning new technologies.
            Currently studying at the University of Toronto.
          </p>
          <div className="hero-buttons fade-in">
            <Link
              to="projects"
              className="btn btn-primary"
              smooth={true}
              duration={500}
              offset={-70}
            >
              View My Projects
            </Link>
            <Link
              to="contact"
              className="btn btn-outline"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact Me
            </Link>
          </div>
          <div className="social-links fade-in">
            <a
              href="https://github.com/Angada28"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/angad-harish-0405b8229"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:angad.harish@utoronto.ca" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="image-wrapper">
            <img src="hero.jpg" alt="Angad Harish" className="profile-image" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator fade-in">
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-text">Scroll down</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
