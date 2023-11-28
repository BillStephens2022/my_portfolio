import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

// Project Card component that will render a card displaying a screenshot of the app,
// a title, a brief description, and buttons that will take the user to the
// associated Github repo and to the deployed app (only if the app is actually deployed)
function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects__card">
      <div className="projects__card--image-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/${project.images[currentImageIndex]}`}
          className="projects__card--image-photo"
          alt="project pic"
        />
          {project.images.length > 1 && (
          <div className="projects__card--image-buttons">
            <button className="projects__card--image-container-forward" onClick={handlePrevImage}><GoChevronLeft /></button>
            <button className="projects__card--image-container-back" onClick={handleNextImage}><GoChevronRight /></button>
          </div>
        )}
      </div>
      <div className="projects__card-body">
        <h5 className="projects__card-body--title">{project.title}</h5>
        <p className="projects__card-body--text">{project.desc}</p>
        
      </div>
      <div className="projects__card-footer">
        {project.deployedUrl !== "N/A" ? (
          <a
            href={project.deployedUrl}
            className="projects__card-footer--link"
          >
            <i className="fas fa-link"></i>
            App
          </a>
        ) : null}

        <a
          href={project.gitHubRepoUrl}
          className="projects__card-footer--link"
        >
          <i className="fab fa-github"></i>
          Repo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
