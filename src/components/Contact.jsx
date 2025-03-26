import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is a placeholder for form submission
    // In a real implementation, you'd send this data to a server
    console.log('Form submitted:', formData);

    // Simulate successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out if you have any questions or just want to connect!</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p><a href="tel:+1234567890">(123) 456-7890</a></p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Toronto, ON, Canada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              <FaPaperPlane /> Send Message
            </button>

            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;