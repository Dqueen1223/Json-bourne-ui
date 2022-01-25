import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
// import { render } from 'react-dom';
// import { formatDiagnosticsWithColorAndContext } from 'typescript';
import loginUser from './HeaderService';
import constants from '../../utils/constants';
import { useProfile } from '../Profile/ProfileContext';
// import logout from '../Profile/Logoutpage';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */
const Header = () => {
  // const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { dispatch } = useProfile();
  const {
    state: { user }
  } = useProfile();
  /**
   * @name handleGoogleLoginSuccess
   * @description Function to run if google login was successful
   * @param {Object} response Response object from google
   */
  const handleGoogleLoginSuccess = (response) => {
    sessionStorage.setItem('token', response.getAuthResponse().id_token);
    const googleUser = {
      email: response.profileObj.email,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName
    };
    loginUser(googleUser, dispatch, setApiError);
    if (googleUser !== null) { setisLoggedIn(true); }
    setGoogleError('');
  };

  /**
   * @name handleGoogleLoginFailure
   * @description Function to run if google login was unsuccessful
   */
  const handleGoogleLoginFailure = () => {
    setGoogleError(
      'There was a problem logging in with Google. Please wait and try again later.'
    );
  };

  /**
   * @name handleGoogleLogoutSuccess
   * @description Function to run if google logout was successful
   */
  const handleGoogleLogoutSuccess = (response) => {
    dispatch({
      type: 'logout',
      Profile: {
        firstName: response.firstName,
        lastName: response.lastName,
        Street: response.street,
        City: response.city,
        State: response.state,
        Zip: response.zip
      }
    });
    setGoogleError('');
    setisLoggedIn(false);
    // logout();
  };

  /**
   * @name handleGoogleLogoutFailure
   * @description Function to run if google logout was unsuccessful
   */
  const handleGoogleLogoutFailure = () => {
    setGoogleError(
      'There was a problem logging out with Google. Please wait and try again later.'
    );
  };

  const renderProfileicon = () => (
    <a href="/profilepage">
      <img
        className="profileicon"
        src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
        alt="profileIcon"
      />
    </a>
  );
  return (
    <div className="header">
      {/* <NavLink to="/home">Home</NavLink> */}
      {/* <NavLink to="/checkout">Cart</NavLink> */}
      <div className="googlebutton">
        {user.length !== 0 && <span>{user.firstName}</span>}
        {user.length !== 0 && <span> </span>}
        {user.length !== 0 && <span>{user.lastName}</span>}
        {googleError && <span>{googleError}</span>}
        {apiError && <span>Api Error</span>}
        {user.length === 0 ? (
          <GoogleLogin
            clientId={constants.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleGoogleLoginSuccess}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy="single_host_origin"
          />
        ) : (
          <GoogleLogout
            clientId={constants.GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleGoogleLogoutSuccess}
            onFailure={handleGoogleLogoutFailure}
          />
        )}
      </div>
      <a href="/checkout">
        {' '}
        <img
          className="carticon"
          src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-1.jpg"
          alt="cartimage"
        />
      </a>
      <a href="/home">
        <img
          className="applogo"
          src="https://icon-library.com/images/sports-app-icon/sports-app-icon-14.jpg"
          alt="applogo"
        />
        {' '}
      </a>
      {' '}
      {isLoggedIn ? renderProfileicon() : <></>}
    </div>
  );
};
export default Header;
