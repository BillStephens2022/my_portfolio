import React from 'react';
import FeaturedProject from '../components/FeaturedProject';
import { projects } from '../data/projects';

function Featured() {

  const featuredProjects = projects.filter((project) => project.featured );

  return (
    <div className="featured">
      <div className="featured__hero">
        <h1 className="featured__hero-header">
          Featured <span className="featured__hero-headerspan">Projects</span>
        </h1>
        <img
          className="featured__hero-logo"
          src={`${process.env.PUBLIC_URL}/images/webdev.png`}
          alt="web dev logo"
        />
      </div>
      <div className="featured_projects">
        {featuredProjects.map((featuredProject) => (
            <FeaturedProject featuredProject={featuredProject} />
        )

        )}
      </div>
    </div>
  );
}

export default Featured;
