import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

const UpdateUserByActivity = async (user) => {
  await HttpHelper(`${Constants.USERS_ENDPOINT}/${1}`, 'PUT', {
    active: Date.now(),
    // dateCreated: user.dateCreated,
    // dateModified: user.dateModified,
    email: user.email,
    // role: user.role,
    firstName: 'user.firstName',
    lastName: user.lastName
    // street: user.street,
    // street2: user.street2,
    // city: user.city,
    // state: user.state,
    // zip: user.zip,
    // phone: user.phone
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(Constants.API_ERROR);
  });
};

export default UpdateUserByActivity;
