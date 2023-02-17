import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StartButton from './start_button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="center_text">
      <StartButton />
    </div>
    
  </React.StrictMode>
);
