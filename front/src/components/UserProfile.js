import React from 'react';

const UserProfile = (props) => {
  const { isFetching, user } = props;

  if(isFetching) {
    return <div>Loading user profile...</div>
  }

  const { full } = user.data;
  if(full) {
    return (
      <div>
      <div>{ `${user.data.login}'s profile` }</div>
      <img src={user.data.avatar} />
      <ul>
        <li>First name: {user.data.firstName}</li>
        <li>Second name: {user.data.lastName}</li>
        <li>Birthdate: {user.data.birthdate}</li>
        <li>Gender: {user.data.gender}</li>
        <li>Country: {user.data.country}</li>
        <li>City: {user.data.city}</li>
      </ul>
    </div>
    );
  }
  return (
    <div>
      <div>{ `${user.data.login}'s profile` }</div>
      <ul>
        <li>First name: {user.data.firstName}</li>
        <li>Second name: {user.data.lastName}</li>
      </ul>
    </div>
  );
}

export default UserProfile;
