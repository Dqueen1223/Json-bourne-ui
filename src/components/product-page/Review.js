import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BasicRating from './ReviewsStars';
import { updateReview } from './ReviewService';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews, setApiError) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(review.rating);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const updatedReview = {
      id: review.id,
      rating: value,
      title: reviewElement.querySelector('.reviewsActual').innerText,
      reviewsDescription: reviewElement.querySelector('.reviewsDescription').innerText,
      email: review.email,
      productId: review.productId,
      // get user id
      userId: 1,
      dateCreated: review.dateCreated
    };
    // perform validation on inputs
    updateReview(setReviews, setApiError, updatedReview);
    // reviewElement.querySelector('.btnSubmitEditReview').remove();
    setIsEdit(false);
  };

  return (
    <>
      {!isEdit && (
        <div className="reviewsOfProduct">
          <div className="reviewsTitle">
            {review.title}
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          <div className="reviewsRating" readOnly>{BasicRating(isEdit, value, setValue)}</div>
          <div className="reviewsDescription">
            {review.reviewsDescription}
          </div>
          <div className="reviewsDate">
            {review.dateCreated.slice(0, 10)}
          </div>
        </div>
      )}
      {isEdit && (
      <div className="reviewsOfProduct">
        <div className="reviewsTitle" contentEditable="true">
          {review.title}
          <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
        </div>
        <div className="reviewsRating">{BasicRating(isEdit, value, setValue)}</div>
        <div className="reviewsDescription" contentEditable="true">
          {review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          {review.dateCreated.slice(0, 10)}
        </div>
        <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
      </div>
      )}
    </>

  );
};

export default Review;
