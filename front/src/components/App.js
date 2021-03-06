import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import NavigationMenu from './NavigationMenu';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/App.scss';

import { getCurrentUserRequest } from '../actions/userActions';

import { isAuth } from '../middleware/isAuth';

class App extends React.Component {
  constructor(props) {
    super(props);
    if(isAuth()) {
      props.dispatch(getCurrentUserRequest());
    }
  }

  render() {
    return (
      //<div className="app">
      <Grid fluid className={styles.app}>
        <Row>
          <Header />
        </Row>

        { isAuth()
        ? (<Row className={styles.content}>
          <Col sm={2} smOffset={1}>
           <NavigationMenu />
          </Col>
          <Col sm={8}>
            <Main />
          </Col>
        </Row>)
        : (<Row className={styles.content}>
            <Col sm={10} smOffset={1}>
              <Main />
            </Col>
           </Row>)}

        <Row>
          <Footer />
        </Row>
      </Grid>
      //</div>
    );
  }
}

export default withRouter(connect()(App));
