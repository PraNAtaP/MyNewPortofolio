import React, { useState, useEffect, useCallback } from "react";
import useRetroSound from "../../hooks/useRetroSound";
import "./GameTutorial.css";

const STORAGE_KEY = "retro-tutorial-seen";

const TUTORIAL_STEPS = [
  {
    speaker: "SYSTEM.NPC",
    text: "WELCOME, ADVENTURER! You have entered the world of Pranata Putrandana — a front-end developer on a quest for excellence.",
  },
  {
    speaker: "SYSTEM.NPC",
    text: "Use the MAIN MENU to navigate: PLAYER INFO for stats, SKILL TREE for abilities, QUEST LOG for missions, and COMMS CH to make contact.",
  },
  {
    speaker: "SYSTEM.NPC",
    text: "Look for the theme switch at the bottom of the screen. Toggle between DAY LEVEL (GameBoy) and NIGHT LEVEL (Arcade) to change the vibe!",
  },
  {
    speaker: "SYSTEM.NPC",
    text: "Your briefing is complete. Good luck out there, hero. May your code compile on the first try!",
  },
];

const GameTutorial = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { playSound } = useRetroSound();

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setVisible(true);
      setIsTyping(true);
    }
  }, []);

  useEffect(() => {
    if (!visible || !isTyping) return;

    const fullText = TUTORIAL_STEPS[step].text;
    let charIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      charIndex++;
      setDisplayedText(fullText.slice(0, charIndex));
      if (charIndex >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [step, visible, isTyping]);

  const handleAdvance = useCallback(() => {
    if (isTyping) {
      setDisplayedText(TUTORIAL_STEPS[step].text);
      setIsTyping(false);
      return;
    }

    playSound("click");

    if (step < TUTORIAL_STEPS.length - 1) {
      setStep((s) => s + 1);
      setIsTyping(true);
    } else {
      localStorage.setItem(STORAGE_KEY, "true");
      setVisible(false);
    }
  }, [isTyping, step, playSound]);

  if (!visible) return null;

  const isLastStep = step === TUTORIAL_STEPS.length - 1;

  return (
    <div className="tutorial-overlay" onClick={handleAdvance}>
      <div className="tutorial-dialogue" onClick={(e) => e.stopPropagation()}>
        <div className="dialogue-speaker">{TUTORIAL_STEPS[step].speaker}</div>
        <div className="dialogue-text">{displayedText}</div>
        <div className="dialogue-footer">
          <span className="dialogue-step">
            [{step + 1}/{TUTORIAL_STEPS.length}]
          </span>
          <button className="dialogue-advance" onClick={handleAdvance}>
            {isLastStep ? "▶ START ADVENTURE" : "▶ NEXT"}
          </button>
        </div>
        {!isTyping && <div className="dialogue-indicator">▼</div>}
      </div>
    </div>
  );
};

export default GameTutorial;
