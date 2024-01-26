// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  // const [commitData, setCommitData] = useState({});
  // const [totalCommits, setTotalCommits] = useState(0);
  // const [repoCount, setRepoCount] = useState(0);
  // const [uniqueRepos, setUniqueRepos] = useState([]);

  // const username = process.env.REACT_APP_GITHUB_USERNAME;
  // const token = process.env.REACT_APP_GITHUB_TOKEN;

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
  //     headers: {
  //       Authorization: `token ${token}`,
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const pushEvents = data.filter((event) => event.type === "PushEvent");

  //       const commitsPerDay = {};
  //       const uniqueRepoSet = new Set();

  //       pushEvents.forEach((event) => {
  //         const date = new Date(event.created_at).toLocaleDateString();

  //         // Initialize commits and repos for the day if they don't exist
  //         if (!commitsPerDay[date]) {
  //           commitsPerDay[date] = {
  //             commits: 0,
  //             repos: new Set(),
  //           };
  //         }

  //         // Increment commits for the day
  //         commitsPerDay[date].commits += event.payload.size;

  //         const repoFullName = event.repo.name;
  //         const repoNameWithoutUser = repoFullName.substring(
  //           repoFullName.indexOf("/") + 1
  //         ); // Extracts repo name without user prefix

  //         // Add repo name to the set of repos for the day
  //         commitsPerDay[date].repos.add(repoNameWithoutUser);
  //         uniqueRepoSet.add(repoNameWithoutUser);
  //       });

  //       // Calculate total commits
  //       const total = Object.values(commitsPerDay).reduce(
  //         (acc, curr) => acc + curr.commits,
  //         0
  //       );
  //       setTotalCommits(total);

  //       // Calculate number of unique repos
  //       setRepoCount(uniqueRepoSet.size);

  //       setCommitData(commitsPerDay);

  //       setUniqueRepos(Array.from(uniqueRepoSet));

  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // }, []);

  return (
    <div className="about">
      <div className="about__video">
        <video
          className="about__video--content"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
        >
          <source
            src={`${process.env.PUBLIC_URL}/images/video3.mp4`}
            type="video/mp4"
          />
          <source
            src={`${process.env.PUBLIC_URL}/images/video.webm`}
            type="video/webm"
          />
          Your browser is not supported!
        </video>
      </div>
      <div className="about__hero">
        <img
          className="about__photo"
          src={`${process.env.PUBLIC_URL}/images/bill.jpeg`}
          alt="Bill"
        />
        <div className="about__headers">
          <h1 className="about__title">Bill Stephens</h1>
          <h2 className="about__subtitle">Full Stack Web Developer</h2>
        </div>
      </div>
      <p className="about__story">
        Hi, I'm Bill. I'm a Full Stack Web Developer and former finance
        professional. I recently completed a full stack web development bootcamp
        with Rutgers University, and I stay sharp by coding every day. I'm
        continuously learning new programming languages and web development
        frameworks.{" "}
      </p>
      
      <p className="about__story">
        Explore my{" "}
        <Link className="about__story-link" to="/featured">
          FEATURED PROJECTS
        </Link>{" "}
        , my full
        <Link className="about__story-link" to="/portfolio">
          PORTFOLIO
        </Link>{" "}
        and my{" "}
        <Link className="about__story-link" to="/resume">
          RESUME
        </Link>{" "}
        - I am eager to collobarate and to build something, so{" "}
        <Link className="about__story-link" to="/contact">
          CONTACT ME
        </Link>{" "}
        if you are interested in teaming up!
      </p>
      <div className="skills">
        <h2 className="skills__header">Skills</h2>
        <div className="skills__container">
          <div className="skills__card card-1">
            <h4 className="skills__card--header">
              <img
                id="react"
                src={`${process.env.PUBLIC_URL}/images/react.png`}
                alt="react logo"
              />
              Front End
              <img
                id="css3"
                src={`${process.env.PUBLIC_URL}/images/css3.png`}
                alt="css3 logo"
              />
            </h4>
            <ul className="skills__card--list">
              <li>JavaScript/TypeScript</li>
              <li>React.js/Angular.js</li>
              <li>Next.js</li>
              <li>Django/Flask</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>3rd Party APIs</li>
              <li>HTML / CSS</li>
              <li>Multiple CSS Frameworks</li>
              <li>Tensorflow.js</li>
              <li>Chart.js</li>
            </ul>
          </div>

          <div className="skills__card card-2">
            <h4 className="skills__card--header">
              <img
                id="node"
                src={`${process.env.PUBLIC_URL}/images/node.png`}
                alt="node logo"
              />
              Back End
              <img
                id="mongo"
                src={`${process.env.PUBLIC_URL}/images/mongo.png`}
                alt="mongo logo"
              />
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
              <li>Django / Flask</li>
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
          <div className="skills__card card-4">
            <h4 className="skills__card--header">
              Java
              <img
                id="java"
                src={`${process.env.PUBLIC_URL}/images/java.png`}
                alt="java logo"
              />
            </h4>
            <ul className="skills__card--list">
              <li>Object Oriented Programming</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
              <li>Abstraction</li>
              <li>Generics</li>
              <li>Data Structures</li>
              <li>Lambda Expressions</li>
              <li>Collections</li>
              <li>Streams</li>
              <li>Concurrency</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="githubActivity">
        <h2 className="githubActivity__header">
          Recent GitHub Activity <i className="fab fa-github"></i>
        </h2>
        <h3>I try to keep my skills sharp by coding often, check out my latest work!</h3>
        <h4>from the GitHub API</h4>
        <table className="githubActivity__table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Commits</th>
              <th className="repo">Repos</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(commitData).map(([date, commitInfo]) => (
              <tr key={date}>
                <td>{date}</td>
                <td>{commitInfo.commits}</td>
                <td className="repo">
                  {Array.from(commitInfo.repos).join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Total commits for the last {Object.keys(commitData).length} days
              </td>
              <td>{totalCommits}</td>
            </tr>
            <tr>
              <td>Number of repositories</td>
              <td>{repoCount}</td>
            </tr>
          </tfoot>
        </table>
      </div> */}
    </div>
  );
}

export default About;
