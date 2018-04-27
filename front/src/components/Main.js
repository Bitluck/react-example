import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import LoginFormContainer from '../containers/LoginFormContainer';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import LogoutPage from '../components/LogoutPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import PostPage from '../views/PostPage';

import { isAuth, isUnauth } from '../middleware/isAuth';

const Main = () => (
  <div className="main">
    {/* <div className="content-contaner"> */}
    <Switch>
      <PrivateRoute exact path='/' auth={isAuth} component={PostPage} redirectPath={'/login'}/>
      <PrivateRoute exact path='/login' auth={isUnauth} component={LoginPage} redirectPath={'/'}/>
      <PrivateRoute exact path='/register' auth={isUnauth} component={RegisterPage} redirectPath={'/'}/>
      <PrivateRoute exact path='/post' auth={isAuth} component={PostPage} redirectPath={'/'}/>
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
