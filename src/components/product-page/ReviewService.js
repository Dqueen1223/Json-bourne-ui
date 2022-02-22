import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setReviews sets state for reviews
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function fetchReviews(setReviews, setApiError) {
  await HttpHelper(Constants.REVIEWS_ENDPOINT, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setReviews)
    .catch(() => {
      setApiError(true);
    });
}

/**
 *
 * @name updateReview
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setReviews sets state for reviews
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for reviews if 200 response, else sets state for apiError
 */
export async function updateReview(setReviews, setApiError, review) {
  await HttpHelper(`${Constants.REVIEWS_ENDPOINT}/${review.id}`, 'PUT', review)
    .then((response) => {
      if (response.ok) {
        toast.success('review updated successfully');
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    // .then(setReviews)
    .catch(() => {
      setApiError(true);
    });
}
