import React from "react";
import { useTheme } from "../../context/ThemeContext";
import useRetroSound from "../../hooks/useRetroSound";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { playSound } = useRetroSound();

  return (
    <button
      className="theme-toggle-btn"
      onMouseEnter={() => playSound("hover")}
      onClick={() => {
        playSound("click");
        toggleTheme();
      }}
      aria-label="Toggle Theme"
      title={theme === "light" ? "Switch to Arcade Mode" : "Switch to GameBoy Mode"}
    >
      <div className={`pixel-icon ${theme}`}>
        {theme === "light" ? (
          <div className="icon-sun"></div>
        ) : (
          <div className="icon-moon"></div>
        )}
      </div>
      <span className="toggle-label">{theme === "light" ? "GB MODE" : "ARCADE"}</span>
    </button>
  );
};

export default ThemeToggle;
