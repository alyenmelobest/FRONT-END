import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/GlobalStyles";
import PostsPage from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsPage /> <GlobalStyle />
  </React.StrictMode>
);

