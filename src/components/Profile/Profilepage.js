// import { StylesContext } from '@material-ui/styles';
import React, { useState } from 'react';
// import { readConfigFile } from 'typescript';

// import { TouchableOpacity, Text, View } from 'react-native';
// const ShippingInfo = () => (
//   <>
//     <div>
//       <ul>Shipping</ul>
//       <li>Street: 123 main</li>
//       <li>City: Baltimore</li>
//       <li>State: MD</li>
//       <li>Zip: 13913</li>
//     </div>
//     <div>
//       <p>Street: 123 mainS</p>
//     </div>
//     <div>
//       <p>City: Baltimore</p>
//     </div>
//   </>
// );
// const UserName = () => (
//   <>
//     <div>
//       <ul>FirstName : FirstName</ul>
//       <ul>LastName : LastName</ul>
//     </div>
//   </>
// );
// const Shipping = (props) => (
//   <div>
//     <button type="button" onClick={props}>
//       Shipping
//     </button>
//   </div>
// );
// class ProfilePage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ShippingButton = this.ShippingButton.bind(this);
//     this.setState = { displayShipping: false };
//   }

//   ShippingButton() {
//     this.setState({ displayShipping: true });
//   }

//   render() {
//     const { displayShipping } = this.state;
//     let button;
//     if (displayShipping) {
//       button = <ShippingInfo onClick={this.ShippingButton} />;
//     }
//     return (
//       <div>
//         <Shipping />
//         {button}
//         <UserName />
//       </div>
//     );
//   }
// }
// const ShippingButton = () => {
//   (
//     <div>
//       <ul>Shipping</ul>
//       <li>Street: 123 main</li>
//       <li>City: Baltimore</li>
//       <li>State: MD</li>
//       <li>Zip: 13913</li>
//     </div>
//   );
// };
// const [shipping, setShipping] = useState([{
//   Shipping: 'shipping',
//   street: 'Street: 123 main',
//   city: 'City: Baltimore',
//   state: 'State MD',
//   zip: '23104'
// }]);
const ProfilePage = () => {
  const shipping = {
    Shipping: '',
    street: 'Street: 123 main',
    city: 'City: Baltimore',
    state: 'State MD',
    zip: '23104'
  };
  const [display, setDisplay] = useState(false);

  const renderShipping = () => {
    const {
      Shipping, street, city, state, zip
    } = shipping;
    return (
      <div>
        <ul>{Shipping}</ul>
        <li>{street}</li>
        <li>{city}</li>
        <li>{state}</li>
        <li>{zip}</li>
      </div>
    );
  };
  const clickShipping = () => {
    setDisplay(true);
  };
  return (
    <div className="ProfilePage">
      {display ? renderShipping() : <></>}
      <button type="button" onClick={clickShipping}>Shipping</button>
    </div>
  );
};
export default ProfilePage;
