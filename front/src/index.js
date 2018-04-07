import React from 'react';
import { render } from 'react-dom';
import rootReducer from './reducers';
import App from './components/App';
import Root from './containers/Root';

import { createStore } from 'redux';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState
);

const store = configureStore();

render(
  <div>
    <Root store={store} />
  </div>, document.getElementById('root')
);
