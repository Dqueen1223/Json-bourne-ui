import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

export default async function getPromoDiscount(value, setError, setSuccess) {
  await HttpHelper(`${Constants.PROMOTIONS_ENDPOINT}/${value}`, 'GET')
    .then((responce) => {
      if (responce.ok) {
        setSuccess('Code applied succesfully');
        return responce.json();
      }
      if (responce.status === '404') {
        setError('Invalid code');
        return responce.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .catch(() => {
      setError('There was a problem accessing the database');
    });
}
