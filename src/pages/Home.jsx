import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Code, GitHub, Linkedin, Mail, Monitor } from 'react-feather';

// Since react-feather doesn't have a Behance icon, we'll create a custom one
const BehanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 15H17" />
    <path d="M8 11H12.5" />
    <path d="M16 7H12" />
    <path d="M22 17C22 18.1 21.1 19 20 19H15C13.9 19 13 18.1 13 17V12C13 10.9 13.9 10 15 10H20C21.1 10 22 10.9 22 12V17Z" />
    <path d="M11 19H7C5.9 19 5 18.1 5 17V7C5 5.9 5.9 5 7 5H12" />
  </svg>
);

const SampleCV = "Dinaya_Yuhansi_CV"; 

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Dinaya</span>
            </h1>
            <h2 className="hero-subtitle">Computer Science Undergraduate</h2>
            <p className="hero-description">
            A passionate second-year Computer Science student specializing in software development, UI/UX design, algorithms, and data structures. Proficient in Python and Java, with hands-on experience applying theoretical concepts to real-world problem-solving. Driven by creativity, innovation, and technical rigor, aiming to design efficient, user-centered solutions and make a meaningful impact in the tech industry.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <Link to="/projects" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
            <div className="hero-social">
              <a href="https://github.com/DinayaJW" target="_blank" rel="noopener noreferrer" className="social-link">
                <GitHub />
              </a>
              <a href="https://www.behance.net/diny3" target="_blank" rel="noopener noreferrer" className="social-link">
                <BehanceIcon />
              </a>
              <a href="https://www.linkedin.com/in/dinaya-juwan-wadu/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin />
              </a>
              <a href="mailto:dinayayuhansi13@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
              
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle outer">
              <div className="profile-circle middle">
                <div className="profile-circle inner">
                  <img src="/Dinaya Yuhansi .jpg"/>
                </div>
              </div>
            </div>
            <div className="profile-badge top-right">
              <Code />
            </div>
            <div className="profile-badge bottom-left">
              <Code />
            </div>
          </div>
        </div>
      </div>

      <div className="section summary">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">
                <Monitor/>
              </div>
              <h3>Frontend Development</h3>
              <p>Developing dynamic and user-friendly front-end experiences using modern frameworks like React, with a focus on responsiveness and interactivity.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                <Monitor />
              </div>
              <h3>UI/UX Development</h3>
              <p>Designing intuitive and engaging user experiences by combining UI/UX principles with modern tools and technologies to create user-centered digital solutions.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">
                < Monitor/>
              </div>
              <h3>Algorithms and Data Structures</h3>
              <p>Continuously learning and exploring algorithms and data structures to enhance problem-solving skills and develop efficient, optimized solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section download-section">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h2>Interested in my background?</h2>
              <p>Download my CV to learn more about my education, skills, and experience.</p>
            </div>
            <a href="/Dinaya_Yuhansi_CV.pdf" download className="btn btn-primary download-btn">
              <FileText className="btn-icon" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>dinayayuhansi13@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <Linkedin className="contact-icon" />
                <div>
                  <h3>LinkedIn</h3>
                  <p>https://www.linkedin.com/in/dinaya-juwan-wadu/</p>
                </div>
              </div>
              <div className="contact-item">
                <GitHub className="contact-icon" />
                <div>
                  <h3>GitHub</h3>
                  <p>https://github.com/DinayaJW</p>
                </div>
              </div>
              <div className="contact-item">
                <BehanceIcon className="contact-icon" />
                <div>
                  <h3>Behance</h3>
                  <p>https://www.behance.net/diny3</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;