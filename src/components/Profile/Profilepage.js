import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { toast } from 'react-toastify';
import { useProfile } from './ProfileContext';
import fetchPurchases from './ProfilePageService';
import ProfilePurchase from './ProfilePurchase';
// import FormItem from '../create-promo/forms/FormItem';
import loginUser from '../header/HeaderService';
import renderEditShipping from './Profile_Forms/EditShipping';
// import renderEditName from './Profile_Forms/EditName';

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
  // const [tempPurchaseInfo, setTempPurchaseInfo] = useState(null);
  // const [updateUser, setUpdateUser] = useState([]);
  /* const onUpdateUser = (e) => {
    setUpdateUser({ ...updateUser, [e.target.id]: e.target.value });
  }; */
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

  // eslint-disable-next-line arrow-body-style
  const renderShipping = () => {
    return (
      <div className="userInfo">
        { apiError }
        <ul className="headerShipping">Shipping Address</ul>
        <li>
          Street:
          {' '}
          {profile.street}
          {' '}
          {profile.street2}
        </li>
        <li>
          City:
          {' '}
          {profile.city}
        </li>
        <li>
          State:
          {' '}
          {profile.state}
        </li>
        <li>
          Zip:
          {' '}
          {profile.zip}
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
    if (purchases.length !== 0) {
      setProfileInfo(false);
      setPurchaseInfo(true);
      document.getElementById('purchase').classList.add('active');
      document.getElementById('profile').classList.remove('active');
    } else {
      toast.error('You have no purchases to view.');
    }
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
            <button className="profileButton purchaseHistory" id="purchase" type="button" onClick={changeStatePurchase}> Purchase History </button>
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
