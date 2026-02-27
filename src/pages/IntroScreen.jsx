import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRetroSound from "../hooks/useRetroSound";
import "./IntroScreen.css";

const IntroScreen = () => {
  const navigate = useNavigate();
  const { playSound } = useRetroSound();
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    playSound("start");
    navigate("/menu");
  };

  return (
    <div className="intro-screen" onClick={handleStart}>
      <div className="title-block">
        <h1 className="title-main">PORTFOLIO</h1>
        <h2 className="title-sub">Pranata</h2>
      </div>

      <div className="hero-sprite">
        <div className="sprite-pixels">
          <svg
            viewBox="0 0 16 16"
            fill="var(--bg-color)"
            className="play-icon"
          >
            <rect x="4" y="2" width="2" height="12" />
            <rect x="6" y="3" width="2" height="10" />
            <rect x="8" y="4" width="2" height="8" />
            <rect x="10" y="5" width="2" height="6" />
            <rect x="12" y="6" width="2" height="4" />
          </svg>
        </div>
      </div>

      <div className={`start-text ${blink ? "visible" : "hidden"}`}>
        PRESS START
      </div>

      <div className="copyright">© 2025 PRANATA PUTRANDANA</div>
    </div>
  );
};

export default IntroScreen;
