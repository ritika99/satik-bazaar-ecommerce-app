import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import setupMockServer from "./api/mock.server";

import { DataProvider } from "./context/data-context";
import {BrowserRouter as Router} from "react-router-dom";
import { AuthProvider } from "./context/auth-context";

import "./components/navigation/navMenu/nav-menu.css";
import "./styles.css";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <Router>
    <DataProvider>
      <App />
    </DataProvider>
  </Router>
  </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
