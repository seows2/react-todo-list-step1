import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { Provider } from 'mobx-react';
import * as store from './stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
