import React from 'react';
import ProfileItem from './ProfileItem';

const ProfileName = ({
  onChange, isEditing, data, errors
}) => {
  let error = errors;
  if (error === undefined) {
    error = {};
  }
  return (
    <div className="userInfo">
      <ul className="headerName">
        Name
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="firstName"
          label="First Name"
          onChange={onChange}
          value={data.firstName}
          error={error.firstName}
          editing={isEditing}
        />
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="lastName"
          label="Last Name"
          onChange={onChange}
          value={data.lastName}
          error={error.lastName}
          editing={isEditing}
        />
      </ul>
    </div>

  );
};
export default ProfileName;
