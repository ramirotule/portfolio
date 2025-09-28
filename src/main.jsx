import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n"; // Importar configuración de i18next
import { initGA } from "./utils/analytics"; // Importar Google Analytics

// Inicializar Google Analytics
if (typeof window !== 'undefined') {
  initGA();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
