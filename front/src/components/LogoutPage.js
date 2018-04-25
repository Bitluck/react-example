import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { logoutRequest } from '../actions/authActions';

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(logoutRequest());
  }

  render() {
    return (
      <Redirect to='/' />
    );
  }
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(LogoutPage);
