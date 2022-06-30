import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.routes';
import { BrowserRouter } from 'react-router-dom';
import STORE from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={STORE}>
    <BrowserRouter outer>
      <App />
    </BrowserRouter>
  </Provider>
); 

/* 

npm install react-redux
npm i react-router-dom
npm i redux-thunk
npm install --save redux-devtools-extension
npm install @reduxjs/toolkit

npm i axios


:: STYLES
npm install --save styled-components
npm install sass
npm i @mui/styles

:: ICONS
$ npm install @mui/icons-material


::LIBRARIES
npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/x-data-grid

::CHAT ENGINE
npm install react-chat-engine --force

::ANIMATIONS
  565  npm i react-animated-css --save --force
  563  npm install animate.css --force
*/