import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { MorphReplace } from 'react-svg-morph';

import { logoutRequest } from '../actions/authActions';
import { isAuth } from '../middleware/isAuth';

import Logo from './Logo';
import LogoOver from './LogoOver';

import styles from '../styles/components/Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { over: false };
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }

  componentDidMount() {
    //KUTE.fromTo('asd', { translate: 0, opacity: 1 }, { translate: 150, opacity: 0 }, { duration: 500 }).start();
  }

  handleOnMouseOver() {
    this.setState({ over: true });
  }

  handleOnMouseOut() {
    this.setState({ over: false });
  }

  render() {
    return (
      <Grid fluid className={styles.header}>
        <Row>
          <Col sm={6} className={styles.log}>
            <Link to='/'>
              <MorphReplace onMouseOver={this.handleOnMouseOver} onMouseLeave={this.handleOnMouseOut} width={50} height={50} duration={1000} rotation='none'>
                {this.state.over ? <Logo key={'a'} /> : <LogoOver key={'b'} />}
              </MorphReplace>
              <img src="/img/logo/logo.png" alt="logo" className={styles.logoImg} />
            </Link>
          </Col>
          <Col sm={6} className={styles.logButton}>
            { isAuth()
              ? (
              <Link to='/logout'>
                <button>Logout</button>
              </Link>
              )
              : (<div></div>)
            }
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(Header);
