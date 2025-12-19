import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/app.tsx';
import '@/index.css';

// Inject React
const rootElement = document.getElementById('app-root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Make sure there is an element with id="app-root" in your HTML.');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
