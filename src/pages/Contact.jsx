import React from 'react';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always interested in new opportunities and collaborations
        </p>
        
        <div className="contact-center">
          <div className="contact-card">
            <div className="contact-header">
              <h3>Let's Work Together</h3>
              <p>
                Whether you have a project in mind, want to collaborate, 
                or just want to say hello - I'd love to hear from you!
              </p>
            </div>
            
            <div className="contact-details-grid">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4>Email</h4>
                  <p>jebbaritube4@gmail.com</p>
                  <a href="mailto:jebbaritube4@gmail.com"  target="_blank"  className="contact-link">
                    Send me an email
                  </a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaLinkedin className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4>LinkedIn</h4>
                  <p>Let's connect professionally</p>
                  <a 
                    href="https://www.linkedin.com/in/karim-jebbari-b31315374/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaGithub className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4>GitHub</h4>
                  <p>Check out my projects</p>
                  <a 
                    href="https://github.com/KarimJebbari" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    View my GitHub
                  </a>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="contact-detail-content">
                  <h4>Location</h4>
                  <p>Based in Morocco</p>
                  <span className="contact-location">Open to remote opportunities</span>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <p>Ready to start a project?</p>
              <a href="mailto:jebbaritube4@gmail.com" target="_blank"  className="cta-button">
                <FaPaperPlane className="cta-icon" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;