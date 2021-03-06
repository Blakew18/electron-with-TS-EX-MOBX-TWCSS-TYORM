//NPM Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
//Local Imports
// import './assets/main.css';
import App from './App';
import './index.css';
import '../style.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
