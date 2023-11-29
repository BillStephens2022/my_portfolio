import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__video">
        <video className="about__video--content" autoPlay muted loop playsInline disablePictureInPicture>
          <source src={`${process.env.PUBLIC_URL}/images/video3.mp4`} type="video/mp4" />
          <source src={`${process.env.PUBLIC_URL}/images/video.webm`} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <div className="about__hero">
        <img className="about__photo" src={`${process.env.PUBLIC_URL}/images/bill.jpeg`} alt="Bill" />
        <div className="about__headers">
          <h1 className="about__title">Bill Stephens</h1>
          <h2 className="about__subtitle">Full Stack Web Developer</h2>
        </div>
      </div>
      <p className="about__story">
        Hi, I'm Bill.  I'm a Full Stack Web Developer and former finance professional.  I recently completed a full stack web development bootcamp with 
        Rutgers University, and I stay sharp by coding every day. I'm continuously learning new programming languages and web development frameworks. </p>
        <p className="about__story">
        Explore my <Link className="about__story-link" to="/portfolio">PORTFOLIO</Link> page and my <Link className="about__story-link" to="/resume">RESUME</Link> - 
        I am eager to collobarate and to build something, so <Link className="about__story-link" to="/contact">CONTACT ME</Link> if you are interested in teaming up!</p>
      <div className="skills">
        <h2 className="skills__header">Skills</h2>
        <div className="skills__container">
          <div className="skills__card card-1">
            <h4 className="skills__card--header">
              <img id="react" src={`${process.env.PUBLIC_URL}/images/react.png`} alt="react logo" />
              Front End
              <img id="css3" src={`${process.env.PUBLIC_URL}/images/css3.png`} alt="css3 logo" />
            </h4>
            <ul className="skills__card--list">
              <li>JavaScript/TypeScript</li>
              <li>React.js/Angular.js</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>3rd Party APIs</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass/Scss</li>
              <li>Multiple CSS Frameworks-</li>
              <li>(Bootstrap, Materialize,</li>
              <li>Semantic, Bulma, Tailwind)</li>
              <li>Tensorflow.js</li>
              <li>Chart.js</li>
            </ul>
          </div>

          <div className="skills__card card-2">
            <h4 className="skills__card--header">
              <img id="node" src={`${process.env.PUBLIC_URL}/images/node.png`} alt="node logo" />
              Back End
              <img id="mongo" src={`${process.env.PUBLIC_URL}/images/mongo.png`} alt="mongo logo" />
            </h4>
            <ul className="skills__card--list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Sequelize</li>
              <li>GraphQL</li>
              <li>Apollo Server</li>
              <li>Passport.js</li>
              <li>JSON Web Token</li>             
            </ul>
          </div>

          <div className="skills__card card-3">
            <h4 className="skills__card--header">
              Python
              <img
                id="python"
                src={`${process.env.PUBLIC_URL}/images/python.png`}
                alt="python logo"
              />
            </h4>
            <ul className="skills__card--list">
              <li>Flask</li>
              <li>Jinja</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>matplotlib</li>
              <li>Seaborn</li>
              <li>Tensorflow</li>
              <li>Tkinter</li>
              <li>Selenium</li>
              <li>Beautiful Soup</li>
              <li>3rd Party APIs</li>            
              <li>Turtle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
