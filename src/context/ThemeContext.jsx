import React, { createContext, useContext, useState, useEffect } from "react";
import { colorPalettes, applyTheme } from "../hooks/useTheme";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("yellow");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    if (savedTheme && colorPalettes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(colorPalettes[savedTheme]);
    }
  }, []);

  const changeTheme = (themeKey) => {
    if (colorPalettes[themeKey]) {
      setCurrentTheme(themeKey);
      applyTheme(colorPalettes[themeKey]);
      localStorage.setItem("portfolioTheme", themeKey);
    }
  };

  const value = {
    currentTheme,
    changeTheme,
    colorPalettes,
    getCurrentPalette: () => colorPalettes[currentTheme],
    currentLogo: colorPalettes[currentTheme]?.logo,
    currentAvatar: colorPalettes[currentTheme]?.avatar,
    currentHomeMain: colorPalettes[currentTheme]?.homeMain,
    getCurrentPdfFile: () => {
      if (currentTheme === "pink") return "/CV_Ramiro_PINK.pdf";
      if (currentTheme === "green") return "/CV_Ramiro_GREEN.pdf";
      return "/CV_Ramiro.pdf";
    },
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
