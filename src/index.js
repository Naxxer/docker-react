import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the CSS file
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // For performance measuring

// Find the root element in your HTML to insert the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
