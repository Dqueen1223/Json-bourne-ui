import React from 'react';
import BasicRating from './ReviewsStars';

/* eslint-disable */
// import styles from './ProductPage.module.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({ product, reviews, closeModal }) => {

  const closeTheModal = (e) => {
    console.log(reviews);
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };

  if (!reviews || !reviews.length) {
    // return null;
  }

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
            {(reviews|| []).filter(r => r.productId === product.Id).map((review) => (
              <div className="reviewsOfProduct">
                <div className="reviewsTitle">{product.name}</div>
                <div className="reviewsRating">{BasicRating()}</div>
                <div className="reviewsActual">{review.title}</div>
                <div className="reviewsDate">{review.reviewsDescription} </div>
                <div className="reviewsDate">{review.dateCreated} </div>

              </div>
            ))}

            <div className="reviewsModal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-enable */

export default ReviewsModal;
