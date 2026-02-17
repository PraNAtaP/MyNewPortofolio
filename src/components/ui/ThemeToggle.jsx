import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === 'light' ? 'Switch to Arcade Mode' : 'Switch to GameBoy Mode'}
        >
            <div className={`pixel-icon ${theme}`}>
                {theme === 'light' ? (
                    /* Sun / GB Icon */
                    <div className="icon-sun"></div>
                ) : (
                    /* Moon / Arcade Icon */
                    <div className="icon-moon"></div>
                )}
            </div>
            <span className="toggle-label">{theme === 'light' ? 'GB MODE' : 'ARCADE'}</span>
        </button>
    );
};

export default ThemeToggle;
