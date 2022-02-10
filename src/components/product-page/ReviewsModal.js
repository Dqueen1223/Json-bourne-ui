import React from 'react';
import BasicRating from './ReviewsStars';

/**
 * @name ProductCardModal
 * @description material-ui styling for product card modal
 * @return component
 */
const ReviewsModal = ({ review, product, closeModal }) => {
  console.log(review);

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
            </button>
            <div className="reviewsOfProduct">
              <div className="reviewsTitle">{product.name}</div>
              <div className="reviewsRating">{BasicRating()}</div>
              <div className="reviewsActual">{review.description}</div>
              <div className="reviewsDate">Reviewed on this date </div>
            </div>
            <div className="reviewsModal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
