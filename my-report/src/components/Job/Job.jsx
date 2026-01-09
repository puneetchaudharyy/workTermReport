import React from "react";
import "./Job.css";

const Job = () => {
  return (
    <section className="job">
      <div className="content-box">
        <h1 className="job-title">Job Description</h1>

        <p className="job-intro">
          As a Web Developer Intern at VK Cloud Solutions, I contributed to production web applications and client projects, working across the full
          development cycle—from feature implementation to debugging and optimization. My work directly supported live client deliverables and
          internal tools used by the development team.
        </p>

        <div className="job-responsibilities">
          <h2 className="job-subtitle">Key Responsibilities & Projects</h2>
          <ul className="job-list">
            <li>
              Implemented new UI components in React and JavaScript for client dashboards, following team coding standards and design guidelines with
              excellent attention to detail.
            </li>
            <li>
              Debugged and optimized existing features to improve performance and responsiveness across browsers and devices, resulting in fewer
              defects and faster load times.
            </li>
            <li>Used Git for branching, merging, and resolving conflicts while collaborating with other developers on shared codebases.</li>
            <li>
              Participated in daily stand-ups and code reviews, communicating progress and blockers clearly to both technical and non-technical
              stakeholders.
            </li>
            <li>Contributed ideas during team discussions and proactively resolved issues, demonstrating strong initiative throughout the term.</li>
          </ul>
        </div>

        <div className="job-skills">
          <h2 className="job-subtitle">Skills: Academic vs On-the-Job</h2>
          <div className="skills-grid">
            <div className="skills-column">
              <h3>From University Courses</h3>
              <ul>
                <li>React and JavaScript fundamentals</li>
                <li>HTML/CSS layout and responsive design</li>
                <li>Database concepts (SQL/NoSQL  )</li>
                <li>Basic API integration</li>
              </ul>
            </div>
            <div className="skills-column">
              <h3>Learned On-the-Job</h3>
              <ul>
                <li>Company-specific workflows and tools</li>
                <li>Advanced Git collaboration (branching/merging)</li>
                <li>Production debugging and optimization</li>
                <li>Remote team communication (Teams, stand-ups)</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="job-reflection">
          This hands-on experience transformed my academic foundation into professional full-stack capabilities. Working on live client projects under
          real deadlines taught me to balance quality, speed, and collaboration—skills my supervisor noted exceeded typical intern expectations.
          Moving forward, I aim to tackle larger system architectures and lead feature development as suggested in my evaluation.
        </p>
      </div>
    </section>
  );
};

export default Job;