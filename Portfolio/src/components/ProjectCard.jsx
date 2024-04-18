import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="card2">
      <img src={`src/assets/Resource/${image}`} alt="background" />
      <div className="container">
        <span className="project-heading">{title}</span>
        <p className="project-detail">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer"><button className="button">Click here</button></a>
      </div>
    </div>
  );
};

export default ProjectCard;
