import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import ErrorPage from '@pages/error-page.tsx'

// Inject React
ReactDOM.createRoot(document.getElementById("app-root")!).render(
  <React.StrictMode>
    <ErrorPage />
  </React.StrictMode>,
);
