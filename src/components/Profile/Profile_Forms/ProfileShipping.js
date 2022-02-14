import React from 'react';
import ProfileItem from './ProfileForm';

const ProfileShipping = ({
  onUpdateUser, updateUser, isEditing, errors
}) => (
  <div className="userInfo">
    <ul className="headerShipping">Shipping Address</ul>
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="street"
      label="Street"
      onChange={onUpdateUser}
      value={updateUser.street}
      error={errors.street}
      editing={isEditing}
    />
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="street2"
      label="Street2"
      onChange={onUpdateUser}
      value={updateUser.street2}
      error={errors.street2}
      editing={isEditing}
    />
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="city"
      label="City"
      onChange={onUpdateUser}
      value={updateUser.city}
      error={errors.city}
      editing={isEditing}
    />
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="state"
      label="State"
      onChange={onUpdateUser}
      value={updateUser.state}
      error={errors.state}
      editing={isEditing}
    />
    <ProfileItem
      placeholder="e.g. 123 Sesame Street"
      type="text"
      id="zip"
      label="zip"
      onChange={onUpdateUser}
      value={updateUser.zip}
      error={errors.zip}
      editing={isEditing}
    />
  </div>
);

export default ProfileShipping;
