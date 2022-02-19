import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BasicRating from './ReviewsStars';
// import { updateReview } from './ReviewService';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(review.rating);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const submitEditHandler = () => {
    // get values from dom? or set values to state
    console.log(value);
    setIsEdit(!isEdit);
  };
  return (
    <>
      {!isEdit && (
        <div className="reviewsOfProduct">
          <div className="reviewsActual">
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
        <div className="reviewsActual" contentEditable="true">
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
        <button type="button" className="btnSubmitEditReview" onClick={submitEditHandler}>Submit</button>
      </div>
      )}
    </>

  );
};

export default Review;
