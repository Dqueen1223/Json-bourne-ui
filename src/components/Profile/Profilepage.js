import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const shipping = {
    Shipping: '',
    street: '123 main',
    city: 'Baltimore',
    state: 'MD',
    zip: '23104'
  };
  const name = {
    firstname: 'JSON',
    lastname: 'Bourne'
  };
  const [displayName, setDisplayName] = useState(false);
  const [displayShipping, setDisplayShipping] = useState(false);

  const renderName = () => {
    const { firstname, lastname } = name;
    return (
      <div className="userInfo">
        {// eslint-disable-next-line react/jsx-indent
          <ul className="headerName">
          Name
          </ul>
        }
        <li>
          First Name:
          {' '}
          {firstname}
        </li>
        <li>
          Last Name:
          {' '}
          {lastname}
        </li>
      </div>
    );
  };
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
  const clickShipping = () => {
    setDisplayName(false);
    setDisplayShipping(true);
  };
  const clickName = () => {
    setDisplayShipping(false);
    setDisplayName(true);
  };
  return (
    <div className="profile">
      <div className="ui">
        <button className="tabs" type="button" onClick={clickName}>
          Name
        </button>
        <button className="tabs" type="button" onClick={clickShipping}>
          Shipping Address
        </button>
        <div className="userInfodiv">
          {displayName ? renderName() : <></>}
          {displayShipping ? renderShipping() : <></>}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
