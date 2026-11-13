import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.imageUrl} alt={`Preview of ${project.title}`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </article>
  );
}