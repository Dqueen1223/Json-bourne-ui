import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { updateReview } from './ReviewService';
import BasicRating from './ReviewsStars';

const userId = 1;
/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({
  product, reviews, closeModal, setReviews, setApiError
}) => {
  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };

  const onEdit = (review) => {
    // toggle edit mode? declare state
    // get inputs from input fields
    // perform validation on inputs
    // get edited changes and send in update
    const updatedReview = {
      id: review.id,
      rating: review.rating,
      title: 'serendipity strikes again',
      reviewsDescription: review.reviewsDescription,
      email: review.email,
      productId: review.productId,
      // get user id
      userId: 1,
      dateCreated: review.dateCreated
    };
    updateReview(setReviews, setApiError, updatedReview);
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
            {reviews && reviews.filter((r) => (r.productId === product.id)).map((review) => (
              <div key={review.id}>
                <div className="reviewsOfProduct">
                  <div className="reviewsTitle">
                    {product.name}
                    {userId === 1 && <FaPencilAlt className="pencilIcon" onClick={() => { onEdit(review); }} />}
                  </div>
                  <div className="reviewsRating">{BasicRating(review.rating)}</div>
                  <div className="reviewsActual">{review.title}</div>
                  <div className="reviewsDate">
                    {review.reviewsDescription}
                  </div>
                  <div className="reviewsDate">
                    {review.dateCreated}
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
