import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
import UserProfilePage from '../containers/UserProfilePage';

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/users/:id" component={UserProfile} />
      <Route render={(props) => <div>Note founde {props}</div>}/>
    </Switch>
  </div>
);

Main.propType = {
  store: PropTypes.object.isRequired
}

export default Main;
