import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BasicRating from './ReviewsStars';

// import styles from './ProductPage.module.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({ product, reviews, closeModal }) => {
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
                <div className="reviewsOfProduct">
                  <div className="reviewsTitle">{product.name}</div>
                  <div className="reviewsActual">
                    {review.title}
                    <FaPencilAlt className="pencilIcon" alt="pencilIcon" />
                  </div>
                  <div className="reviewsRating">{BasicRating(review.rating)}</div>
                  <div className="reviewsDate">
                    {review.reviewsDescription}
                  </div>
                  <div className="reviewsDate">
                    {review.dateCreated.slice(0, 10)}
                  </div>

                </div>
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
