import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './core/theme/tokens.css';
import { logger } from './core/logging/logger';

logger.info('frontend:init');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
