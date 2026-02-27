import React from "react";
import { useNavigate } from "react-router-dom";
import useRetroSound from "../../hooks/useRetroSound";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();
  const { playSound } = useRetroSound();

  return (
    <button
      className="back-button"
      onMouseEnter={() => playSound("hover")}
      onClick={() => {
        playSound("click");
        navigate("/menu");
      }}
    >
      ← BACK
    </button>
  );
};

export default BackButton;
