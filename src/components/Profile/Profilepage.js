import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { toast } from 'react-toastify';
import { useProfile } from './ProfileContext';
import ProfilePurchase from './ProfilePurchase';
import loginUser from '../header/HeaderService';
import fetchPurchases from './ProfilePageService';
import ProfileName from './Profile_Forms/ProfileName';
import ProfileShipping from './Profile_Forms/ProfileShipping';
import profileValidation from './Validation';
import fetchUpdateUser from './ProfileUpdateService';

const ProfilePage = () => {
  const {
    state: { userProfile }
  } = useProfile();

  const [profile, setProfile] = useState({});

  // const [apiError, setApiError] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [purchaseInfo, setPurchaseInfo] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [errors, setErrors] = useState({});
  const [tempUserInfo, setTempUserInfo] = useState(null);

  const onProfileChange = (e) => {
    setProfile({ ...profile, [e.target.id]: e.target.value });
  };

  const [apiError, setApiError] = useState('');
  useEffect(() => {
    loginUser(userProfile[0], setProfile, setApiError);
  }, [userProfile]);
  // const [tempPurchaseInfo, setTempPurchaseInfo] = useState(null);
  useEffect(() => {
    fetchPurchases(`?email=${userProfile[0].email}`, setPurchases);
  }, [userProfile]);
  // const renderName = () => {
  //   return (
  //     <div className="userInfo">
  //       <ul className="headerName">Name</ul>
  //       <li>
  //         First Name:
  //         {' '}
  //         {profile.firstName}
  //       </li>
  //       <li>
  //         Last Name:
  //         {' '}
  //         {profile.lastName}
  //       </li>
  //     </div>
  //   );
  // };
  const startEditing = () => {
    const temp = purchaseInfo;
    setTempUserInfo(temp);
    setPurchaseInfo(false);
    setIsEditing(true);
  };
  const trySubmit = () => {
    const currentErrors = profileValidation(profile);
    if (errors.length > 0) {
      setErrors(currentErrors);
      toast.error('There was errors in the inputs. The changes have not been submitted');
    } else {
      const user = {
        id: profile.id,
        dateModified: new Date(Date.now().toISOString()),
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        street: profile.street,
        street2: profile.street2,
        city: profile.city,
        state: profile.state,
        zip: profile.zip,
        phone: profile.phone
      };
      fetchUpdateUser(user, setProfile);
    }
  };
  const abortEdit = () => {
    const temp = tempUserInfo;
    setProfile(temp);
    setTempUserInfo(null);
    setIsEditing(false);
  };

  // const renderShipping = () => {
  //   return (
  //     <div className="userInfo">
  //       { apiError }
  //       <ul className="headerShipping">Shipping Address</ul>
  //       <li>
  //         Street:
  //         {' '}
  //         {profile.street}
  //         {' '}
  //         {profile.street2}
  //       </li>
  //       <li>
  //         City:
  //         {' '}
  //         {profile.city}
  //       </li>
  //       <li>
  //         State:
  //         {' '}
  //         {profile.state}
  //       </li>
  //       <li>
  //         Zip:
  //         {' '}
  //         {profile.zip}
  //       </li>
  //     </div>
  //   );
  // };
  /* const renderPurchase = () => {
    <div className="test">
      {console.log(purchases)}
            {userProfile[0].email}
    </div>;
  }; */
  const changeStatePurchase = () => {
    if (purchases.length !== 0) {
      setPurchaseInfo(true);
      document.getElementById('purchase').classList.add('active');
      document.getElementById('profile').classList.remove('active');
    } else {
      toast.error('You have no purchases to view.');
    }
  };
  const changeStateProfileInfo = () => {
    setPurchaseInfo(false);
    document.getElementById('profile').classList.add('active');
    document.getElementById('purchase').classList.remove('active');
  };
  if (!apiError) {
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
            <ProfileName
              onChange={onProfileChange}
              isEditing={isEditing}
              data={profile}
              errors={errors}
            />
            <ProfileShipping
              onChange={onProfileChange}
              isEditing={isEditing}
              data={profile}
              errors={errors}
            />
            {isEditing && <button className="submit" type="button" onClick={trySubmit} />}
            {isEditing && <button className="abortEdit" type="button" onClick={abortEdit} />}
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
  }
  return (
    <div>
      <p>You must be logged in to view the profile page</p>
    </div>
  );
};
export default ProfilePage;
