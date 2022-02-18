import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name makeReview
 * @description sends a create review request
 * @param {*}
 * @returns
 */
export default async function makeReview(review) {
  let status = 'waiting';
  await HttpHelper(Constants.REVIEWS_ENDPOINT, 'POST', review)
    .then((response) => {
      if (response.ok) {
        response.json();
      } else {
        status = response.statusText;
        throw new Error(response.statusText);
      }
    })
    .catch(() => {
    });
  return status;
}
