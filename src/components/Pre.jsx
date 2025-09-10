
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useTheme } from "../hooks/useTheme";

function Pre(props) {
  const { getCurrentPalette } = useTheme();
  const color = getCurrentPalette().primary;
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    if (!props.load) return;
    setProgress(10);
    const steps = [20, 35, 55, 70, 85, 100];
    let i = 0;
    const interval = setInterval(() => {
      setProgress(steps[i]);
      i++;
      if (i >= steps.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, [props.load]);
  if (!props.load) return null;
  return (
    <div id="preloader" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 999999,
      background: "rgba(10,4,22,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ width: 240 }}>
        <ProgressBar animated now={progress} style={{ height: 18, background: '#222' }} variant="custom" />
        <div style={{ color, textAlign: 'center', marginTop: 12, fontWeight: 600, letterSpacing: 1 }}>{progress}%</div>
      </div>
      <style>{`
        .progress-bar.bg-custom {
          background-color: ${color} !important;
        }
      `}</style>
    </div>
  );
}

export default Pre;
