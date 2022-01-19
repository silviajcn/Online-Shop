import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import Container from './container/Container';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Container />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);