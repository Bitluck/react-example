import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
//import { Route } from 'react-router';

import LoginFormContainer from '../containers/LoginFormContainer';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import LogoutPage from '../components/LogoutPage';
import LoginPage from '../views/LoginPage';

import { isAuth } from '../middleware/isAuth';

const Main = () => (
  <div className="main">
    {/* <div className="content-contaner"> */}
    <Switch>
      <Route exact path='/' component={RegisterFormContainer} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterFormContainer} />
      <Route exact path='/logout' component={LogoutPage} />
      <Route exact path='/users/:id' component={UserProfileContainer} />
      <Route path='*' render={(props) => <div>Note founde</div>} status='404'/>
  </Switch>
    {/* </div> */}
  </div>
);

Main.propType = {
  store: PropTypes.object.isRequired
}



export default Main;
