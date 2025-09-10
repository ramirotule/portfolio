import { useState, useEffect } from 'react';

// Import logos
import logoPurple from '../assets/logo-purple.png';
import logoGreen from '../assets/logo-green.png';
import logoBlue from '../assets/logo-blue.png';
import logoOrange from '../assets/logo-orange.png';
import logoPink from '../assets/logo-pink.png';
import logoCyan from '../assets/logo-cyan.png';
import logoYellow from '../assets/logo-yellow.png'; 
import logoRed from '../assets/logo-red.png'; 

// Import avatars
import avatarPurple from '../assets/avatar-purple.png';
import avatarGreen from '../assets/avatar-green.png';
import avatarBlue from '../assets/avatar-blue.png';
import avatarOrange from '../assets/avatar-orange.png';
import avatarPink from '../assets/avatar-pink.png';
import avatarCyan from '../assets/avatar-cyan.png'; 
import avatarYellow from '../assets/avatar-yellow.png';
import avatarRed from '../assets/avatar-red.png';    

// Import home main images
import homeMainPurple from '../assets/home-main-purple.png';
import homeMainGreen from '../assets/home-main-green.png';
import homeMainBlue from '../assets/home-main-blue.png';
import homeMainOrange from '../assets/home-main-orange.png';
import homeMainPink from '../assets/home-main-pink.png';
import homeMainCyan from '../assets/home-main-cyan.png';
import homeMainYellow from '../assets/home-main-yellow.png';
import homeMainRed from '../assets/home-main-red.png';


// Paletas de colores disponibles
const colorPalettes = {
  purple: {
    name: "Purple",
    primary: "#c770f0",
    secondary: "#be50f4",
    accent: "#cd5ff8",
    gradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(12, 10, 22, 0.863))",
    logo: logoPurple,
    avatar: avatarPurple,
    homeMain: homeMainPurple
  },
  green: {
    name: "Green",
    primary: "#4ade80",
    secondary: "#22c55e",
    accent: "#16a34a",
    gradient: "linear-gradient(to bottom left, rgba(16, 17, 16, 0.582), rgba(8, 24, 12, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(16, 17, 16, 0.678), rgba(10, 22, 12, 0.863))",
    logo: logoGreen,
    avatar: avatarGreen,
    homeMain: homeMainGreen
  },
  blue: {
    name: "Blue",
    primary: "#3b82f6",
    secondary: "#2563eb",
    accent: "#1d4ed8",
    gradient: "linear-gradient(to bottom left, rgba(16, 16, 17, 0.582), rgba(8, 12, 24, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(16, 16, 17, 0.678), rgba(10, 12, 22, 0.863))",
    logo: logoBlue,
    avatar: avatarBlue,
    homeMain: homeMainBlue
  },
  orange: {
    name: "Orange",
    primary: "#f97316",
    secondary: "#ea580c",
    accent: "#dc2626",
    gradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(24, 12, 8, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(22, 12, 10, 0.863))",
    logo: logoOrange,
    avatar: avatarOrange,
    homeMain: homeMainOrange    

  },
  pink: {
    name: "Pink",
    primary: "#ec4899",
    secondary: "#db2777",
    accent: "#be185d",
    gradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(24, 8, 16, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(22, 10, 16, 0.863))",
    logo: logoPink,
    avatar: avatarPink,
    homeMain: homeMainPink

  },
  yellow: {
    name: "Yellow",
    primary: "#eab308",
    secondary: "#ca8a04",
    accent: "#a16207",
    gradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(24, 20, 8, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(22, 18, 10, 0.863))",
    logo: logoYellow,
    avatar: avatarYellow,
    homeMain: homeMainYellow
  },
  red: {
    name: "Red",
    primary: "#ef4444",
    secondary: "#dc2626",
    accent: "#b91c1c",
    gradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(24, 8, 8, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(22, 10, 10, 0.863))",
    logo: logoRed,
    avatar: avatarRed,
    homeMain: homeMainRed
  },
  cyan: {
    name: "Cyan",
    primary: "#06b6d4",
    secondary: "#0891b2",
    accent: "#0e7490",
    gradient: "linear-gradient(to bottom left, rgba(16, 16, 17, 0.582), rgba(8, 16, 24, 0.904))",
    imageGradient: "linear-gradient(to bottom left, rgba(16, 16, 17, 0.678), rgba(10, 16, 22, 0.863))",
    logo: logoCyan,
    avatar: avatarCyan,
    homeMain: homeMainCyan
  }
};

const applyTheme = (palette) => {
  const root = document.documentElement;
  root.style.setProperty('--imp-text-color', palette.primary);
  root.style.setProperty('--section-background-color', palette.gradient);
  root.style.setProperty('--image-gradient', palette.imageGradient);
  root.style.setProperty('--secondary-color', palette.secondary);
  root.style.setProperty('--accent-color', palette.accent);
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('yellow');

  useEffect(() => {
    // Cargar tema guardado del localStorage
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme && colorPalettes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(colorPalettes[savedTheme]);
    }
  }, []);

  const changeTheme = (themeKey) => {
    if (colorPalettes[themeKey]) {
      setCurrentTheme(themeKey);
      const palette = colorPalettes[themeKey];
      applyTheme(palette);
      localStorage.setItem('portfolioTheme', themeKey);
    }
  };

  // Devuelve el nombre del PDF según el theme actual
  const getCurrentPdfFile = () => {
    console.log("El valor del currentTheme es:", currentTheme); 
    if (currentTheme === 'pink') return '/CV_Ramiro_PINK.pdf';
    if (currentTheme === 'green') return '/CV_Ramiro_GREEN.pdf';
    if (currentTheme === 'yellow') return '/CV_Ramiro_YELLOW.pdf';
    if (currentTheme === 'purple') return '/CV_Ramiro_PURPLE.pdf';
    if (currentTheme === 'blue') return '/CV_Ramiro_BLUE.pdf';
    if (currentTheme === 'orange') return '/CV_Ramiro_ORANGE.pdf';
    if (currentTheme === 'red') return '/CV_Ramiro_RED.pdf';
    if (currentTheme === 'cyan') return '/CV_Ramiro_CYAN.pdf';  

    return '/CV_Ramiro.pdf';
  };

  return {
    currentTheme,
    changeTheme,
    colorPalettes,
    getCurrentPalette: () => colorPalettes[currentTheme],
    currentLogo: colorPalettes[currentTheme]?.logo,
    currentAvatar: colorPalettes[currentTheme]?.avatar,
    currentHomeMain: colorPalettes[currentTheme]?.homeMain,
    getCurrentPdfFile
  };
};

export { colorPalettes, applyTheme };
