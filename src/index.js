import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapData from './map-data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App mapData={mapData} />,
  document.getElementById('root')
);

registerServiceWorker();
