import React from 'react';
import Row from 'react-bootstrap/lib/Row';

import UserListItem from './UserListItem';

//import styles from '../styles/components/PostList.scss';

const UserList = props => {
  const { users }  = props;

  return (
    <div>
      {users && users.length > 0
        ? users.map(user => <Row key={user.id}><UserListItem user={user}/></Row>)
        : 'List is empty' }
    </div>
  )
}

export default UserList;
