import React from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import BasicRating from './ReviewsStars';
import { useProfile } from '../Profile/ProfileContext';
import Review from './Review';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({ product, reviews, closeModal }) => {
  const {
    state: { userProfile }
  } = useProfile();
  console.log(userProfile);

  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };

  return (
    <div
      className="reviewsModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="reviewsModal">
        <div className="reviewsModal-content">

          <div className="reviewsModal-header">
            <button
              type="button"
              className="reviewscloseButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="productName">
            {product.name}
          </div>
          <div className="reviewsModal-body">
            <button
              type="button"
              className="reviewsOrderButton"
            >
              Newest First
              {console.log(reviews)}
            </button>
            {reviews && reviews.filter((r) => (r.productId === product.id)).map((review) => (
              <div key={review.id}>
                <Review review={review} name={product.name} />
              </div>
            ))}
            <div className="reviewsModal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
