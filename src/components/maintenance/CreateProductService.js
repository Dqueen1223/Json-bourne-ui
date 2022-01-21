import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name makeProduct
 * @description sends a create product request
 * @param {*}
 * @returns
 */
export default async function makeProduct(newProduct) {
  console.log(newProduct);
  await HttpHelper(Constants.CREATE_PRODUCT_ENDPOINT, 'POST', {
    newProduct
  })
    .then((response) => response.json())
    .catch(() => {
      /* eslint-disable no-console */
      console.log('Failed to create');
      /* eslint-enable no-console */
    });
}
