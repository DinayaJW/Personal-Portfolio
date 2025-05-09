import React from 'react';
import { Link } from 'react-router-dom';
import { Code, GitHub, Linkedin, Mail, FileText } from 'react-feather';

// Create sample CV file path variable
const SampleCV = "Dinaya_Yuhansi_CV"; // This should be in the public folder

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <span>Dinaya Juwan Wadu</span>
            </div>
            <p className="footer-description">
              A showcase of my projects and skills as a Computer Science student.
            </p>
          </div>
          
          <div className="footer-nav">
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <div className="footer-social">
              <a href="https://github.com/DinayaJW" target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>
              <a href="https://www.linkedin.com/in/dinaya-juwan-wadu/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="mailto:dinayayuhansi13@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </div>
            <a href="/Dinaya_Yuhansi_CV.pdf" download className="footer-cv-link">
              <FileText />
              <span>Download CV</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dinaya JUwan Wadu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;