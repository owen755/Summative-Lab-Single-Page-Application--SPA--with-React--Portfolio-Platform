import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import './App.css';

const initialProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js.',
    imageUrl: 'https://via.placeholder.com/400x250?text=E-commerce+Platform'
  },
  {
    id: 2,
    title: 'Brand Identity Redesign',
    description: 'Complete rebranding, including logo and typography guidelines.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Brand+Identity'
  }
];

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProject = (newProject) => {
    setProjects([{ ...newProject, id: Date.now() }, ...projects]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Creative Agency Portfolio</h1>
        <p>Showcasing our latest work and dynamic projects.</p>
      </header>
      
      <main className="app-main">
        <section className="controls-section">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <ProjectForm onAddProject={handleAddProject} />
        </section>
        
        <section className="portfolio-section">
          <h2>Our Projects</h2>
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  );
}