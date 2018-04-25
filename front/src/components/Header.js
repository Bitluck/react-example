import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { range } from 'lodash';
import styles from '../styles/components/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        Header
        <div>
          <NavLink to={`/`}>Home</NavLink>
          {' '}
          <NavLink to={`/login`}>Login</NavLink>
          {' '}
          <NavLink to={`/register`}>Register</NavLink>
          {' '}
          <NavLink to={`/users/1`}>Profile</NavLink>
          {' '}
          <NavLink to={`/logout`}>Logout</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
