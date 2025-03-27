import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      title: "Email",
      value: "angad.harish@utoronto.ca",
      link: "mailto:angad.harish@utoronto.ca",
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Location",
      value: "Toronto, ON, Canada",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Angada28",
      icon: <FaGithub size={22} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/angad-harish-0405b8229",
      icon: <FaLinkedin size={22} />,
    },
  ];

  const handleEmailButtonClick = () => {
    window.location.href =
      "mailto:angad.harish@utoronto.ca?subject=Hello%20from%20your%20website&body=Hi%20there%2C%0A%0AI%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you.%0A%0ABest%20regards%2C%0A";
  };

  return (
    <div className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out if you have any questions or just want to
            connect!
          </p>

          <div className="contact-details">
            {contactInfo.map((item, index) => (
              <div className="contact-item" key={index}>
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <p>
                      <a href={item.link}>{item.value}</a>
                    </p>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="email-cta">
            <button className="email-button" onClick={handleEmailButtonClick}>
              <FaPaperPlane size={16} className="button-icon" />
              <span>Send me an email</span>
            </button>
            <p className="email-cta-description">
              This will open your default email app with a pre-filled email
              addressed to me.
            </p>
          </div>
        </div>

        <div className="connect-container">
          <h3>Connect With Me</h3>
          <p>Find me on these platforms and let's stay in touch!</p>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                href={social.url}
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <div className="social-icon-wrapper">{social.icon}</div>
              </a>
            ))}
          </div>

          <div className="hire-me">
            <h3>Looking to Work Together?</h3>
            <p>I'm open to full-time positions and collaborations.</p>
            <div className="availability">
              <span className="status-indicator available"></span>
              <span className="status-text">Currently Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
