import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRetroSound from '../hooks/useRetroSound';
import './IntroScreen.css';

const IntroScreen = () => {
    const navigate = useNavigate();
    const { playSound } = useRetroSound();
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => setBlink(b => !b), 500);
        return () => clearInterval(timer);
    }, []);

    const handleStart = () => {
        playSound('start');
        navigate('/menu');
    };

    return (
        <div className="intro-screen" onClick={handleStart}>
            <div className="title-block">
                <h1 className="title-main">PORTFOLIO</h1>
                <h2 className="title-sub">ADVANCE</h2>
            </div>
            
            <div className="hero-sprite">
                {/* 8-bit placeholder avatar/sprite */}
                <div className="sprite-pixels"></div>
            </div>

            <div className={`start-text ${blink ? 'visible' : 'hidden'}`}>
                PRESS START
            </div>

            <div className="copyright">
                © 2024 DEV CORP
            </div>
        </div>
    );
};

export default IntroScreen;
