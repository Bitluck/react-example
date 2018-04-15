import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import LoginFormContainer from '../containers/LoginFormContainer';
import UserProfile from '../components/UserProfile';
import UserProfileContainer from '../containers/UserProfileContainer';
import UserProfilePage from '../containers/UserProfilePage';

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/login' component={LoginFormContainer} />
      <Route exact path='/users/:id' component={UserProfileContainer} />
      <Route path='*' render={(props) => <div>Note founde</div>} status='404'/>
    </Switch>
  </div>
);

Main.propType = {
  store: PropTypes.object.isRequired
}

export default Main;
