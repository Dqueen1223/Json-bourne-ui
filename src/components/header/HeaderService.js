import HttpHelper from '../../utils/HttpHelper';

/**
 * @name getUserByEmail
 * @description Gets the user by email to see if exists
 * @param {String} email Target Email
 * @param {Function} setUser Sets the user state
 */
const getUserByEmail = async (email, dispatch) => {
  let userByEmailExists;

  await HttpHelper(`/users/${email}`, 'GET')
    .then((response) => {
      if (response.status === 200) {
        userByEmailExists = true;
        dispatch({
          type: 'login',
          Profile: {
            firstName: response.body.firstName,
            lastName: response.body.lastName,
            Street: response.body.street,
            City: response.body.city,
            State: response.body.state,
            Zip: response.body.zip
          }
        });
        return response.json();
      }
      if (response.status === 404) {
        userByEmailExists = false;
      }
      throw new Error(response.statusText);
    })
    .then((body) => {
      document.cookie = `user=${JSON.stringify(body)}`;
      console.log(body);
    })
    .catch(() => { });
  return userByEmailExists;
};

/**
 * @name createUser
 * @description Posts a user to the backend
 * @param {Object} user The user to create
 * @param {Function} setUser Sets the user state
 * @param {Function} setApiError Sets the API Error state
 */
const createUser = async (user, dispatch, setApiError) => {
  await HttpHelper('/users', 'POST', user)
    .then((response) => {
      if (response.ok) {
        dispatch({
          type: 'login',
          Profile: {
            firstName: response.firstName,
            lastName: response.lastName,
            Street: response.street,
            City: response.city,
            State: response.state,
            Zip: response.zip
          }
        });
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((body) => {
      document.cookie = `user=${JSON.stringify(body)}`;
    })
    .catch(() => {
      setApiError(true);
    });
};

/**
 * @name loginUser
 * @description Sends a login request to the backend and get user information
 * @param {Object} googleUser The googleUser object
 * @param {Function} setUser Sets the user
 * @param {Function} setApiError Sets the Api Error
 */
const loginUser = async (googleUser, setApiError, dispatch) => {
  const userByEmailExists = await getUserByEmail(googleUser.email, dispatch);
  if (!userByEmailExists) {
    createUser(googleUser, dispatch, setApiError);
  }
};

export default loginUser;
