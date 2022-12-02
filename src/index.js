import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";


ReactDOM.render(
  <IntlProvider locale="es-ES" messages= {localeEsMessages}>
          <Bandas/>
  </IntlProvider>, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
