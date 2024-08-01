import React from 'react';
import './ProjectDetails.scss';

const ProjectDetail = ({ project, onClose }) => {
  const projectsWithViewLink = [1, 2];

  return (
    <div className="project-detail-overlay">
      <div className="project-detail-modal">
        <button className="close-button" onClick={onClose}>✕</button>
        <div className="project-detail-content">
          <h2 className="project-detail-title">{project.title}</h2>
          <p className="project-detail-description">{project.description}</p>
          <div className="project-detail-links">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-detail-link">View on GitHub</a>
            {projectsWithViewLink.includes(project.id) && (
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-detail-link">View Project</a>
            )}
          </div>
          <div className="project-detail-images">
            {project.images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Project screenshot ${index + 1}`} className="project-detail-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
