import React from "react";
import { Link } from "react-router-dom";
import useRetroSound from "../hooks/useRetroSound";
import GameTutorial from "../components/ui/GameTutorial";
import "./MainMenu.css";

const MENU_ITEMS = [
  { label: "PLAYER INFO", path: "/about", icon: "👤" },
  { label: "SKILL TREE", path: "/skills", icon: "⚔" },
  { label: "QUEST LOG", path: "/projects", icon: "📜" },
  { label: "COMMS CH", path: "/contact", icon: "📡" },
];

const MainMenu = () => {
  const { playSound } = useRetroSound();

  return (
    <div className="main-menu">
      <GameTutorial />
      <h2 className="menu-header">— SELECT DATA —</h2>
      <ul className="menu-list">
        {MENU_ITEMS.map((item, index) => (
          <li key={index} className="menu-item">
            <Link
              to={item.path}
              className="menu-link"
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="menu-footer">CREDITS: 1</div>
    </div>
  );
};

export default MainMenu;
