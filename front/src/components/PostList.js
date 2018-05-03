import React from 'react';
import Row from 'react-bootstrap/lib/Row';

import Post from './Post';

import styles from '../styles/components/PostList.scss';

const PostList = props => {
  const { posts, isMore, getMorePosts, user, offset, limit }  = props;

  console.log({ user });

  return (
    <div>
      {posts.map(post => <Row><Post data={post}/></Row>)}
      {(posts.length > 0 && isMore) 
        ? <Row className={styles.loadMore}>
            <button onClick={() => getMorePosts(offset+limit, limit, user.data ? user.data.id : 0)}>Load moar</button>
          </Row>
        : undefined }
    </div>
  )
}

export default PostList;