import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './redux/countReducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const counter = createStore(reducer);
const rootElemet = document.getElementById('root');


ReactDOM.render(
  <Provider store={counter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  , rootElemet
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
