import React from "react";
import '../sass/pages/resume.css';

// Resume page displaying Resume and a button to download as a pdf file

function Resume() {
  const getResume = () => {
    console.log("button clicked!");
    fetch("BillStephens-Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "BillStephens-Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="container">
      <button
        onClick={getResume}
        className="btn btn-lg btn-primary download-button"
      >
        Download PDF
      </button>
      <div className="body-div resume-div">
        <div class="row">
          <div class="col-sm-4 col-md-3 col-lg-2 photo">
            <img
              class="align-items-center bill-pic"
              src={`${process.env.PUBLIC_URL}/images/bill.jpeg`}
              alt="Bill pic"
            />
          </div>
          <div class="col-sm-8 col-md-9 col-lg-10 summary">
            <h1 class="header-name">Bill Stephens</h1>
            <h3 class="header-occupation">Full Stack Web Developer</h3>
            <hr class="header-hr" />
            <h3 class="header-summary">
              Full Stack Web Developer with an extensive background in
              Accounting and Finance in the Investment Banking industry. Known
              for ability to distill complex problems into easy to understand
              terms. Effective at combining creativity, resourcefulness and
              problem solving to provide innovative solutions to business
              challenges. Experience collaborating with cross-functional teams
              and driving both technical and procedural change in large
              organizations.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 col-md-3 col-lg-2 contact-info-technical">
            <p class="icon contact-info">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </p>
            <p class="email contact-info contact-details">
              stephensbill17@gmail.com
            </p>
            <p class="icon contact-info">
              <i class="fa fa-mobile" aria-hidden="true"></i>
            </p>
            <p class="phone contact-info contact-details">(201)-850-7410</p>
            <p class="icon contact-info">
              <i class="fa fa-solid fa-location-dot"></i>
            </p>
            <p class="location contact-info contact-details">Toms River, NJ</p>
            <p class="icon contact-info">
              <i class="fa fa-brands fa-linkedin"></i>
            </p>
            <p class="linkedin contact-info contact-details">
              <a href="https://www.linkedin.com/in/bill-stephens-04375923/">
                LinkedIn Profile
              </a>
            </p>
            <p class="icon contact-info">
              <i class="fa fa-solid fa-diagram-project"></i>
            </p>
            <p class="portfolio contact-info contact-details">
              <a href="https://billstephens2022.github.io/ProjectPortfolio/">
                Portfolio/Projects
              </a>
            </p>
            <p class="icon contact-info">
              <i class="fa fa-brands fa-github"></i>
            </p>
            <p class="github contact-info contact-details">
              <a href="https://github.com/BillStephens2022"> Github</a>
            </p>
            <div class="technical-skills">
              <p class="section-headers">TECHNICAL SKILLS</p>
              <hr />
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScipt</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Apollo Server/graphQL</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-8 col-md-9 col-lg-10 section-headers projects">
            <h2 class="section-headers">
              PROJECTS (
              <a
                class="portfolio-link"
                href="https://billstephens2022.github.io/ProjectPortfolio/"
              >
                Portfolio page
              </a>
              )
            </h2>
            <hr />
            <div class="project-1">
              <h3>
                Expense Tracker
                <span class="links link-left">
                  <a href="https://expense-tracker-mern.herokuapp.com">
                    Deployed App
                  </a>
                </span>
                <span class="links">
                  {" "}
                  |{" "}
                  <a href="https://github.com/BillStephens2022/Expense-Tracker-MERN">
                    Github Repo
                  </a>
                </span>
              </h3>
              <h6>
                Full Stack MERN app which allows users to track personal
                expenses by category (Housing, Food, Entertainment, etc.).
              </h6>
              <ul class="project-list">
                <li>
                  Team collaboration - My contributions were across both front
                  end (React, Chart.js) and back end (MongoDB, Apollo
                  Server/GraphQL) and the compound interest calculator.
                </li>
                <li>
                  Technologies used: HTML, CSS, JavaScript, Node.js, Express,
                  MongoDB, Chart.js, Apollo Server/GraphQL, and React.js.
                </li>
              </ul>
            </div>
            <div class="project-2">
              <h3>
                Community Chat
                <span class="links link-left">
                  <a href="https://community-chat.herokuapp.com">
                    Deployed App
                  </a>
                </span>
                <span class="links">
                  {" "}
                  |{" "}
                  <a href="https://github.com/BillStephens2022/Community-Chat">
                    Github Repo
                  </a>
                </span>
              </h3>
              <h6>
                Full Stack Social Media app which allows users to set up a
                profile, create posts, attach photos/videos, and comment on
                other users’ posts.
              </h6>
              <ul class="project-list">
                <li>
                  Team collaboration - My contributions were across both front
                  end (HTML, CSS, Handlebars) and back end (mySQL, Sequelize,
                  Node.js, Express, Passport.js).
                </li>
                <li>
                  Technologies used: Technologies used: HTML, CSS, JavaScript,
                  Node.js, Express, mySQL, Sequelize, Cloudinary, Socket.io.
                </li>
              </ul>
            </div>
            <div class="project-3">
              <h3>
                Vacation Planner
                <span class="links link-left">
                  <a href="https://jsedlak146.github.io/group8-vacationplanner">
                    Deployed App
                  </a>
                </span>
                <span class="links">
                  {" "}
                  |{" "}
                  <a href="https://github.com/jsedlak146/group8-vacationplanner">
                    Github Repo
                  </a>
                </span>
              </h3>
              <h6>
                Vacation Planner allows users to search a city and date and find
                available AirBnB rentals, local events, and local breweries.
              </h6>
              <ul class="project-list">
                <li>
                  Team collaboration - My contributions include working with the
                  Ticketmaster and Open Brewery APIs, and to render cards on the
                  front end displaying the search results. Also assisted with
                  tracking latest searches in local storage on the browser and
                  added some CSS animations.
                </li>
                <li>
                  Technologies used: HTML, CSS, Materialize CSS, JavaScript, 3rd
                  party APIs.
                </li>
              </ul>
            </div>
            <div class="col-sm-8 col-md-9 col-lg-10 section-headers work-experience">
              <h2 class="section-headers">WORK EXPERIENCE</h2>
              <hr />
              <div class="MorganStanley">
                <div class="job-header">
                  <img
                    class="MSLogo"
                    src={`${process.env.PUBLIC_URL}/images/MSLogo.png`}
                    alt="MS Logo"
                  />
                  <span class="job-location">New York, NY</span>
                  <span class="job-dates">May 2014 - May 2022</span>
                </div>
                <p class="role">
                  Vice President - Relationship Lending Controller
                </p>
                <h6 class="job-summary">
                  Managed a team of 7 across New York and Baltimore responsible
                  for maintaining the general ledger and financial reporting for
                  a $90 billion corporate loan portfolio.
                </h6>
                <p class="accomplishments">Key Accomplishments:</p>
                <ul class="work-bullets">
                  <li>
                    Collaborated with Technology and several cross functional
                    areas to analyze and implement new accounting standards –
                    this includes the implementation of CECL (Current Expected
                    Credit Losses).
                  </li>
                  <li>
                    Worked with the business unit and other support functions on
                    several initiatives which allowed the business unit to
                    engage in new business opportunities – this includes a new
                    booking model to record loan participation trades which
                    reduced credit risk exposure by approximately $4 billion.
                  </li>
                  <li>
                    Managed the team effectively during the Covid-19 pandemic
                    amidst transitioning to remote work, volatile credit
                    markets, and implementing a new accounting standard (CECL).
                  </li>
                </ul>
              </div>
              <hr />
              <div class="CreditSuisse">
                <div class="job-header">
                  <img
                    class="CSLogo"
                    src={`${process.env.PUBLIC_URL}/images/CSLogo.png`}
                    alt="Credit Suisse Logo"
                  />
                  <span class="job-location">New York, NY</span>
                  <span class="job-dates">Oct 1996 - Sep 2013</span>
                </div>
                <p class="role">
                  Director - Valuation Risk Group - Fair Value Control Team (Jan
                  2013 - Sep 2013)
                </p>
                <h6 class="job-summary">
                  Managed a team of 3 responsible for centrally controlling the
                  Fair Value Disclosure processes across all businesses within
                  the investment bank.
                </h6>
              </div>
              <div class="CreditSuisse">
                <p class="role">
                  Director - Americas Head of Investment Banking Product Control
                  (Jan 2008 - Dec 2012)
                </p>
                <h6 class="job-summary">
                  Managed a team of 15 across New York and Raleigh responsible
                  for maintaining the general ledger and financial reporting for
                  Corporate Lending, Loan Capital Markets, Private Banking
                  Lending, Equity Capital Markets, and Mergers & Acquisitions.
                </h6>
                <p class="accomplishments">Key Accomplishments:</p>
                <ul class="work-bullets">
                  <li>
                    Earned a “Credit Suisse Award” for leading the Fair Value
                    Option project for Corporate Loans which included
                    collaborating with several departments to implement new
                    infrastructure and procedures supporting the new Accounting
                    Standard.
                  </li>
                  <li>
                    Received a “Basel II Award” for contributing subject matter
                    expertise to the implementation of a new capital framework.
                  </li>
                  <li>
                    Traveled to Sydney, Singapore, London, Toronto to ensure the
                    accounting records transition smoothly upon implementation
                    of a new loan booking system (Loan IQ).
                  </li>
                </ul>
                <h6 class="job-note">
                  Note: Various other roles (promoted 4 times) held between
                  1996-2007
                </h6>
              </div>
              <div class="education">
                <h2 class="section-headers">EDUCATION</h2>
                <hr />

                <div class="row">
                  <div class="col-sm-4 col-md-4 col-lg-5 degrees">
                    <h3>Graduate and Undergraduate Degrees</h3>
                    <br />
                    <h6 class="degree">MBA, Professional Accounting</h6>
                    <h6 class="college">Rutgers University</h6>
                    <h6 class="time-range">1995-1996</h6>
                    <br />
                    <h6 class="degree">B.S. Administration of Justice</h6>
                    <h6 class="college">Rutgers University</h6>
                    <h6 class="time-range">1990 - 1994</h6>
                  </div>
                  <div class="col-sm-4 col-md-4 col-lg-5 degrees">
                    <h3>Coding Bootcamps</h3>
                    <br />
                    <h6 class="degree">Rutgers Coding Bootcamp</h6>
                    <h6 class="college">Rutgers University</h6>
                    <h6 class="time-range">2022 - present</h6>
                    <br />
                    <h6 class="degree text-wrap">
                      The Complete 2022 Web Development Bootcamp
                    </h6>
                    <h6 class="college">Udemy, Instructor: Dr Angela Yu</h6>
                    <h6 class="time-range">2022</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
