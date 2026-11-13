import React, { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) return;
    
    onAddProject({
      title: formData.title.trim(),
      description: formData.description.trim(),
      imageUrl: formData.imageUrl.trim() || 'https://via.placeholder.com/400x250?text=New+Project'
    });
    
    // Reset form after successful submission
    setFormData({ title: '', description: '', imageUrl: '' });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="imageUrl"
        placeholder="Image URL (optional)"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <button type="submit">Submit Project</button>
    </form>
  );
}