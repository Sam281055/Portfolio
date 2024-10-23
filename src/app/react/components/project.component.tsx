import React from 'react';
type set ={
  title: string,
  description: string,
  link: string
}
const ProjectCard = ({ title, description, link }:set) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
    </div>
  );
};

export default ProjectCard;