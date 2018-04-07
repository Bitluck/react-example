import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import UserProfilePage from '../containers/UserProfilePage';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users/:id" component={UserProfile} />
          <Route render={(props) => <div>Note founde {props}</div>}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propType = {
  store: PropTypes.object.isRequired
}

/*const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Provider>
);

Root.propType = {
  store: PropTypes.object.isRequired
}*/

export default Root;
