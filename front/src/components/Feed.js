import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import FeedPostList from '../containers/FeedPostList';
import { getFeedPostsRequest } from '../actions/postActions';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getFeedPosts, offset, limit } = this.props;

    getFeedPosts(offset, limit);
  }

  render() {
    const { posts } = this.props;

    const feedPosts = posts.map(post => ( { ...post, user: { id: post.User.id, ...post.User.Profile } } ));

    return (
      <Grid fluid>
        <Row className="dynamic render posts _map">
          <Col>
            <FeedPostList posts={feedPosts}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Feed.propTypes = {
  getFeedPosts: PropTypes.func.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired
}

//export default Feed;

const mapStateToProps = state => {
  return {
    offset: state.post.offset,
    limit: state.post.limit,
    posts: state.post.feedPosts
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getFeedPosts: bindActionCreators(getFeedPostsRequest, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
