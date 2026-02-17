import React, { useEffect, useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import './GameLayout.css';

const GameLayout = ({ children }) => {
  return (
    <div className="game-wrapper">
      <div className="game-device">
        <div className="power-indicator"></div>
        <div className="screen-bezel">
            <div className="screen-container">
                <div className="scanlines"></div>
                <div className="content-scroll">
                    {children}
                </div>
            </div>
            <div className="bezel-controls">
                <div className="brand-logo">RETRO-BOY</div>
                <ThemeToggle />
            </div>
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
