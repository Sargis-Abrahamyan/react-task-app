import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/app/App';
import { AppProvider } from './context/context';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

