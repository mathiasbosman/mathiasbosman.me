import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app.tsx";
import "@/index.css";

// Inject React
ReactDOM.createRoot(document.getElementById("app-root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
