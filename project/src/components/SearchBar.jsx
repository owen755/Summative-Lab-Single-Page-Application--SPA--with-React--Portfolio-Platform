import React from 'react';

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search projects by title or keyword..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search projects"
      />
    </div>
  );
}