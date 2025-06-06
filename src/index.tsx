import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  /* This provider component is what allows the store to be connected to the rest of the react application */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
