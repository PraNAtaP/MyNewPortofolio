import React from "react";
import BackButton from "../components/ui/BackButton";
import { portfolioData } from "../data/content";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <BackButton />

      <div className="profile-container">
        <div className="profile-card">
          <div className="avatar-frame">
            <div className="pixel-avatar">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="pixel-avatar-img"
              />
            </div>
            <div className="level-badge">
              LVL {portfolioData.personal.level}
            </div>
          </div>

          <div className="stats-panel">
            <h2 className="player-name">
              {portfolioData.personal.name.toUpperCase()}
            </h2>
            <div className="stat-row">
              <span className="stat-label">CLASS:</span>
              <span className="stat-value">
                {portfolioData.personal.class.toUpperCase()}
              </span>
            </div>
            <div className="stat-row">
              <span className="stat-label">HP:</span>
              <div className="hp-bar-container">
                <div
                  className="hp-bar-fill"
                  style={{ width: `${portfolioData.personal.stats.hp}%` }}
                ></div>
              </div>
            </div>
            <div className="stat-row">
              <span className="stat-label">MP:</span>
              <div className="mp-bar-container">
                <div
                  className="mp-bar-fill"
                  style={{ width: `${portfolioData.personal.stats.mp}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bio-section">
          <h3 className="section-title">{portfolioData.about.title}</h3>
          <div className="typewriter-text">
            {portfolioData.about.narrative.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <br />
          <h3 className="section-title">{portfolioData.goals.title}</h3>
          <div className="typewriter-text">
            <p>{portfolioData.goals.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
