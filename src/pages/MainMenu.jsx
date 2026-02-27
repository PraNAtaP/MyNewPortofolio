import React from "react";
import { Link } from "react-router-dom";
import useRetroSound from "../hooks/useRetroSound";
import GameTutorial from "../components/ui/GameTutorial";
import {
  PixelPlayer,
  PixelSword,
  PixelScroll,
  PixelComms,
  PixelController,
} from "../components/ui/PixelMenuIcons";
import "./MainMenu.css";

const MENU_ITEMS = [
  { label: "PLAYER INFO", path: "/about", icon: <PixelPlayer size={20} /> },
  { label: "SKILL TREE", path: "/skills", icon: <PixelSword size={20} /> },
  { label: "QUEST LOG", path: "/projects", icon: <PixelScroll size={20} /> },
  { label: "PRODUCTS", path: "/products", icon: <PixelController size={20} /> },
  { label: "COMMS CH", path: "/contact", icon: <PixelComms size={20} /> },
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
