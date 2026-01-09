// Conclusions.jsx - More content, better formatting
import React from "react";
import "./Conclusions.css";

const Conclusions = () => {
  return (
    <section className="conclusions">
      <div className="content-box">
        <h1 className="conclusions-title">Conclusions</h1>

        <div className="intro-section">
          <p>
            This 12-week co-op term at VK Cloud Solutions marked a transformative step from academic learning to professional web development.
            Delivered outstanding performance across all evaluation categories, earning perfect scores in code quality, productivity, communication,
            learning ability, and dependability.
          </p>
          <p>
            Contributed meaningful code to live client projects, demonstrating skills beyond typical intern expectations. Rapidly adapted to
            production workflows, remote collaboration across time zones, and company-specific tools while maintaining exceptional attention to
            detail.
          </p>
        </div>

        <div className="performance-metrics">
          <h2>Performance Highlights</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <span className="metric-value">Outstanding</span>
              <span>Code Quality & Detail</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">Ahead of Schedule</span>
              <span>Productivity & Output</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">Outstanding</span>
              <span>Team Communication</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">Outstanding</span>
              <span>Learning Adaptation</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">Outstanding</span>
              <span>Initiative & Ownership</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">Outstanding</span>
              <span>Overall Assessment</span>
            </div>
          </div>
        </div>

        <div className="reflection">
          <h2>Growth Reflection</h2>
          <p>
            Entered the term with solid academic React skills but limited production experience. Emerged with full-stack proficiency, Git
            collaboration mastery, debugging expertise, and confidence in remote professional environments. Most significantly, learned to balance
            speed, quality, and communication under real client pressure—skills essential for career progression.
          </p>
        </div>

        <div className="development-path">
          <h2>Professional Development Path</h2>
          <div className="path-stages">
            <div className="path-stage completed">
              <div className="stage-circle">✓</div>
              <div>Front-end delivery mastered</div>
            </div>
            <div className="path-stage">
              <div className="stage-circle">1</div>
              <div>Full-stack development mastery</div>
            </div>
            <div className="path-stage">
              <div className="stage-circle">2</div>
              <div>Large system architecture</div>
            </div>
            <div className="path-stage">
              <div className="stage-circle">3</div>
              <div>Feature leadership</div>
            </div>
            <div className="path-stage">
              <div className="stage-circle">4</div>
              <div>Independent developer</div>
            </div>
          </div>
        </div>

        <div className="supervisor-endorsement">
          <blockquote>
            "Puneet delivered outstanding performance this work term and consistently exceeded expectations in all aspects of the Web Developer Intern
            role. They quickly became a trusted member of the team, contributed meaningful code to live projects, and would be welcomed back without
            hesitation."
          </blockquote>
          <div className="quote-attribution">Viresh Kumar, Supervisor · Final Performance Evaluation</div>
        </div>

        <div className="final-takeaway">
          <p>
            This co-op confirmed web development as my career path and established a strong foundation for tackling increasingly complex technical
            challenges with professional reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conclusions;
