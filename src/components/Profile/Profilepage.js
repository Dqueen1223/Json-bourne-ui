import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const shipping = {
    Shipping: '',
    street: '123 main',
    city: 'Baltimore',
    state: 'MD',
    zip: '23104'
  };
  // handleGoogleLoginSuccess();
  const renderName = () => (
    <div className="userInfo">
      <ul className="headerName">Name</ul>
      <li>
        First Name:
        {' '}
        firstname
      </li>
      <li>
        Last Name:
        {' '}
        lastName
      </li>
    </div>
  );

  const renderShipping = () => {
    const {
      street, city, state, zip
    } = shipping;
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
};
export default ProfilePage;
