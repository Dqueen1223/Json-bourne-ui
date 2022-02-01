/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import './ProfilePage.css';
import { useProfile } from './ProfileContext';

const ProfilePage = () => {
  const {
    state: { userProfile }
  } = useProfile();
  const [profileInfo, setProfileInfo] = useState(true);
  const [purchaseInfo, setPurchaseInfo] = useState(false);
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
  const renderPurchase = () => {
    const {
      purchases
    } = userProfile[1];
    return (
      <div className="test">
        test asdjkfaslfjsdaklfjsdak
        fdaslkfjas
        fdsafjk
        fdskal;fks
        fdsakjf
        asdjf
        {purchases}
      </div>
    );
  };
  const changeStatePurchase = () => {
    setProfileInfo(false);
    setPurchaseInfo(true);
  };
  const changeStateProfileInfo = () => {
    setProfileInfo(true);
    setPurchaseInfo(false);
  };
  try {
    return (
      <div className="profile">
        <div className="ui">
          <div className="userInfodiv">
            <button className="test" type="button" onClick={changeStateProfileInfo}> User info</button>
            <button className="test2" type="button" onClick={changeStatePurchase}> Purchase History </button>
            {profileInfo && renderName()}
            {profileInfo && renderShipping()}
            {purchaseInfo && renderPurchase()}
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
