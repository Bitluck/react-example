import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers';
import App from './components/App';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState
);

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>, document.getElementById('app')
);
