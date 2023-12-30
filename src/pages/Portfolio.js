import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { projects } from '../data/projects';

// Portfolio Page displaying ProjectCard components

function Portfolio() {

  const [content, setContent] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleDropdownChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
    setShowModal(true);
    console.log("image clicked!!", imageUrl);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="portfolio">
      <div className="portfolio__hero">
        <h1 className="portfolio__hero-header">Project <span className="portfolio__hero-headerspan">Portfolio</span></h1>
        <img className="portfolio__hero-logo" src={`${process.env.PUBLIC_URL}/images/webdev.png`} alt="web dev logo" />
      </div>
      <div className="portfolio__dropdown">
      <label htmlFor="categoryDropdown" className="portfolio__dropdown--label">
          Filter by Category:
        </label>
        <select
          className="portfolio__dropdown--select"
          value={content}
          onChange={handleDropdownChange}
        >
          <option value="All">All</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Python">Python</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="projects">
        {projects
          .filter((project) => content === 'All' || project.category === content)
          .map((project) => (
            <ProjectCard project={project} key={project.id} onImageClick={handleImageClick} />
          ))}
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        imageUrl={currentImage}
      />
    </div>
  );
}

export default Portfolio;