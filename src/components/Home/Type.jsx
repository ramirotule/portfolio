
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../hooks/useTheme";

function Type() {
  const { getCurrentPalette } = useTheme();
  const primaryColor = getCurrentPalette().primary;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let style = document.getElementById('typewriter-theme-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'typewriter-theme-style';
        document.head.appendChild(style);
      }
      style.innerHTML = `
        .typewriter-theme-wrapper { font-size: 2.5em; color: var(--imp-text-color, #c770f0) !important; }
        .Typewriter__cursor, .typewriter-theme-wrapper .Typewriter__cursor {
          color: var(--imp-text-color, #c770f0) !important;
        }
      `;
    }
  }, [primaryColor]);
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Freelancer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "typewriter-theme-wrapper",
      }}
    />
  );
}

export default Type;
