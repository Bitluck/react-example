import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/App.scss';

class App extends React.Component {
  render() {
    return (
      //<div className="app">
      <Grid fluid className={styles.app}>
        <Row>
          <Header />
        </Row>
        <Row className={styles.content}>
          <Col sm={2}>
           {`text`}
          </Col>
          <Col sm={10}>
            <Main />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Grid>
      //</div>
    );
  }
}

export default App;
