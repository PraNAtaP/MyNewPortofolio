import React from 'react';
import BackButton from '../components/ui/BackButton';
import './Contact.css';
import { portfolioData } from '../data/content';

const Contact = () => {
  return (
    <div className="contact-page">
      <BackButton />
      <h2 className="section-header">COMMS CHANNEL</h2>
      
      <div className="contact-terminal">
        <p className="terminal-line">{'>'} INITIALIZING CONNECTION...</p>
        <p className="terminal-line">{'>'} FREQUENCY OPEN.</p>
        <br />
        <p className="terminal-line">SEND TRANSMISSION TO:</p>
        <a href={`mailto:${portfolioData.contact.email}`} className="contact-link">
           [EMAIL: {portfolioData.contact.email.toUpperCase()}]
        </a>
        
        <br /><br />
        <p className="terminal-line">OTHER CHANNELS:</p>
        <div className="social-links">
            <a href="#" className="contact-link">[GITHUB]</a>
            <a href="#" className="contact-link">[LINKEDIN]</a>
            <a href="#" className="contact-link">[TWITTER]</a>
        </div>
        
        <div className="input-area">
            <span className="blinking-cursor">{'>'}</span>
            <input type="text" placeholder="ENTER MESSAGE..." className="retro-input" disabled />
        </div>
      </div>
    </div>
  );
};

export default Contact;
