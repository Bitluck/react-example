import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logoutRequest } from '../actions/authActions';

class LogoutPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(logoutRequest());
  }

  render() {
    localStorage.removeItem('loggedIn');
    return <Redirect to='/' />;
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(LogoutPage);
