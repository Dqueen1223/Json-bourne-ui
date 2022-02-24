import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

export default async function fetchUpdateUser(profile, setProfile) {
  // eslint-disable-next-line prefer-template
  await HttpHelper(Constants.USER_ENDPOINT + '/' + profile.id, 'PUT', profile)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setProfile)
    .catch(() => {
      /* eslint-disable no-console */
      console.log('Failed to load');
      /* eslint-enable no-console */
    });
}
