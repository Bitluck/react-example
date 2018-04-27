import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import NavigationMenu from './NavigationMenu';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/App.scss';

import { isAuth } from '../middleware/isAuth';

class App extends React.Component {
  render() {
    return (
      //<div className="app">
      <Grid fluid className={styles.app}>
        <Row>
          <Header />
        </Row>

        { isAuth()
        ? (<Row className={styles.content}>
          <Col sm={2}>
           <NavigationMenu />
          </Col>
          <Col sm={10}>
            <Main />
          </Col>
        </Row>)
        : (<Row className={styles.content}>
            <Col sm={12}>
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

export default App;
