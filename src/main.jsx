import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Tailwind + custom global CSS

// Get the root element
const container = document.getElementById('root');

// Create React root
const root = createRoot(container);

// Render App inside StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
