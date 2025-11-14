import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, GlobalStyles } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline />
    <GlobalStyles
      styles={{
        'html, body, #root': {
          margin: 0,
          padding: 0,
          height: '100%',
          width: '100%',
          backgroundColor: '#f5f5f5', // or your desired background
        },
      }}
    />
    <App />
  </>
);
