import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import styles from '../styles/components/NotFound.scss';

const NotFound = props => {
  return (
  <Grid fluid>
    <Helmet>
      <title>Not found - Social Network</title>
    </Helmet>
    <Row className={styles.notFoundText}>
      Not Found Page
    </Row>
    <Row className={styles.notFoundHiddenText}>
      Who you gonna call? ;)
    </Row>
    <Row>
      <img src="/img/not_found/404.png" alt="not found" className={styles.notFoundPicture} />
    </Row>
  </Grid>
  );
}

export default NotFound;
