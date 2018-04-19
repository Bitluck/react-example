import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginFormContainer from '../containers/LoginFormContainer';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import UserProfileContainer from '../containers/UserProfileContainer';

const Main = () => (
  <div className="main">
    <Switch>
      <Route exact path='/' component={LoginFormContainer} />
      <Route exact path='/login' component={LoginFormContainer} />
      <Route exact path='/register' component={RegisterFormContainer} />
      <Route exact path='/users/:id' component={UserProfileContainer} />
      <Route path='*' render={(props) => <div>Note founde</div>} status='404'/>
    </Switch>
  </div>
);

Main.propType = {
  store: PropTypes.object.isRequired
}

export default Main;
