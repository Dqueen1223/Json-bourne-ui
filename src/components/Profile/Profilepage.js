/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { useProfile } from './ProfileContext';
import fetchPurchases from './ProfilePageService';
import ProfilePurchase from './ProfilePurchase';
import FormItem from '../create-promo/forms/FormItem';
import loginUser from '../header/HeaderService';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const {
    state: { userProfile }
  } = useProfile();

  const [purchases, setPurchases] = useState([]);
  const [profileInfo, setProfileInfo] = useState(true);
  // const [apiError, setApiError] = useState(false);
  const [purchaseInfo, setPurchaseInfo] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [apiError, setApiError] = useState('');
  // const [tempPurchaseInfo, setTempPurchaseInfo] = useState(null);
  // const [updateUser, setUpdateUser] = useState([]);
  /* const onUpdateUser = (e) => {
    setUpdateUser({ ...updateUser, [e, target.id]: e.target.value })
  } */
  useEffect(() => {
    loginUser(userProfile[0], setProfile, setApiError);
  }, [userProfile]);
  useEffect(() => {
    fetchPurchases(`?email=${userProfile[0].email}`, setPurchases);
  }, [userProfile]);
  // eslint-disable-next-line arrow-body-style
  const renderName = () => {
    return (
      <div className="userInfo">
        <ul className="headerName">Name</ul>
        <li>
          First Name:
          {' '}
          {profile.firstName}
        </li>
        <li>
          Last Name:
          {' '}
          {profile.lastName}
        </li>
      </div>
    );
  };
  const startEditing = () => {
    // setTempPurchaseInfo(purchaseInfo);
    setPurchaseInfo(false);
    setIsEditing(true);
  };
  // const renderEditName = (onUpdateUser, errors) => {

  // }
  const renderEditShipping = (onUpdateUser, errors) => (
    <div className="userInfo">
      <ul className="headerShipping">Shipping Address</ul>
      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="street"
        label="Street"
        onChange={onUpdateUser}
        // value={updateUser.street}
        error={errors.street}
      />
      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="street2"
        label="Street2"
        onChange={onUpdateUser}
        // value={updateUser.street}
        error={errors.street2}
      />
      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="city"
        label="City"
        onChange={onUpdateUser}
        // value={updateUser.city}
        error={errors.city}
      />
      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="state"
        label="State"
        onChange={onUpdateUser}
        // value={updateUser.state}
        error={errors.state}
      />
      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="zip"
        label="zip"
        onChange={onUpdateUser}
        // value={updateUser.zip}
        error={errors.zip}
      />
    </div>
  );

  const renderShipping = () => {
    const {
      street2, city, state, zip
    } = userProfile[userProfile.length - 1];
    return (
      <div className="userInfo">
        { apiError }
        <ul className="headerShipping">Shipping Address</ul>
        <li>
          Street:
          {' '}
          {profile.userBillingAddress && profile.userBillingAddress.BillingStreet}
          {' '}
          {street2}
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
  /* const renderPurchase = () => {
    <div className="test">
      {console.log(purchases)}
            {userProfile[0].email}
    </div>;
  }; */
  const changeStatePurchase = () => {
    setProfileInfo(false);
    setPurchaseInfo(true);
    document.getElementById('purchase').classList.add('active');
    document.getElementById('profile').classList.remove('active');
  };
  const changeStateProfileInfo = () => {
    setProfileInfo(true);
    setPurchaseInfo(false);
    document.getElementById('profile').classList.add('active');
    document.getElementById('purchase').classList.remove('active');
  };
  try {
    return (
      <div className="profile">
        <div className="ui">
          <div className="buttons">
            <button className="profileButton active" id="profile" type="button" onClick={changeStateProfileInfo}> User Info</button>
            {purchases.length !== 0 && <button className="profileButton purchaseHistory" id="purchase" type="button" onClick={changeStatePurchase}> Purchase History </button>}
          </div>
        </div>
        <div className="content">
          {!isEditing && <button className="edit" type="button" onClick={startEditing} />}
          <div className="userInfodiv">
            {profileInfo && renderName()}
            {profileInfo && renderShipping()}
            {/* isEditing && renderEditName */}
            {isEditing && renderEditShipping}
          </div>
          {purchaseInfo && (
            <div className="purchases">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="purchase">
                  <ProfilePurchase
                    purchases={purchase}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="stopOverflow" />
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
