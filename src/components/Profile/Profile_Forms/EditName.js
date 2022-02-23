import React from 'react';
import ProfileItem from './ProfileForm';

const renderEditName = (onUpdateUser, isEditing, updateUser, errors) => (
  <div className="userInfo">
    <ul className="headerName">Name</ul>
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="street"
      label="Street"
      onChange={onUpdateUser}
      value={updateUser.firstName}
      error={errors.firstName}
      editing={isEditing}
    />
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="street"
      label="Street"
      onChange={onUpdateUser}
      value={updateUser.lastName}
      error={errors.lastName}
      editing={isEditing}
    />
  </div>
);

export default renderEditName;
