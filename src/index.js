import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/GlobalStyles";
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes /> <GlobalStyle />
  </React.StrictMode>
);

