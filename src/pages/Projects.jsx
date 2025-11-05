import React, { useState } from 'react';
import projectsData from '../data/projectsData.json';
import './Projects.css';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const getVideoUrl = (url) => {
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/d\/([^\/]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
};
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                {project.videoUrl && (
                  <button 
                    className="video-btn"
                    onClick={() => setSelectedVideo(project.videoUrl)}
                  >
                    ▶ Watch Demo
                  </button>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="features">
                  <strong>Features:</strong>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                 View Code
                  </a>
                  {project.videoUrl && (
                    <button 
                      className="video-link"
                      onClick={() => setSelectedVideo(project.videoUrl)}
                    >
                     Watch Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedVideo && (
          <div className="video-modal">
            <div className="modal-content">
              <button className="close-btn" onClick={() => setSelectedVideo(null)}>
                ✕
              </button>
              <iframe 
                // src={selectedVideo}
                // title="Project Demo"
                // frameBorder="0"
                // allowFullScreen
                  src={getVideoUrl(selectedVideo)}
                  title="Project Demo"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
  
};

export default Projects;