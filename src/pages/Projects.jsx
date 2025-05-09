import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectsData = [
    {
      id: 1,
      title: 'InnovaStruct',
      description: 'All in one comprehensive construction project management app that streamlines planning, communication, and execution. The platform enhances transparency, accountability, and client satisfaction through datadriven decision-making.',
      image: '/construction.jpg',
      category: 'Web Development',
      tags: ['React', 'Figma', 'JavaScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/mironsenevi/InnovaStruct',
      liveLink: 'https://www.inovastruct.com/',
    },
    {
      id: 2,
      title: 'Food Connect',
      description: 'The SDG-focused app helps reduce food waste by providing donation options, composting guidance, and smart meal planning tools. It empowers users to adopt sustainable habits, track their impact, and support shelters, contributing to a more eco-friendly and socially responsible community.',
      image: '/Fooddonate.jpg',
      category: 'UI/UX',
      tags: ['Figma'],
      githubLink: '',
      liveLink: 'https://www.behance.net/gallery/222667871/Food-Connect',
    },
    {
      id: 3,
      title: 'Student Management System',
      description: 'A Java program to store, update, and delete student details, with records saved in a separate file for easy access and efficient data management.',
      image: 'StudentManagement.jpg',
      category: 'Programming',
      tags: ['Java'],
      liveLink: '',
      githubLink: 'https://github.com/DinayaJW/Student-Management-System.git'
    },
    {
      id: 4,
      title: 'Conserve Water Life',
      description: 'An SDG "Life Below Water" app educates users on reducing plastic use, protecting underwater ecosystems, and promoting marine conservation.',
      image: 'ConserveWater.jpg',
      category: 'Web Development',
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://conserve-water-life.vercel.app/',
      githubLink: 'https://github.com/DinayaJW/Conserve-Water-Life'
    },
    {
      id: 5,
      title: 'Personal Finance Tracker',
      description: 'A Python-based finance tracker with a user-friendly GUI, allowing users to log, categorize, and analyze expenses for improved financial management.',
      image: 'PersonalFinance.jpg',
      category: 'Programming',
      tags: ['Python'],
      liveLink: '',
      githubLink: 'https://github.com/DinayaJW/Personal-Finance-Tracker'
    },
  ];

  // Get unique categories for filter buttons, ensuring "All" appears only once
  const uniqueCategories = [...new Set(projectsData.map(project => project.category))];
  const categories = ['All', ...uniqueCategories];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <div className="projects-intro">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Projects</h2>
          <p className="text-gray-600">Explore my portfolio of innovative solutions and creative designs</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title text-xl font-bold">{project.title}</h3>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            No projects found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;