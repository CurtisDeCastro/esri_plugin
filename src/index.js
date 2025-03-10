import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MapViewComponent from './Map';
import reportWebVitals from './reportWebVitals';
import MapViewComponent_Ram from './ram_test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MapViewComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
