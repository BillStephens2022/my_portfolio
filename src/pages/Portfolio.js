import React, {useState} from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

// Portfolio Page displaying ProjectCard components

function Portfolio() {

  const [content, setContent] = useState("All");

  const handleButtonClick = (value) => {
    setContent(value)
  }

    return (
        <div className="portfolio">
        <div className="portfolio__hero">
            <h1 className="portfolio__hero-header">Project <span className="portfolio__hero-headerspan">Portfolio</span></h1>
            <img className="portfolio__hero-logo" src={`${process.env.PUBLIC_URL}/images/webdev.png`} alt="web dev logo"/>
        </div>
        <div className="portfolio__buttons">
            <button className="portfolio__buttons--btn" onClick={() => handleButtonClick('All')}>All</button>
            <button className="portfolio__buttons--btn" onClick={() => handleButtonClick('Full Stack')}>Full Stack</button>
            <button className="portfolio__buttons--btn" onClick={() => handleButtonClick('Front End')}>Front End</button>
            <button className="portfolio__buttons--btn" onClick={() => handleButtonClick('Back End')}>Back End</button>
            <button className="portfolio__buttons--btn" onClick={() => handleButtonClick('Python')}>Python</button>
        </div>
        <div className="projects">
        {projects
          .filter((project) => content === 'All' || project.category === content)
          .map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        </div>
    );
}

export default Portfolio;