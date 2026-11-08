import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ProjectCard from './components/ProjectCard';

describe('Portfolio Application Integration Tests', () => {
  test('renders the initial header and projects on load', () => {
    render(<App />);
    expect(screen.getByText(/Creative Agency Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/E-commerce Platform/i)).toBeInTheDocument();
  });

  test('filters projects based on search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search projects by title/i);
    
    // Type a query that matches only one project
    fireEvent.change(searchInput, { target: { value: 'Brand Identity' } });
    
    expect(screen.getByText(/Brand Identity Redesign/i)).toBeInTheDocument();
    expect(screen.queryByText(/E-commerce Platform/i)).not.toBeInTheDocument();
  });

  test('displays a message when no projects match the search', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search projects by title/i);
    
    // Type a query that matches nothing
    fireEvent.change(searchInput, { target: { value: 'Nonexistent Project XYZ' } });
    
    expect(screen.getByText(/No projects match your search criteria/i)).toBeInTheDocument();
  });

  test('allows users to add a new project via the form', () => {
    render(<App />);
    
    const titleInput = screen.getByPlaceholderText(/Project Title/i);
    const descInput = screen.getByPlaceholderText(/Project Description/i);
    const submitBtn = screen.getByText(/Submit Project/i);

    // Fill out the form
    fireEvent.change(titleInput, { target: { value: 'Mobile App Design' } });
    fireEvent.change(descInput, { target: { value: 'Created a sleek UI for a fitness tracker.' } });
    fireEvent.click(submitBtn);

    // Check if the new project is now in the document
    expect(screen.getByText(/Mobile App Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Created a sleek UI for a fitness tracker./i)).toBeInTheDocument();
  });
});

describe('Component Unit Tests', () => {
  test('ProjectCard renders correct data', () => {
    const mockProject = {
      id: 99,
      title: 'Test Title',
      description: 'Test Description',
      imageUrl: 'http://test-image.com/img.jpg'
    };

    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'http://test-image.com/img.jpg');
  });
});