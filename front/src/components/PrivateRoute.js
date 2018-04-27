import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, auth, redirectPath, ...rest } = props;

  return (
    <Route {...rest} render={props => 
      auth() ? <Component {...props} />
             : <Redirect to={redirectPath} />
    } />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
  redirectPath: PropTypes.string
}

export default PrivateRoute;
