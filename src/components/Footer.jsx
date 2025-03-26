import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="scroll-to-top">
                <Link to="home" smooth={true} duration={500}>
                    <FaArrowUp />
                </Link>
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>AH</h3>
                        <p>Software Engineer</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                                <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Connect</h4>
                            <div className="social-links">
                                <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </a>
                                <a href="mailto:your.email@example.com" aria-label="Email">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Angad Harish. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;