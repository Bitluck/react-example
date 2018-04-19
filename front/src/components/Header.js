import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { range } from 'lodash';
import '../styles/components/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        Header
        <div>
          <NavLink to={`/`}>Home</NavLink>
          {' '}
          <NavLink to={`/login`}>Login</NavLink>
          {' '}
          <NavLink to={`/register`}>Register</NavLink>
          {' '}
          <NavLink to={`/users/1`}>Profile</NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
