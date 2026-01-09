import React from "react";
import "./Acknowledgment.css";

const Acknowledgment = () => {
  return (
    <section className="acknowledgments">
      <div className="content-box">
        <h1 className="ack-title">Acknowledgments</h1>

        <p>
          Special thanks to my supervisor <strong>Viresh Kumar</strong> for his mentorship, timely feedback, and trust in assigning production client
          work that accelerated my professional growth.
        </p>

        <p>
          Grateful to the VK Cloud Solutions development team for the collaborative environment, code reviews, and support that made remote work both
          productive and enjoyable.
        </p>

        <p>
          Appreciation to the University of Guelph Co-op program for this transformative opportunity and the learning goals framework that guided my
          development.
        </p>
      </div>
    </section>
  );
};

export default Acknowledgment;
