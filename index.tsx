import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS is now loaded via <link> in index.html to avoid build-time resolution errors
// import './index.css'; 
import Application from './Application';

// Expert Lounge AI Entry Point
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
