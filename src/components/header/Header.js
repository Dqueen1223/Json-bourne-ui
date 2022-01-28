import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import loginUser from './HeaderService';
import constants from '../../utils/constants';

/**
 * @name Header
 * @description Displays the navigation header
 * @return component
 */
const Header = () => {
  const [user, setUser] = useState('');
  const [googleError, setGoogleError] = useState('');
  const [apiError, setApiError] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const history = useHistory();
  // const email = [];
  // const firstname = [];
  // const lastname = [];
  // const googleUser = {
  //   email: email,
  //   firstName: firstname,
  //   lastName: lastname
  // }
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
    loginUser(googleUser, setUser, setApiError);
    setisLoggedIn(true);
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
  const handleGoogleLogoutSuccess = () => {
    setUser('');
    setGoogleError('');
    setisLoggedIn(false);
    history.push('/logoutpage');
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
    <Link to="/profilepage">
      <img
        className="profileicon"
        src="https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png"
        alt="profileIcon"
      />
    </Link>
  );
  return (
    <div className="header">
      {isLoggedIn ? renderProfileicon() : <></>}
      <Link to="/checkout">
        <img
          className="carticon"
          src="https://icon-library.com/images/white-shopping-cart-icon/white-shopping-cart-icon-1.jpg"
          alt="cartimage"
        />
      </Link>
      <Link to="/home">
        <img
          className="applogo"
          src="https://icon-library.com/images/sports-app-icon/sports-app-icon-14.jpg"
          alt="applogo"
        />
      </Link>
      <div className="googlebutton">
        {user && <span>{user.firstName}</span>}
        {user && <span> </span>}
        {user && <span>{user.lastName}</span>}
        {googleError && <span>{googleError}</span>}
        {apiError && <span>Api Error</span>}
        {!user ? (
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
    </div>
  );
};
export default Header;
