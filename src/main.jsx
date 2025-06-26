import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importing CSS styles
import App from './App.jsx'; // Importing the main App component
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* No BrowserRouter here, as it might be in App.jsx already */}
  </StrictMode>
);
