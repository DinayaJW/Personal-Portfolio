import React from 'react';
import { User, BookOpen, Award, Code, FileText } from 'react-feather';

const About = () => {
  // Skills data
  const skills = [
    { category: 'Programming Languages', items: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript'] },
    { category: 'Frameworoks', items: ['React', 'Tailwind CSS', 'Springboot'] },
    { category: 'Design & Prototyping Tools', items: ['Figma'] },
  ];

  // Education data
  const education = [
    {
      degree: 'Bsc(Hons) Computer Science',
      school: 'University of Westminster, UK',
      period: '2023 - Present',
      description: 'Focusing on Frontend, Algorithms, and UI/UX.'
    },
    {
      degree: 'GCE Advanced Level Examination',
      school: 'St. Pauls Milagiriya',
      period: '2022/2023',
      description: 'Physical Science Stream (Maths,Physics and ICT).'
    }
  ];

  // Extracurricular data (converted from previous achievements)
  const extracurricular = [
    {
      title: 'Volunteer Management Coordinator',
      organization: 'IEEE Computer Society Student Branch of IIT',
      date: '2025',
    },
    {
      title: 'Volunteering',
      organization: 'Coderally 5.0 , Cutting Edge 2024 ', 
      date: '2024',

    },
    {
        title: 'Senior Science Society',
        organization: 'St. Pauls Milagiriya',
        date: '2021-2022',
      },
      {
        title: 'Sports',
        organization: 'Hockey, Chess',
      }
  ];

  // Certifications data (new)
  const certifications = [
    {
      title: 'IEEE Xtreme 18.0',
      organization: 'IEEE',
      date: 'October 26th 2024',
      description: 'Participated in IEEEXtreme 18.0, which was held on October 26th 2024. IEEEXtreme is a global challenge in which teams of IEEE Student members compete in a 24-hour time span against each other to solve a set of programming problems.',
      link: 'https://certificate.ieeextreme.org/generate-email-certificate/7MNalJqc298hGX'
    },
    {
      title: 'React Essential Training',
      organization: 'LinkedIn',
      date: 'December 2024',
      link: 'https://www.linkedin.com/learning/certificates/f640fbf240b30d44ccabaa781c4ddaad05b58fe1d39ffb5678f003bc20d4b9f7?trk=share_certificate'
    },
    {
      title: 'Postman API Fundamentals Student Expert certification',
      organization: 'Postman',
      date: 'February 2025',
      link: 'https://badgr.com/public/assertions/HGRdZER6RtODZeffhcnW8w'
    },
    
  ];

  return (
    <div className="about">
      <div className="section about-hero">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <div className="about-intro">
            <div className="about-image-container">
              <div className="about-image">
                <div className="about-image-badge">
                <img src="/Dinaya Yuhansi .jpg"/>
                </div>
              </div>
            </div>
            <div className="about-text">
              <p>
              I am a passionate Computer Science student with a strong interest in software development, algorithms, and UI/UX. I enjoy solving complex problems and developing applications that create a meaningful impact. </p>
              <p>
              Currently pursuing my Bachelor's degree in Computer Science, I am constantly expanding my knowledge and skills through coursework and personal projects. I am eager to apply my expertise in a professional setting and contribute to innovative solutions that drive technological advancement
              </p>
              <p>
              Beyond academics, I actively volunteer with IEEE, gaining valuable experience in teamwork and leadership while contributing to technical and community-driven initiatives. Additionally, my participation in sports like hockey and chess has sharpened my strategic thinking, discipline, and ability to perform under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            {skills.map((skillGroup, index) => (
              <div className="skill-group" key={index}>
                <h3 className="skill-category">{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, i) => (
                    <div className="skill-item" key={i}>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <BookOpen />
                </div>
                <div className="timeline-content">
                  <h3>{item.degree}</h3>
                  <div className="timeline-info">
                    <span className="timeline-place">{item.school}</span>
                    <span className="timeline-date">{item.period}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section extracurricular-section">
        <div className="container">
          <h2 className="section-title">Extracurricular Activities</h2>
          <div className="extracurricular-container">
            {extracurricular.map((activity, index) => (
              <div className="extracurricular-card" key={index}>
                <div className="extracurricular-content">
                  <h3>{activity.title}</h3>
                  <div className="extracurricular-info">
                    <span className="extracurricular-org">{activity.organization}</span>
                    <span className="extracurricular-date">{activity.date}</span>
                  </div>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section certification-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certification-container">
            {certifications.map((cert, index) => (
              <div className="certification-card" key={index}>
                <div className="certification-icon">
                  <FileText />
                </div>
                <div className="certification-content">
                  <h3>{cert.title}</h3>
                  <div className="certification-info">
                    <span className="certification-org">{cert.organization}</span>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p>{cert.description}</p>
                  <a href={cert.link} className="certification-link" target="_blank" rel="noopener noreferrer">
                    Verify Certificate <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;