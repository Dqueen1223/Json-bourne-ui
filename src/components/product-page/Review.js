import React, { useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
// import { toast } from 'react-toastify';
import BasicRating from './ReviewsStars';
import { updateReview, validateReview } from './ReviewService';
import { useProfile } from '../Profile/ProfileContext';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews, setApiError, fetchReviews) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState();
  const [email, setEmail] = React.useState('');

  const {
    state: { userProfile }
  } = useProfile();

  useEffect(() => {
    if (userProfile.length > 0) {
      setEmail(userProfile[0].email);
    }
  }, [userProfile, setEmail]);

  const editHandler = (e) => {
    setIsEdit(true);
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'visible';
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText.trim();
    const description = reviewElement.querySelector('.reviewsDescription').innerText.trim();
    const updatedReview = {
      id: review.id,
      rating: value,
      title: reviewTitle,
      reviewsDescription: description,
      email: review.email,
      productId: review.productId,
      uerId: review.userId,
      dateCreated: review.dateCreated
    };

    if (!validateReview(value, reviewTitle, description)) return;
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
    updateReview(setReviews, setApiError, updatedReview);
    fetchReviews(setReviews, setApiError);
    setIsEdit(false);
  };

  const preventCursorDisappearHandler = (e) => {
    const input = e.target.innerText;
    if (input === '') e.target.innerText = ' ';
  };

  return (
    <>
      {(review.email === email) && !isEdit && (
        <div className="reviewsOfProduct">
          <div className="reviewsTitle">
            { review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          <div className="reviewsRating">{BasicRating(isEdit, review.rating)}</div>
          <div className="reviewsDescription">
            {review.reviewsDescription}
          </div>
          <div className="reviewsDate">
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnDummy">Submit</button>

        </div>
      )}
      {(review.email === email) && isEdit && (
        <div className="reviewsOfProduct">
          <div className="reviewsTitle" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            { review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          <div className="reviewsRating">{BasicRating(isEdit, value, setValue)}</div>
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            {review.reviewsDescription}
          </div>
          <div className="reviewsDate">
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
        </div>
      )}
      {(review.email !== email) && (
      <div className="reviewsOfProduct">
        <div className="reviewsTitle">
          {review.title}
        </div>
        <div className="reviewsRating">{BasicRating(isEdit, review.rating)}</div>
        <div className="reviewsDescription">
          {review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          {review.dateCreated.slice(0, 10)}
        </div>
      </div>
      )}
    </>
  );
};

export default Review;
