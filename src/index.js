import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mapData from './map-data';
import registerServiceWorker from './registerServiceWorker';

let data = mapData;

// Stress testing
// data = [].concat(...[...Array(1000)].map(_ => mapData)).map(_ => ({
//   ..._,
//   position: [Math.random() * 769 | 0, Math.random() * 559 | 0]
// }));

ReactDOM.render(
  <App mapData={data} />,
  document.getElementById('root')
);

registerServiceWorker();
