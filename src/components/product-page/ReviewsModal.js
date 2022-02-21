import React from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import BasicRating from './ReviewsStars';
// import { useProfile } from '../Profile/ProfileContext';
import { ConfirmProvider } from 'material-ui-confirm';
import Review from './Review';
import './ReviewsModal.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({
  product, reviews, closeModal, setReviews, setApiError
}) => {
  // const {
  //   state: { userProfile }
  // } = useProfile();
  // console.log(userProfile);

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

          <button
            type="button"
            className="reviewscloseButton"
            onClick={closeTheModal}
          >
            &times;
          </button>
          <div className="reviewsProductName">
            {product.name}
          </div>
          <div className="reviewsModal-body">
            <button
              type="button"
              className="reviewsOrderButton"
            >
              Newest First
            </button>
            {reviews && reviews.filter((r) => (r.productId === product.id)).map((review) => (
              <div key={review.id}>
                <ConfirmProvider>
                  <Review
                    review={review}
                    setReviews={setReviews}
                    setApiError={setApiError}
                  />
                </ConfirmProvider>
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
