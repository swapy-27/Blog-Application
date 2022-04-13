import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import {Navbar , App} from './components/index';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

