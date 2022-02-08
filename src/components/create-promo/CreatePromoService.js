import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name makeProduct
 * @description sends a create product request
 * @param {*}
 * @returns
 */
export default async function makePromo(promo) {
  await HttpHelper(Constants.PROMOTIONS_ENDPOINT, 'POST', {
    Code: promo.code,
    Discount: promo.discount,
    Type: promo.type,
    StartDate: promo.startDate,
    EndDate: promo.endDate
  })
    .then((response) => response.json())
    .catch(() => {
      /* eslint-disable no-console */
      console.log('Failed to create');
      /* eslint-enable no-console */
    });
}
