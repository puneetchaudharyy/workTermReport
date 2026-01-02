import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <p className="copyright">
          &copy; 2025 Puneet Chaudhary | University of Guelph BCOMP Co-op Work
          Term Report
        </p>
        <p className="co-op-info">
          Fall Term: October 6 – December 27, 2025 | VK Cloud Solutions Private
          Limited
        </p>
        <p className="built-with">
          Built with React & Tailwind CSS.{" "}
          <a
            href="https://github.com/puneetchaudharyy/coop-report"
            className="github-link"
          >
            Source on GitHub
          </a>
        </p>
    </footer>
  );
}

export default Footer
