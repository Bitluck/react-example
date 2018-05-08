import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <Grid className={styles.footer}>
        <Row>
          <Col sm={4}>
            {`(c) ${new Date().getFullYear()} · SocialNet`}
          </Col>
          <Col sm={4}>
            <Link to='/'>
              <img src="/img/avatars/default_small.png" width='30px' height='30px' />
            </Link>
          </Col>
          <Col sm={4}>
            <a href="mailto:bitluck11@gmail.com">Contact the author</a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Footer;
