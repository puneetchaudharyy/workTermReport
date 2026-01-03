import React from "react";
import "./Employer.css";

const employer = () => {
  return (
    <div className="employer">
      <div className="content-box">
        <h1 className="employer-title">About my amazing employer!</h1>
        <p className="employer-paragraph">
          VK Cloud Solutions Private Limited is a software and cloud services company that builds and maintains web-based solutions for clients across
          different domains. The team focuses on designing and deploying modern web applications that leverage cloud infrastructure, APIs, and
          databases to solve real business problems.
        </p>
        <p className="employer-paragraph">
          During this work term, the web development group I joined was responsible for creating and enhancing client-facing websites and internal
          tools. As a Web Developer Intern, I collaborated with experienced developers in this group to implement features, fix bugs, and improve
          performance and responsiveness across projects.
        </p>
        <p className="employer-paragraph">
          Although the internship was fully remote, the company maintained a professional and supportive environment through regular stand-ups, code
          reviews, and feedback sessions. My supervisor, Viresh Kumar, provided mentorship on both technical decisions and best practices in modern
          web development, which helped me contribute meaningful code to live projects.
        </p>
      </div>
    </div>
  );
};

export default employer;
