import React from 'react';
import BasicRating from './ReviewsStars';
// import styles from './ProductPage.module.css';
// import Constants from '../../utils/constants';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({ product, reviews, closeModal }) => {
  console.log(reviews);
  // const [review, setReviews] = useState();
  // const [apiError, setApiError] = useState(false);
  // const [isActive, setIsActive] = useState(true);
  // const [filter, setFilter] = useState('');
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
            {reviews.map((review) => (
          <div key={reviews.id}>
            <span>{review.title} </span>
            </div>
            <div className="reviewsModal-footer" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
