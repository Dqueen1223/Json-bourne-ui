import React, { useState } from 'react';
import styles from './ProfilePage.css';

const ProfilePage = () => {
  const shipping = {
    Shipping: '',
    street: 'Street: 123 main',
    city: 'City: Baltimore',
    state: 'State MD',
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
      <div>
        <li>{firstname}</li>
        <li>{lastname}</li>
      </div>
    );
  };
  const renderShipping = () => {
    const {
      Shipping, street, city, state, zip
    } = shipping;
    return (
      <div>
        <ul className={styles.shipping}>{Shipping}</ul>
        <li className={styles.shipping}>{street}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>{zip}</li>
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
    <div className="ProfilePage">
      {displayName ? renderName() : <></>}
      <button type="button" onClick={clickName}>Name</button>
      {displayShipping ? renderShipping() : <></>}
      <button type="button" onClick={clickShipping}>Shipping</button>
    </div>
  );
};
export default ProfilePage;
