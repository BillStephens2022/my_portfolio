// Resume page displaying Resume and a button to download as a pdf file

function Resume() {
  const getResume = () => {
    console.log("button clicked!");
    fetch(`${process.env.PUBLIC_URL}/images/BillStephens-Resume.pdf`).then(
      (res) => {
        res.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "BillStephens-Resume.pdf";
          alink.click();
        });
      }
    );
  };

  return (
    <div className="resume">
      <div className="hero">
        <h1 className="hero-header">My Resume</h1>
        <button
          onClick={getResume}
          className="btn btn-lg btn-primary download-button"
        >
          Download PDF
        </button>
      </div>

      <div className="body-div resume-div">
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2 photo">
            <img
              className="align-items-center bill-pic"
              src={`${process.env.PUBLIC_URL}/images/billS.jpg`}
              alt="Bill pic"
            />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10 summary">
            <h1 className="header-name">Bill Stephens</h1>
            <h3 className="header-occupation">Full Stack Web Developer</h3>
            <hr className="header-hr" />
            <h3 className="header-summary">
              Full Stack Software Engineer with a strong foundation in Accounting and Finance, currently transitioning into the tech 
              industry. Skilled in building and maintaining web applications with a focus on clean code and scalability. Hands-on 
              experience with front-end and back-end development through both professional and personal projects. Adaptable and eager 
              to contribute to collaborative team environments, leveraging strong problem-solving skills and a passion for continuous 
              learning.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2 contact-info-technical">
            <p className="icon contact-info">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </p>
            <p className="email contact-info contact-details">
              stephensbill17@gmail.com
            </p>
            <p className="icon contact-info">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </p>
            <p className="phone contact-info contact-details">(201)-850-7410</p>
            <p className="icon contact-info">
              <i className="fa fa-solid fa-location-dot"></i>
            </p>
            <p className="location contact-info contact-details">
              Toms River, NJ
            </p>
            <p className="icon contact-info">
              <i className="fa fa-brands fa-linkedin"></i>
            </p>
            <p className="linkedin contact-info contact-details">
              <a href="https://www.linkedin.com/in/bill-stephens-04375923/">
                LinkedIn Profile
              </a>
            </p>
            <p className="icon contact-info">
              <i className="fa fa-solid fa-diagram-project"></i>
            </p>
            <p className="project-portfolio contact-info contact-details">
              <a href="https://billstephens2022.github.io/my_portfolio/">
                Portfolio/Projects
              </a>
            </p>
            <p className="icon contact-info">
              <i className="fa fa-brands fa-github"></i>
            </p>
            <p className="github contact-info contact-details">
              <a href="https://github.com/BillStephens2022"> Github</a>
            </p>
            <div className="technical-skills">
              <p className="skills-subheading">TECHNICAL SKILLS</p>
              <hr />

              <h4>Languages</h4>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
                <li>DAML</li>
                <li>Haskell</li>
                <br />
              </ul>

              <h4>Dev Tools / Frameworks</h4>
              <ul className="skills-list">
                <li>React.js</li>
                <li>React Native</li>
                <li>Next.js</li>
                <li>Angular.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Nest.js</li>
                <li>Spring Boot</li>
                <li>Django/Flask</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>graphQL</li>
                <li>Apollo Server</li>
                <li>JavaFX</li>
                <li>WPF</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <div className="main-sections section-headers section-projects">
              <h2 className="section-headers section-projects">
                PROJECTS (
                <a
                  className="project-portfolio-link"
                  href="https://billstephens2022.github.io/my_portfolio/"
                >
                  Portfolio page
                </a>
                )
              </h2>
              <hr />
              <div className="project">
                <h3>
                  Corporate Loans
                  <span className="links link-left">
                    <a href="https://corporate-loans.vercel.app/">
                      Deployed App
                    </a>
                  </span>
                  <span className="links">
                    {" "}
                    |{" "}
                    <a href="https://github.com/BillStephens2022/loans-calc">
                      Github Repo
                    </a>
                  </span>
                </h3>
                <h5>
                  Full Stack corporate loan application which educates users on various corporate loan topics.
                  Allows users to enter sample loan transactions to view accounting entries and financial statement impact.
                </h5>
                <ul className="project-list">
                  <li>
                    Designed and implemented the entire project, including front
                    end (Next.js/React.js) and back end (MongoDB, Mongoose).
                  </li>
                </ul>
              </div>
              <div className="project">
                <h3>
                  Drinking from the Garden Hose
                  <span className="links link-left">
                    <a href="https://gardenhose.vercel.app/">Deployed App</a>
                  </span>
                  <span className="links">
                    {" "}
                    |{" "}
                    <a href="https://github.com/BillStephens2022/dftgh">
                      Github Repo
                    </a>
                  </span>
                </h3>
                <h5>
                  Full Stack Next.js application for a Podcast. Admin users can
                  control content and push new episodes from their RSS feed to
                  the Episodes page along with a photo. Site visitors can
                  comment on specific episodes, vote in polls, and provide
                  general feedback.
                </h5>
                <ul className="project-list">
                  <li>
                    Designed and implemented the entire project, including front
                    end (Next.js/React.js), back end (MongoDB, Mongoose),
                    next-auth for user authentication, and integration of
                    Cloudinary for image storage.
                  </li>
                </ul>
              </div>
              <div className="project">
                <h3>
                  BarKEEP
                  <span className="links link-left">
                    <a href="https://barkeep-842cb6903459.herokuapp.com/">
                      Deployed App
                    </a>
                  </span>
                  <span className="links">
                    {" "}
                    |{" "}
                    <a href="https://github.com/BillStephens2022/BarKEEP">
                      Github Repo
                    </a>
                  </span>
                </h3>
                <h5>
                  Full Stack MERN app for cocktail enthusiasts. Search for
                  cocktail recipes via a 3rd party API, save your favorite
                  cocktails to your profile page, post cocktail photos, post
                  tips/techniques, like & comment on others’ posts.
                </h5>
                <ul className="project-list">
                  <li>
                    Designed and implemented the entire project, including front
                    end (React.js), back end (MongoDB, Mongoose, Apollo
                    Server/GraphQL), and integration of Cloudinary for image
                    storage.
                  </li>
                </ul>
              </div>
              <div className="main-sections section-headers work-experience">
              <h2 className="section-headers">SOFTWARE ENGINEERING EXPERIENCE</h2>
                <hr />
                <div className="MorganStanley">
                  <div className="job-header">
                    <img
                      className="LendOSLogo"
                      src={`${process.env.PUBLIC_URL}/images/LendOSLogo.png`}
                      alt="LendOS Logo"
                    />
                    <span className="job-location">Remote</span>
                    <span className="job-dates">June 2024 - Present</span>
                  </div>
                  <p className="role">
                    Software Engineer
                  </p>
                  <h6 className="job-summary">
                    Contributed to developing a full-stack web application for smart lending contracts using React, 
                    NestJS, and DAML, focusing on both front-end and back-end features, testing, and cloud deployment.
                  </h6>
                  <p className="accomplishments">Key Accomplishments:</p>
                  <ul className="work-bullets">
                    <li>
                      Contributed to the development of a full stack web application using React, NestJS, and DAML for 
                      smart lending contracts.
                    </li>
                    <li>
                      Worked on both front-end and back-end features, using TypeScript, HTML, CSS, and DAML, actively pushing 
                      code to the main branch via GitHub.
                    </li>
                    <li>
                      Developed and executed unit and integration tests, including DAML tests and Playwright tests, ensuring 
                      high-quality, reliable code.
                    </li>
                    <li>
                      Created comprehensive documentation for all DAML choices in the GitHub project Wiki to improve codebase 
                      clarity and facilitate team collaboration.
                    </li>
                    <li>
                      Used Docker and Kubernetes for containerization and orchestration of the application, deploying services 
                      to AWS infrastructure.
                    </li>
                    <li>
                      Collaborated with cross-functional teams through GitHub Projects for project management and Agile workflow 
                      implementation.
                    </li>
                    <li>
                      Familiar with coding in a GitHub Codespace environment, optimizing development processes and maintaining 
                      consistent coding standards.
                    </li>
                  </ul>
                </div>
                
                <h2 className="section-headers">FINANCE/LEADERSHIP EXPERIENCE
                </h2>
                <hr />
                <div className="MorganStanley">
                  <div className="job-header">
                    <img
                      className="MSLogo"
                      src={`${process.env.PUBLIC_URL}/images/MSLogo.png`}
                      alt="MS Logo"
                    />
                    <span className="job-location">New York, NY</span>
                    <span className="job-dates">May 2014 - May 2022</span>
                  </div>
                  <p className="role">
                    Vice President - Relationship Lending Controller
                  </p>
                  <h6 className="job-summary">
                    Managed a team of 7 across New York and Baltimore
                    responsible for maintaining the general ledger and financial
                    reporting for a $90 billion corporate loan portfolio.
                  </h6>
                  <p className="accomplishments">Key Accomplishments:</p>
                  <ul className="work-bullets">
                    <li>
                      Collaborated with Technology and several cross functional
                      areas to analyze and implement new accounting standards –
                      this includes the implementation of CECL (Current Expected
                      Credit Losses).
                    </li>
                    <li>
                      Worked with the business unit and other support functions
                      on several initiatives which allowed the business unit to
                      engage in new business opportunities – this includes a new
                      booking model to record loan participation trades which
                      reduced credit risk exposure by approximately $4 billion.
                    </li>
                    <li>
                      Managed the team effectively during the Covid-19 pandemic
                      amidst transitioning to remote work, volatile credit
                      markets, and implementing a new accounting standard
                      (CECL).
                    </li>
                  </ul>
                </div>
                <hr />
                <div className="CreditSuisse">
                  <div className="job-header">
                    <img
                      className="CSLogo"
                      src={`${process.env.PUBLIC_URL}/images/CSLogo.png`}
                      alt="Credit Suisse Logo"
                    />
                    <span className="job-location">New York, NY</span>
                    <span className="job-dates">Oct 1996 - Sep 2013</span>
                  </div>
                  <p className="role">
                    Director - Valuation Risk Group - Fair Value Control Team
                    (Jan 2013 - Sep 2013)
                  </p>
                  <h6 className="job-summary">
                    Managed a team of 3 responsible for centrally controlling
                    the Fair Value Disclosure processes across all businesses
                    within the investment bank.
                  </h6>
                </div>
                <div className="CreditSuisse">
                  <p className="role">
                    Director - Americas Head of Investment Banking Product
                    Control (Jan 2008 - Dec 2012)
                  </p>
                  <h6 className="job-summary">
                    Managed a team of 15 across New York and Raleigh responsible
                    for maintaining the general ledger and financial reporting
                    for Corporate Lending, Loan Capital Markets, Private Banking
                    Lending, Equity Capital Markets, and Mergers & Acquisitions.
                  </h6>
                  <p className="accomplishments">Key Accomplishments:</p>
                  <ul className="work-bullets">
                    <li>
                      Earned a “Credit Suisse Award” for leading the Fair Value
                      Option project for Corporate Loans which included
                      collaborating with several departments to implement new
                      infrastructure and procedures supporting the new
                      Accounting Standard.
                    </li>
                    <li>
                      Received a “Basel II Award” for contributing subject
                      matter expertise to the implementation of a new capital
                      framework.
                    </li>
                    <li>
                      Traveled to Sydney, Singapore, London, Toronto to ensure
                      the accounting records transition smoothly upon
                      implementation of a new loan booking system (Loan IQ).
                    </li>
                  </ul>
                  <h5 className="job-note">
                    Note: Various other roles (promoted 4 times) held between
                    1996-2007
                  </h5>
                </div>
                <div className="education main-sections">
                  <h2 className="section-headers">EDUCATION</h2>
                  <hr />

                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-5 degrees">
                      <h3>Graduate and Undergraduate Degrees</h3>
                      <br />
                      <h6 className="degree">MBA, Professional Accounting</h6>
                      <h6 className="college">Rutgers University</h6>
                      <h6 className="time-range">1995-1996</h6>
                      <br />
                      <h6 className="degree">B.S. Administration of Justice</h6>
                      <h6 className="college">Rutgers University</h6>
                      <h6 className="time-range">1990 - 1994</h6>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-5 degrees">
                      <h3>Coding Bootcamps</h3>
                      <br />
                      <h6 className="degree">Rutgers Coding Bootcamp</h6>
                      <h6 className="college">Rutgers University</h6>
                      <h6 className="time-range">2022 - present</h6>
                      <br />
                      <h6 className="degree text-wrap">
                        The Complete 2022 Web Development Bootcamp
                      </h6>
                      <h6 className="college">
                        Udemy, Instructor: Dr Angela Yu
                      </h6>
                      <h6 className="time-range">2022</h6>
                    </div>
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
