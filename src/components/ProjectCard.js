import React from "react";

// Project Card component that will render a card displaying a screenshot of the app,
// a title, a brief description, and buttons that will take the user to the
// associated Github repo and to the deployed app (only if the app is actually deployed)
function ProjectCard({ project }) {
  return (
    <div className="projects__card">
      <div className="projects__card--image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.image1}`}
          className="projects__card--image-photo"
          alt="project pic"
        />
      </div>
      <div className="projects__card-body">
        <h5 className="projects__card-body--title">{project.title}</h5>
        <p className="projects__card-body--text">{project.desc}</p>
        <div className="projects__card-body--footer">
        {project.deployedUrl !== "N/A" ? (
          <a
            href={project.deployedUrl}
            className="projects__card-body--footer--link"
          >
            <i className="fas fa-link"></i>
            App
          </a>
        ) : null}

        <a
          href={project.gitHubRepoUrl}
          className="projects__card-body--footer--link"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
      </div>
      
    </div>
  );
}

export default ProjectCard;
