import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { isAuth } from '../middleware/isAuth';

import PostFormContainer from '../containers/PostFormContainer';

import styles from '../styles/views/PostPage.scss';

const PostPage = props => {
  return (
    <Grid fluid>
      <Row>
        <Col sm={6}>
          {'def'}
        </Col>
        <Col sm={6}>
          <PostFormContainer className={styles.loginForm} />
        </Col>
      </Row>
    </Grid>
  );
}

export default PostPage;
