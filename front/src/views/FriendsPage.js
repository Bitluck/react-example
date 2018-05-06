import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import UserList from '../components/UserList';

import { getFriendsRequest, changeSelectedFriendsTab } from '../actions/friendActions';

//import styles from '../styles/views/FriendsPage.scss';

const styles = {
  tabs: {
    width: '100%',
    display: 'inline-block',
    marginRight: '30px',
    verticalAlign: 'top'
  },
  links: {
    margin: '0',
    padding: '0',
    width: '400px',
    border: '1px solid #ccc',
    borderBottom: '1px solid #868686',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    height: '35px',
    position: 'relative',
    top: '5px'
  },
  tabLink: {
    color: '#333',
    padding: '0 15px',
    cursor: 'pointer',
    border: '1px solid transparent',
    display: 'inline-block',
    position: 'relative',
    height: '40px',
    lineHeight: '41px',
    top: '-6px',
    left: '2px'
  },
  activeLinkStyle: {
    color: '#000',
    border: '1px solid #868686',
    borderBottom: '1px solid white',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: 'white',
    outline: 'none'
  },
  visibleTabStyle: {
    display: 'inline-block',
    width: '100%',
    verticalAlign: 'middle'
  },
  content: {
    padding: '15px',
    //border: '1px solid #d7d7d7',
    borderTop: '1px solid transparent',
    //lineHeight: '50px'
  }
};

class FriendsPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { currentUserId } = this.props;
    //if(currentUserId) {
      this.props.dispatch(getFriendsRequest(currentUserId));
    //}
  }

  render() {
    const { friends, searchResult, selectedTab, currentUserId }  = this.props;
    //const friends = [{ id: 1, avatar: null, firstName: 'A', lastName: 'Z' }];

    const friendsData = friends.map(user => ({ id: user.id, avatar: user.avatar, ...user.Profile }));

    return (
      <Col sm={12}>
        <Tabs
          name='friendsTabs'
          renderActiveTabContentOnly={true}
          handleSelect={(tab, namespace) => this.props.dispatch(changeSelectedFriendsTab(tab, namespace, currentUserId))}
          selectedTab={selectedTab}

          activeLinkStyle={styles.activeLinkStyle}
          visibleTabStyle={styles.visibleTabStyle}
          style={styles.tabs} >

          <div style={styles.links}>
            <TabLink to='friendsTab' style={styles.tabLink}>Friends</TabLink>
            <TabLink to='requestInTab' style={styles.tabLink}>In requests</TabLink>
            <TabLink to='requestOutTab' style={styles.tabLink}>Out requests</TabLink>
            <TabLink to='searchTab' style={styles.tabLink}>Search</TabLink>
          </div>

          <div style={styles.content}>
            <TabContent for='friendsTab'>
              <UserList users={friendsData} />
            </TabContent>
            <TabContent for='requestInTab'>
              <UserList users={friendsData} />
            </TabContent>
            <TabContent for='requestOutTab'>
              <UserList users={friendsData} />
            </TabContent>
            <TabContent for='searchTab'>
              <p>Search ...coming soon</p>
              <UserList users={searchResult} />
            </TabContent>
          </div>
        </Tabs>
      </Col>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friend.friendsData,
    searchResult: state.friend.searchResult,
    currentUserId: state.user.currentUser && state.user.currentUser.id,
    selectedTab: state.friend.friendsTabs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedTab: bindActionCreators(changeSelectedFriendsTab, dispatch),
    getFriendsRequest
  }
}

export default connect(mapStateToProps)(FriendsPage);
