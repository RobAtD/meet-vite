import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from "atatus-spa";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";

atatus.config("50444180d3514fd3abfe5494f3b6cda7").install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
serviceWorkerRegistration.register();
