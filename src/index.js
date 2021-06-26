import React from 'react';
import './index.css';
import './Styles/common.css';
import './Styles/contact.css';
import './Styles/card.css';
import App from './App';
import reactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';



reactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));