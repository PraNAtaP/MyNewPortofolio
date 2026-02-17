import React from 'react';
import BackButton from '../components/ui/BackButton';
import './Projects.css';
import { portfolioData } from '../data/content';

const Projects = () => {


  return (
    <div className="projects-page">
      <BackButton />
      <h2 className="section-header">CAREER QUESTS</h2>
      
      <div className="quest-list">
        {portfolioData.experience.map((job) => (
          <div key={job.id} className="quest-card">
            <div className="quest-header">
              <span className="quest-title">{job.company} - {job.role}</span>
              <span className="quest-status progress">
                [{job.duration}]
              </span>
            </div>
            <div className="quest-desc">
                <p><strong>{job.description}</strong></p>
                <ul style={{marginTop: '10px', paddingLeft: '20px'}}>
                    {job.details.map((detail, i) => (
                        <li key={i} style={{marginBottom: '5px'}}>{detail}</li>
                    ))}
                </ul>
            </div>
            <div className="quest-rewards" style={{marginTop: '15px'}}>TECH: {job.tech}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
