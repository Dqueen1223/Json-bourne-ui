import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchPurchases
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for purchases
 * @param {string} email email for get request
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for purchases if 200 response, else sets state for apiError
 */
export default async function fetchProduct(productId, setCost) {
  // eslint-disable-next-line prefer-template
  await HttpHelper(Constants.PRODUCTS_ENDPOINT + '/' + productId, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setCost)
    .catch(() => {
    /* eslint-disable no-console */
      console.log('Failed to load');
    /* eslint-enable no-console */
    });
}
