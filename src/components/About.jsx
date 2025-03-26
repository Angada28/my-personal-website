import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Hi there, thanks for stopping by! My name's Angad. I'm a final year computer science student
                        at the University of Toronto. I'm currently a teaching assistant for the course CSC148: Introduction to Computer Science.
                        I'm a software engineer that enjoys learning about new technologies and trying new things.
                    </p>

                    <p>Through my time so far I've gotten the chance to learn more about the technologies used in the healthcare field, as well as
                        learning about things that can be helpful for independent developers such as myself. Hopefully you'll get to see me talk about them
                        further down on this website.
                    </p>

                    <p>Outside of software development I'm also interested in video games, origami, music, solving puzzles, and trying new things. I always enjoy
                        looking deeper into various topics and learning about them, such as understanding how certain mechanics work in a game and
                        how they can prevent exploits. If you're interested in learning more about me, feel free to reach out to me at the end of this page, or if you're
                        interested in seeing my resume or just curious about something else.
                    </p>
                </div>
                <div className="skills-container">
                    <h3>My Skills</h3>
                    <div className="skills-section">
                        <h4>Programming Languages</h4>
                        <div className="skills-grid">
                            <div className="skill-item">JavaScript</div>
                            <div className="skill-item">Python</div>
                            <div className="skill-item">Java</div>
                            <div className="skill-item">C++</div>
                            <div className="skill-item">HTML/CSS</div>
                        </div>
                    </div>
                    <div className="skills-section">
                        <h4>Libraries & Frameworks</h4>
                        <div className="skills-grid">
                            <div className="skill-item">React</div>
                            <div className="skill-item">Node.js</div>
                            <div className="skill-item">Express</div>
                            <div className="skill-item">Flask</div>
                            <div className="skill-item">Django</div>
                        </div>
                    </div>
                    <div className="skills-section">
                        <h4>Tools & Technologies</h4>
                        <div className="skills-grid">
                            <div className="skill-item">Git</div>
                            <div className="skill-item">MongoDB</div>
                            <div className="skill-item">SQL</div>
                            <div className="skill-item">AWS</div>
                            <div className="skill-item">Docker</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;