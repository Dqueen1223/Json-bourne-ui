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
  product, reviews, closeModal, setReviews, setApiError, isEditMode, setIsEditMode
}) => {
  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };

  const onEdit = () => {
    setIsEditMode(true);
  };

  const onSubmitEdit = (review) => {
    const updatedReview = {
      id: review.id,
      rating: review.rating,
      // rating: document.getElementById('rating'),
      title: document.getElementById('title').innerText,
      reviewsDescription: document.getElementById('description').innerText,
      email: review.email,
      productId: review.productId,
      // get user id
      userId: 1,
      dateCreated: review.dateCreated
    };
    // perform validation on inputs
    console.log(updatedReview);
    updateReview(setReviews, setApiError, updatedReview);
    setIsEditMode(false);
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
                    {userId === 1 && <FaPencilAlt className="pencilIcon" onClick={onEdit} />}
                  </div>
                  <div className="reviewsRating">{BasicRating(review.rating)}</div>
                  <div className="reviewsActual" id="title" contentEditable={isEditMode}>{review.title}</div>
                  <div className="reviewsDescription" id="description" contentEditable={isEditMode}>
                    {review.reviewsDescription}
                  </div>
                  <div className="reviewsDate">
                    {review.dateCreated.slice(0, 10)}
                  </div>
                  {isEditMode && (
                  <button type="button" className="btnSubmitEditReview" onClick={() => { onSubmitEdit(review); }}>
                    Submit
                  </button>
                  )}
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
