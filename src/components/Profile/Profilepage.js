/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ProfilePage.css';
import { useProfile } from './ProfileContext';

const ProfilePage = () => {
  const {
    state: { userProfile }
  } = useProfile();

  const renderName = () => {
    const { firstName, lastName } = userProfile[0];
    return (
      <div className="userInfo">
        <ul className="headerName">Name</ul>
        <li>
          First Name:
          {' '}
          {firstName}
        </li>
        <li>
          Last Name:
          {' '}
          {lastName}
        </li>
      </div>
    );
  };

  const renderShipping = () => {
    const {
      street, city, state, zip
    } = userProfile[1];
    return (
      <div className="userInfo">
        <ul className="headerShipping">Shipping Address</ul>
        <li>
          Street:
          {' '}
          {street}
        </li>
        <li>
          City:
          {' '}
          {city}
        </li>
        <li>
          State:
          {' '}
          {state}
        </li>
        <li>
          Zip:
          {' '}
          {zip}
        </li>
      </div>
    );
  };
  try {
    return (
      <div className="profile">
        <div className="ui">
          <div className="userInfodiv">
            {renderName()}
            {renderShipping()}
          </div>
        </div>
      </div>
    );
  } catch {
    return (
      <div>
        <p>You must be logged in to view the profile page</p>
      </div>
    );
  }
};
export default ProfilePage;
