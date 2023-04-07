import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import "../css/style.css";

// Portfolio Page displaying ProjectCard components

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__hero">
        <h1 className="portfolio__hero-header">My Project Portfolio</h1>
        <img className="portfolio__hero-logo" src="../../images/webdev.png" alt="web dev logo"/>
      </div>
      
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;