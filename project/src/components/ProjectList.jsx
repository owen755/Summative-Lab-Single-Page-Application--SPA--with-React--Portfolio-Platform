import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="no-results">No projects match your search criteria.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}