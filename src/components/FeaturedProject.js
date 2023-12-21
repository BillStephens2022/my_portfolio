import React, { useState } from "react";
import {
  BiSolidChevronRightCircle,
  BiSolidChevronLeftCircle,
} from "react-icons/bi";

function FeaturedProject({ key, featuredProject }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % featuredProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProject.images.length) %
        featuredProject.images.length
    );
  };

  const handleImageClick = () => {
    nextImage();
  };

  return (
    <div key={key} className="featuredProject">
      <h2 className="featuredProject__header">{featuredProject.title}</h2>
      <div className="featuredProject__image_div">
        <img
          alt={featuredProject.title}
          className="featuredProject__image_div_image"
          src={`${process.env.PUBLIC_URL}/images/${featuredProject.images[currentImageIndex]}`}
          onClick={handleImageClick}
        ></img>
        <div className="featuredProject__image_div_buttons_div">
          <button
            className="featuredProject__image_div_buttons_button"
            onClick={prevImage}
          >
            <BiSolidChevronLeftCircle color="steelblue" />
          </button>
          <span className="featuredProject__image_div_buttons_span">Image: {currentImageIndex + 1} of {featuredProject.images.length}</span>
          <button
            className="featuredProject__image_div_buttons_button"
            onClick={nextImage}
          >
            <BiSolidChevronRightCircle color="steelblue" />
          </button>
        </div>
      </div>
      <div className="featuredProject__summary">
        <h3 className="featuredProject__summary_header">Description</h3>
        <p className="featuredProject__summary_text">{featuredProject.desc}</p>

        <h3 className="featuredProject__summary_header">Technologies Used:</h3>
        <ul className="featuredProject__summary_list">
          {featuredProject.technologies.map((technology) => (
            <li>{technology}</li>
          ))}
        </ul>
      </div>
      <div className="featuredProject__footer">
        <a
          href={featuredProject.deployedUrl}
          className="featuredProject__footer-button"
        >
          App<i className="fas fa-link"></i>
        </a>
        <a
          href={featuredProject.gitHubRepoUrl}
          className="featuredProject__footer-button-outline"
        >
          Repo<i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default FeaturedProject;
