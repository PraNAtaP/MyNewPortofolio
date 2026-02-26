import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/** @type {React.FC<{ children: React.ReactNode }>} */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("retro-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
    localStorage.setItem("retro-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/** @returns {{ theme: string, toggleTheme: () => void }} */
export const useTheme = () => useContext(ThemeContext);
