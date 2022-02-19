import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BasicRating from './ReviewsStars';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const editHandler = () => {
    console.log(isEdit);
    setIsEdit(!isEdit);
  };

  const submitEditHandler = () => {
    console.log(isEdit);
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
          <div className="reviewsRating" readOnly>{BasicRating(review.rating, isEdit)}</div>
          <div className="reviewsDescription">
            {review.reviewsDescription}
          </div>
          <div className="reviewsDate">
            {review.dateCreated}
          </div>
        </div>
      )}
      {isEdit && (
      <div className="reviewsOfProduct">
        <div className="reviewsActual">
          {review.title}
          <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
        </div>
        <div className="reviewsRating">{BasicRating(review.rating, isEdit)}</div>
        <div className="reviewsDescription">
          {review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          {review.dateCreated}
        </div>
        <button type="button" className="btnSubmitEdit" onClick={submitEditHandler}>Submit</button>
      </div>
      )}
    </>

  );
};

export default Review;
