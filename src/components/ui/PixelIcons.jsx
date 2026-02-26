import React from "react";

/**
 * @param {{ size?: number, color?: string }} props
 * @returns {React.ReactElement} 8-bit pixel-art GitHub octocat icon
 */
export const PixelGitHub = ({ size = 24, color = "currentColor" }) => {
  const p = size / 16;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="5" y="0" width="6" height="1" />
      <rect x="3" y="1" width="2" height="1" />
      <rect x="11" y="1" width="2" height="1" />
      <rect x="2" y="2" width="1" height="1" />
      <rect x="13" y="2" width="1" height="1" />
      <rect x="1" y="3" width="1" height="2" />
      <rect x="14" y="3" width="1" height="2" />
      <rect x="2" y="3" width="12" height="1" />
      <rect x="3" y="4" width="10" height="1" />
      <rect x="5" y="4" width="2" height="2" />
      <rect x="9" y="4" width="2" height="2" />
      <rect x="3" y="5" width="10" height="1" />
      <rect x="2" y="6" width="12" height="1" />
      <rect x="1" y="5" width="1" height="2" />
      <rect x="14" y="5" width="1" height="2" />
      <rect x="2" y="7" width="12" height="1" />
      <rect x="3" y="8" width="10" height="1" />
      <rect x="4" y="9" width="8" height="1" />
      <rect x="3" y="10" width="3" height="1" />
      <rect x="10" y="10" width="3" height="1" />
      <rect x="2" y="11" width="2" height="1" />
      <rect x="12" y="11" width="2" height="1" />
      <rect x="2" y="12" width="2" height="1" />
      <rect x="12" y="12" width="2" height="1" />
      <rect x="3" y="13" width="3" height="1" />
      <rect x="10" y="13" width="3" height="1" />
      <rect x="4" y="14" width="3" height="1" />
      <rect x="9" y="14" width="3" height="1" />
    </svg>
  );
};

/**
 * @param {{ size?: number, color?: string }} props
 * @returns {React.ReactElement} 8-bit pixel-art LinkedIn logo icon
 */
export const PixelLinkedIn = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="1" y="1" width="14" height="14" fillOpacity="0.15" />
      <rect x="1" y="0" width="14" height="1" />
      <rect x="1" y="15" width="14" height="1" />
      <rect x="0" y="1" width="1" height="14" />
      <rect x="15" y="1" width="1" height="14" />
      <rect x="3" y="3" width="2" height="2" />
      <rect x="3" y="6" width="2" height="7" />
      <rect x="7" y="6" width="2" height="1" />
      <rect x="7" y="8" width="2" height="5" />
      <rect x="9" y="7" width="2" height="1" />
      <rect x="11" y="6" width="1" height="1" />
      <rect x="11" y="7" width="2" height="6" />
    </svg>
  );
};

/**
 * @param {{ size?: number, color?: string }} props
 * @returns {React.ReactElement} 8-bit pixel-art Instagram camera icon
 */
export const PixelInstagram = ({ size = 24, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated" }}
    >
      <rect x="2" y="0" width="12" height="1" />
      <rect x="2" y="15" width="12" height="1" />
      <rect x="0" y="2" width="1" height="12" />
      <rect x="15" y="2" width="1" height="12" />
      <rect x="1" y="1" width="1" height="1" />
      <rect x="14" y="1" width="1" height="1" />
      <rect x="1" y="14" width="1" height="1" />
      <rect x="14" y="14" width="1" height="1" />
      <rect x="11" y="2" width="3" height="1" />
      <rect x="11" y="3" width="1" height="1" />
      <rect x="13" y="3" width="1" height="1" />
      <rect x="11" y="4" width="3" height="1" />
      <rect x="6" y="4" width="4" height="1" />
      <rect x="5" y="5" width="1" height="1" />
      <rect x="10" y="5" width="1" height="1" />
      <rect x="4" y="6" width="1" height="4" />
      <rect x="11" y="6" width="1" height="4" />
      <rect x="5" y="10" width="1" height="1" />
      <rect x="10" y="10" width="1" height="1" />
      <rect x="6" y="11" width="4" height="1" />
    </svg>
  );
};
