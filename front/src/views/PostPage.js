import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Helmet } from 'react-helmet';

import { isAuth } from '../middleware/isAuth';

import PostFormContainer from '../containers/PostFormContainer';

import styles from '../styles/views/PostPage.scss';

const PostPage = props => {
  return (
    <Grid fluid>
      <Helmet>
        <title>Create new post - Social Network</title>
      </Helmet>
      <Row>
        <Col sm={8} smOffset={1} className={styles.title}>
          <strong>{'New post'}</strong>
        </Col>
      </Row>
      <Row>
        <Col sm={8} smOffset={1}>
          <PostFormContainer className={styles.loginForm} />
        </Col>
      </Row>
    </Grid>
  );
}

export default PostPage;
