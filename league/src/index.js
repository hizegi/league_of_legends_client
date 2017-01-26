import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import Nav from './Nav';
import './index.css';

ReactDOM.render(
  <div className="container">
    <Nav />
    <App />
    <Test />
  </div>,
  document.getElementById('root')
);
