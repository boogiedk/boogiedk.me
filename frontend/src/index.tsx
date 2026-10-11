import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { YANDEX_METRIKA_ID } from './config/analytics';
import { initMetrika } from './lib/metrika';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (YANDEX_METRIKA_ID !== null) {
  initMetrika(YANDEX_METRIKA_ID);
}
