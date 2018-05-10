import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styles from '../styles/components/Post.scss';

const defaultSmallAvatar = '/img/avatars/default_small.png';

const Post = props => {
  const { data } = props;

  return (
    <Grid fluid className={styles.post}>
      <Row className={styles.authorInfo}>
        <Col sm={1} xs={2} className={styles.avatarContainer}>
          <img src={`${data.user.avatar || defaultSmallAvatar}`} alt="userpic" width='50' height='50'/>
        </Col>
        <Col sm={10} xs={19}>
          <Row>
            <Link to={`/users/${data.user.id}`}>{`${data.user.firstName} ${data.user.lastName}`}</Link>
          </Row>
          <Row>
            {`created at ${new Date(data.created_at).toLocaleDateString() } ${new Date(data.created_at).toLocaleTimeString() }`}
          </Row>
        </Col>
      </Row>
      <Row className="content">
        <Col className={styles.text} sm={12}>
          <p>{data.text}</p>
        </Col>
        { data.picture ?
          (<Col className={styles.pictureContainer} sm={12}>
            <img src={data.picture} alt="post picture" className={styles.picture} />
          </Col>)
          : undefined
        }
      </Row>
      <Row>
        <Col sm={2} smOffset={10} className={styles.likeContainer}>
          <div className={styles.like}>▲</div>
          <div className={styles.likeCounter}>{Math.floor(Math.random() * (15)) - 5}</div>
          <div className={styles.unlike}>▼</div>
        </Col>
      </Row>
    </Grid>
  );
}

Post.propTypes = {
  data: PropTypes.object.isRequired
}

export default Post;
