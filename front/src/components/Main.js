import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import LoginFormContainer from '../containers/LoginFormContainer';
import RegisterFormContainer from '../containers/RegisterFormContainer';
import UserProfileContainer from '../containers/UserProfileContainer';
import LogoutPage from '../components/LogoutPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import PostPage from '../views/PostPage';
import FriendsPage from '../views/FriendsPage';
import Feed from './Feed';
import NotFound from './NotFound';

import { isAuth, isUnauth } from '../middleware/isAuth';

const Main = () => (
  <div className="main">
    {/* <div className="content-contaner"> */}
    <Switch>
      <PrivateRoute exact path='/' auth={isAuth} component={Feed} redirectPath={'/login'}/>
      <PrivateRoute exact path='/login' auth={isUnauth} component={LoginPage} redirectPath={'/'}/>
      <PrivateRoute exact path='/register' auth={isUnauth} component={RegisterPage} redirectPath={'/'}/>
      <PrivateRoute exact path='/post' auth={isAuth} component={PostPage} redirectPath={'/'}/>
      <PrivateRoute exact path='/friends' auth={isAuth} component={FriendsPage} redirectPath={'/'}/>
      <Route exact path='/logout' component={LogoutPage} />
      <Route exact path='/users/:id' render={
        props => { const id = props.match.params.id;
                   return <UserProfileContainer props={props} key={id} id={id} />}} />
      <Route path='*' render={props => <NotFound />} status='404'/>
  </Switch>
    {/* </div> */}
  </div>
);

Main.propType = {
  store: PropTypes.object.isRequired
}

export default Main;
