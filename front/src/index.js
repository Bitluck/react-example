import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './components/App';

import './styles/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(sagaMiddleware)
);

const store = configureStore();

sagaMiddleware.run(rootSaga);

render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>, document.getElementById('app')
);
