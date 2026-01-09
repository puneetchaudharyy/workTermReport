import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <section className="goals">
      <h1 className="goals-title">Goals and Learning Outcomes</h1>
      <p className="goals-intro">
        At the beginning of this work term, I set several learning goals to guide my development as a remote Web Developer Intern. These goals focused
        on strengthening my communication, technical skills, time management, and teamwork in a professional environment.
      </p>

      {/* Goal 1 */}
      <article className="goal-card">
        <h2 className="goal-heading">Learning Goal 1: Written Communication</h2>
        <p className="goal-text">
          <span className="goal-label">Goal:</span> Improve clarity and effectiveness in written communication when collaborating remotely with the
          development team through Teams chat, emails, and task documentation.
        </p>
        <p className="goal-text">
          <span className="goal-label">Action Plan:</span> Write clear, concise progress updates in Teams; use structured formats such as bullet
          points, code snippets, and screenshots when explaining technical issues; review messages before sending; and maintain organized
          documentation for tasks, bugs, and completed work.
        </p>
        <p className="goal-text">
          <span className="goal-label">Measures of Success:</span> Fewer follow‑up questions from team members about my messages, positive feedback
          from my supervisor about communication clarity, and documentation that others can use without needing clarification.
        </p>
      </article>

      {/* Goal 2 */}
      <article className="goal-card">
        <h2 className="goal-heading">Learning Goal 2: Oral Communication</h2>
        <p className="goal-text">
          <span className="goal-label">Goal:</span> Strengthen verbal communication skills during weekly meetings across time zones by clearly
          presenting progress, challenges, and questions.
        </p>
        <p className="goal-text">
          <span className="goal-label">Action Plan:</span> Prepare a short update before each call, summarizing what I completed, what I am working
          on, and any blockers; practice explaining technical concepts in simple terms; ask 1–2 clarifying questions during meetings; and speak slowly
          and confidently to account for remote audio delays.
        </p>
        <p className="goal-text">
          <span className="goal-label">Measures of Success:</span> Ability to explain project updates without hesitation, more active participation in
          meetings, and my supervisor acknowledging clearer communication during calls.
        </p>
      </article>

      {/* Goal 3 */}
      <article className="goal-card">
        <h2 className="goal-heading">Learning Goal 3: Technological Literacy</h2>
        <p className="goal-text">
          <span className="goal-label">Goal:</span> Expand my technical expertise by becoming comfortable with the modern web technologies used in the
          internship, including React, APIs, debugging tools, and Git‑based workflows.
        </p>
        <p className="goal-text">
          <span className="goal-label">Action Plan:</span> Complete internal tutorials and documentation, work hands‑on with frameworks such as React
          as assigned, practice Git operations (branching, merging, resolving conflicts), request feedback during code reviews, and use debugging
          tools to resolve issues independently.
        </p>
        <p className="goal-text">
          <span className="goal-label">Measures of Success:</span> Increased comfort using these tools in daily work, fewer support requests for
          routine tasks, and stronger feedback on code quality and debugging from my supervisor and teammates.
        </p>
      </article>

      {/* Goal 4 */}
      <article className="goal-card">
        <h2 className="goal-heading">Learning Goal 4: Time Management</h2>
        <p className="goal-text">
          <span className="goal-label">Goal:</span> Manage time effectively while working remotely across time zones so that deadlines are met and
          tasks are completed on schedule.
        </p>
        <p className="goal-text">
          <span className="goal-label">Action Plan:</span> Create a daily work schedule with planned coding hours and checkpoints; use task‑tracking
          tools such as Trello, Notion, or Jira when available; break larger tasks into smaller milestones; reserve time before meetings to prepare
          updates; and adjust my work hours to overlap with the team in India when needed.
        </p>
        <p className="goal-text">
          <span className="goal-label">Measures of Success:</span> Consistently completing tasks before or on deadlines, reduced last‑minute rush or
          overtime, and my supervisor noticing improved consistency and reliability.
        </p>
      </article>

      {/* Goal 5 */}
      <article className="goal-card">
        <h2 className="goal-heading">Learning Goal 5: Teamwork</h2>
        <p className="goal-text">
          <span className="goal-label">Goal:</span> Improve collaboration skills by actively participating in team discussions, code reviews, and
          shared development tasks in a remote setup.
        </p>
        <p className="goal-text">
          <span className="goal-label">Action Plan:</span> Participate regularly in Teams discussions and meetings, offer ideas or suggestions for
          project improvements, assist teammates with debugging when possible, and request feedback on my teamwork and communication.
        </p>
        <p className="goal-text">
          <span className="goal-label">Measures of Success:</span> More frequent contributions during discussions, teammates seeking my input on
          issues, and positive feedback about my collaboration during the final evaluation.
        </p>
      </article>
    </section>
  );
};

export default Goals;
