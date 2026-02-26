import React from "react";
import BackButton from "../components/ui/BackButton";
import { portfolioData } from "../data/content";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <BackButton />
      <h2 className="section-header">QUEST LOG</h2>

      <div className="quest-list">
        {portfolioData.experience.map((job) => (
          <div key={job.id} className="quest-card">
            <div className="quest-header">
              <span className="quest-type">[{job.type}]</span>
              <span className="quest-status progress">[{job.duration}]</span>
            </div>

            <div className="quest-body">
              <div className="quest-image-wrapper">
                <img
                  src={job.image}
                  alt={job.company}
                  className="quest-image"
                />
              </div>
              <div className="quest-info">
                <span className="quest-title">
                  {job.company} — {job.role}
                </span>
                <p className="quest-desc-text">{job.description}</p>
              </div>
            </div>

            <div className="quest-desc">
              <ul className="quest-details">
                {job.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="quest-rewards">TECH: {job.tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
