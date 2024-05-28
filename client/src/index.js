import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {MyProvider}  from './localStorage/authenticateToken';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
