import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function fetchProducts(setProducts, setApiError, filter, currentPage) {
  localStorage.setItem('scrollpos', window.scrollY);
  await HttpHelper(Constants.ACTIVE_PRODUCTS_ENDPOINT + filter + currentPage, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setProducts)
    .catch(() => {
      setApiError(true);
    });
  window.scrollTo(0, localStorage.getItem('scrollpos'));
}
