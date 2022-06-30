import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.routes";
import { BrowserRouter } from 'react-router-dom';
import STORE from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={STORE}>
    <BrowserRouter outer>
      <App />
    </BrowserRouter>
  </Provider>
);

/* 
=====================
import { DarkModeContextProvider } from "./context/darkModeReducer";

  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>

*/


/* 
npm install react-redux
npm i react-router-dom
npm i redux-thunk
npm install @reduxjs/toolkit
npm i axios

npm install @mui/material @emotion/react @emotion/styled

495  npm install --save redux-devtools-extension --force
497  npm install react-redux --force

npm i react-circular-progressbar --force
npm install recharts --force
$ npm i @mui/x-data-grid --force

588  npm i @coreui/icons-react --force
586  npm i @coreui/react --force
$ npm i @coreui/icons --force
$ npm install react-bootstrap bootstrap --force
595  npm install @coreui/coreui --force

  
:: STYLES
npm install --save styled-components
npm install sass
npm i @mui/styles

::
CustomerSupport
660  npm install react-chat-engine --force

*/
