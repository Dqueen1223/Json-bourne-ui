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

  const editHandler = (e) => {
    console.log(e.target.closest('.reviewsOfProduct'));
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle');
    const reviewRating = reviewElement.querySelector('.reviewsRating');
    const reviewDescription = reviewElement.querySelector('.reviewsDescription');

    reviewTitle.contentEditable = 'true';
    reviewRating.contentEditable = 'true';
    reviewDescription.contentEditable = 'true';

    console.log(reviewTitle);
    console.log(reviewRating);
    console.log(reviewDescription);
    setIsEditMode(true);
  };

  const submitEditHandler = (review) => {
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
                  <div className="reviewsProductName">
                    {product.name}
                    {userId === 1 && <FaPencilAlt className="pencilIcon" onClick={(e) => { editHandler(e); }} />}
                  </div>
                  <div className="reviewsRating">{BasicRating(isEditMode, review.rating)}</div>
                  <div className="reviewsTitle" id="title">{review.title}</div>
                  <div className="reviewsDescription" id="description">
                    {review.reviewsDescription}
                  </div>
                  <div className="reviewsDate">
                    {review.dateCreated.slice(0, 10)}
                  </div>
                  {isEditMode && (
                  <button type="button" className="btnSubmitEditReview" onClick={() => { submitEditHandler(review); }}>
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
