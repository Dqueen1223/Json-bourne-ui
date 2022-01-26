import React from 'react';
import './ProfilePage.css';
// import HttpHelper from '../../utils/HttpHelper';
// import handleGoogleLoginSuccess from "../header/Header";

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
  // const getUserByEmail = async (email, setUser) => {
  //   let userByEmailExists;
  //   await HttpHelper(`/users/${email}`, 'GET')
  //     .then((response) => {
  //       if (response.status === 200) {
  //         userByEmailExists = true;
  //         return response.json();
  //       }
  //       if (response.status === 404) {
  //         userByEmailExists = false;
  //       }
  //       throw new Error(response.statusText);
  //     })
  //     .then((body) => {
  //       setUser(body);
  //       document.cookie = `user=${JSON.stringify(body)}`;
  //       name.firstname.push(body.firstName);
  //       name.lastname.push(body.lastName);
  //     })
  //     .catch(() => { });
  //   return userByEmailExists;
  // };
  // const handleGoogleLoginSuccess = (response) => {
  //   sessionStorage.setItem('token', response.getAuthResponse().id_token);
  //   const googleUser = {
  //     firstName: response.profileObj.givenName,
  //     lastName: response.profileObj.familyName
  //   };
  //   name.push(googleUser);
  // };
  // const [displayName, setDisplayName] = useState(true);
  // const [displayShipping, setDisplayShipping] = useState(true);

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
  // const clickShipping = () => {
  //   setDisplayName(false);
  //   setDisplayShipping(true);
  // };
  // const clickName = () => {
  //   setDisplayShipping(false);
  //   setDisplayName(true);
  // };

  return (
    <div className="profile">
      <div className="ui">
        {/* <button className="tabs" type="button" onClick={clickName}>
          Name
        </button>
        <button className="tabs" type="button" onClick={clickShipping}>
          Shipping Address
        </button> */}
        <div className="userInfodiv">
          {renderName()}
          {renderShipping()}
          {/* {displayName ? renderName() : <></>}
          {displayShipping ? renderShipping() : <></>} */}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
