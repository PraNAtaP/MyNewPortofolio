import React from "react";

/** @returns {React.ReactElement} 8-bit player/person icon */
export const PixelPlayer = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} style={{ imageRendering: "pixelated" }}>
    <rect x="6" y="0" width="4" height="1" />
    <rect x="5" y="1" width="6" height="1" />
    <rect x="5" y="2" width="6" height="1" />
    <rect x="6" y="3" width="4" height="1" />
    <rect x="7" y="4" width="2" height="1" />
    <rect x="4" y="5" width="8" height="1" />
    <rect x="3" y="6" width="10" height="1" />
    <rect x="3" y="7" width="10" height="1" />
    <rect x="4" y="8" width="8" height="1" />
    <rect x="5" y="9" width="2" height="1" />
    <rect x="9" y="9" width="2" height="1" />
    <rect x="5" y="10" width="2" height="2" />
    <rect x="9" y="10" width="2" height="2" />
    <rect x="4" y="12" width="3" height="1" />
    <rect x="9" y="12" width="3" height="1" />
  </svg>
);

/** @returns {React.ReactElement} 8-bit sword/skill tree icon */
export const PixelSword = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} style={{ imageRendering: "pixelated" }}>
    <rect x="12" y="0" width="2" height="2" />
    <rect x="10" y="2" width="2" height="2" />
    <rect x="8" y="4" width="2" height="2" />
    <rect x="6" y="6" width="2" height="2" />
    <rect x="4" y="8" width="2" height="2" />
    <rect x="2" y="10" width="2" height="2" />
    <rect x="0" y="12" width="2" height="2" />
    <rect x="2" y="12" width="2" height="1" />
    <rect x="0" y="10" width="1" height="2" />
    <rect x="3" y="9" width="1" height="1" />
    <rect x="5" y="7" width="1" height="1" />
    <rect x="14" y="0" width="2" height="1" />
    <rect x="14" y="1" width="1" height="1" />
  </svg>
);

/** @returns {React.ReactElement} 8-bit scroll/quest log icon */
export const PixelScroll = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} style={{ imageRendering: "pixelated" }}>
    <rect x="3" y="0" width="10" height="1" />
    <rect x="2" y="1" width="1" height="1" />
    <rect x="13" y="1" width="1" height="1" />
    <rect x="3" y="1" width="10" height="1" fillOpacity="0.3" />
    <rect x="3" y="2" width="1" height="10" />
    <rect x="12" y="2" width="1" height="10" />
    <rect x="4" y="2" width="8" height="10" fillOpacity="0.15" />
    <rect x="5" y="4" width="6" height="1" />
    <rect x="5" y="6" width="6" height="1" />
    <rect x="5" y="8" width="4" height="1" />
    <rect x="2" y="12" width="1" height="1" />
    <rect x="13" y="12" width="1" height="1" />
    <rect x="3" y="13" width="10" height="1" />
  </svg>
);

/** @returns {React.ReactElement} 8-bit radio/comms icon */
export const PixelComms = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} style={{ imageRendering: "pixelated" }}>
    <rect x="7" y="0" width="2" height="3" />
    <rect x="5" y="1" width="1" height="1" />
    <rect x="10" y="1" width="1" height="1" />
    <rect x="3" y="3" width="10" height="1" />
    <rect x="2" y="4" width="12" height="1" />
    <rect x="2" y="5" width="1" height="8" />
    <rect x="13" y="5" width="1" height="8" />
    <rect x="3" y="5" width="10" height="8" fillOpacity="0.15" />
    <rect x="4" y="6" width="3" height="3" />
    <rect x="9" y="7" width="3" height="1" />
    <rect x="9" y="9" width="3" height="1" />
    <rect x="9" y="11" width="3" height="1" />
    <rect x="3" y="13" width="10" height="1" />
  </svg>
);

/** @returns {React.ReactElement} 8-bit controller/products icon */
export const PixelController = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill={color} style={{ imageRendering: "pixelated" }}>
    <rect x="4" y="2" width="8" height="1" />
    <rect x="3" y="3" width="1" height="1" />
    <rect x="12" y="3" width="1" height="1" />
    <rect x="2" y="4" width="1" height="4" />
    <rect x="13" y="4" width="1" height="4" />
    <rect x="3" y="4" width="10" height="4" fillOpacity="0.15" />
    <rect x="5" y="5" width="1" height="3" />
    <rect x="4" y="6" width="3" height="1" />
    <rect x="10" y="5" width="2" height="1" />
    <rect x="11" y="6" width="1" height="1" />
    <rect x="10" y="7" width="2" height="1" />
    <rect x="1" y="8" width="2" height="1" />
    <rect x="13" y="8" width="2" height="1" />
    <rect x="0" y="9" width="2" height="2" />
    <rect x="14" y="9" width="2" height="2" />
    <rect x="2" y="11" width="5" height="1" />
    <rect x="9" y="11" width="5" height="1" />
    <rect x="3" y="9" width="10" height="2" fillOpacity="0.15" />
  </svg>
);
