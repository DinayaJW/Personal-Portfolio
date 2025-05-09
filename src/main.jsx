import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Changed from App.css to index.css for base styles
import './App.css'; // Add App.css after index.css
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);