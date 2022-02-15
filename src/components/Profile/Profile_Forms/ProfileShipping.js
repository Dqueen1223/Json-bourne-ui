import React from 'react';
import ProfileItem from './ProfileItem';

const ProfileShipping = ({
  onChange, data, isEditing, errors
}) => {
  let error = errors;
  if (error === undefined) {
    error = {};
  }
  return (
    <div className="userInfo">
      <ul className="headerShipping">
        Shipping Address
        <ProfileItem
          placeholder="e.g. Sam"
          type="text"
          id="street"
          label="Street"
          onChange={onChange}
          value={data.street}
          error={error.street}
          editing={isEditing}
        />
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="street2"
          label="Street2"
          onChange={onChange}
          value={data.street2}
          error={error.street2}
          editing={isEditing}
        />
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="city"
          label="City"
          onChange={onChange}
          value={data.city}
          error={error.city}
          editing={isEditing}
        />
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="state"
          label="State"
          onChange={onChange}
          value={data.state}
          error={error.state}
          editing={isEditing}
        />
        <ProfileItem
          placeholder="e.g. 123 Sesame Street"
          type="text"
          id="zip"
          label="zip"
          onChange={onChange}
          value={data.zip}
          error={error.zip}
          editing={isEditing}
        />
      </ul>
    </div>
  );
};

export default ProfileShipping;
