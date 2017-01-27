import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import Nav from './Nav';
import './Work.less';
require('./Work.less');
// require('./Work.less')
import './App.css'
// import css from './style.less'

require('./style.less')

ReactDOM.render(
  <div className="container">
    <Nav />
    <App />
    <Test />
  </div>,
  document.getElementById('root')
);
