import React from "react";
import BackButton from "../components/ui/BackButton";
import { PixelGitHub, PixelLinkedIn, PixelInstagram } from "../components/ui/PixelIcons";
import { portfolioData } from "../data/content";
import "./Contact.css";

const Contact = () => {
  const { social } = portfolioData.contact;

  return (
    <div className="contact-page">
      <BackButton />
      <h2 className="section-header">COMMS CHANNEL</h2>

      <div className="contact-terminal">
        <p className="terminal-line">{">"} INITIALIZING CONNECTION...</p>
        <p className="terminal-line">{">"} FREQUENCY OPEN.</p>
        <br />
        <p className="terminal-line">SEND TRANSMISSION TO:</p>
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="contact-link"
        >
          [EMAIL: {portfolioData.contact.email.toUpperCase()}]
        </a>

        <br />
        <br />
        <p className="terminal-line">OTHER CHANNELS:</p>
        <div className="social-links">
          <a
            href={social.github}
            className="contact-link social-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PixelGitHub size={18} />
            <span>GITHUB</span>
          </a>
          <a
            href={social.linkedin}
            className="contact-link social-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PixelLinkedIn size={18} />
            <span>LINKEDIN</span>
          </a>
          <a
            href={social.instagram}
            className="contact-link social-link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PixelInstagram size={18} />
            <span>INSTAGRAM</span>
          </a>
        </div>

        <div className="input-area">
          <span className="blinking-cursor">{">"}</span>
          <input
            type="text"
            placeholder="ENTER MESSAGE..."
            className="retro-input"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
