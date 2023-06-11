import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import StackVisualizer from './components/StackVisualizer/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StackVisualizer />
  </React.StrictMode>,
);
