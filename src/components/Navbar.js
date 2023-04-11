import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navbar component.  Defaults to About page.

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><Link to="/" className="navigation__link" onClick={handleLinkClick}><span>01</span>About</Link></li>
          <li className="navigation__item"><Link to="/portfolio" className="navigation__link" onClick={handleLinkClick}><span>02</span>Portfolio</Link></li>
          <li className="navigation__item"><Link to="/resume" className="navigation__link" onClick={handleLinkClick}><span>03</span>Resume</Link></li>
          <li className="navigation__item"><Link to="/contact" className="navigation__link" onClick={handleLinkClick}><span>04</span>Contact</Link></li>
        </ul>
      </nav> 
    </div>
  );
}

export default Navbar;