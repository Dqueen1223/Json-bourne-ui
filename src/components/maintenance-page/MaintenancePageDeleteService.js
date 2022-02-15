import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name deleteProduct
 * @description Utilizes HttpHelper to make a delete request to an API
 * @param {*} product is the product to be deleted
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns the response JSON from the server if the product was deleted or API error if not 200OK
 */
export default async function deleteProducts(product, setApiError) {
  await HttpHelper(`${Constants.PRODUCTS_ENDPOINT}/${product.id}`, 'DELETE')
    .then((response) => {
      if (response.ok) {
        toast.success('Product successfully deleted.');
      }
      return response.statusText;

      // throw new Error(Constants.API_ERROR);
    })
    .catch(() => {
      setApiError(true);
    });
}
