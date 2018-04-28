import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const UserProfileItem = (props) => {
  const { name, value } = props;

  return (
    <Row>
      <Col sm={4}>
        <p>{name}</p>
      </Col>
      <Col sm={8}>
        <p>{value}</p>
      </Col>
    </Row>
  );
}

export default UserProfileItem;
