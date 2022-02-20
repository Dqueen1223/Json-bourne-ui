import React, { useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import BasicRating from './ReviewsStars';
import { updateReview } from './ReviewService';
import { useProfile } from '../Profile/ProfileContext';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews, setApiError) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState();
  const [desc, setDesc] = React.useState();
  const [title, setTitle] = React.useState();
  const [stars, setStars] = React.useState();
  const [email, setEmail] = React.useState('');

  const {
    state: { userProfile }
  } = useProfile();

  useEffect(() => {
    if (userProfile.length > 0) {
      setEmail(userProfile[0].email);
    }
  }, [userProfile, setEmail]);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText.trim();
    const description = reviewElement.querySelector('.reviewsDescription').innerText.trim();
    const starRating = Number(reviewElement.querySelector('.starRating').innerText.trim());
    const updatedReview = {
      id: review.id,
      rating: starRating,
      title: reviewTitle,
      reviewsDescription: description,
      email: review.email,
      productId: review.productId,
      uerId: review.userId,
      dateCreated: review.dateCreated
    };
    if (reviewTitle === '') {
      toast.info('title cannot be empty');
      return;
    }
    if (reviewTitle.length > 50) {
      toast.info('title must be 50 characters or less');
      return;
    }
    if (description === '') {
      toast.info('description cannot be empty');
      return;
    }
    if (description.length > 200) {
      toast.info('description must be 200 characters or less');
      return;
    }
    setTitle(reviewTitle);
    setDesc(description);
    setStars(starRating);
    updateReview(setReviews, setApiError, updatedReview);
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
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
          {!title && (
          <div className="reviewsTitle">
            { review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          )}
          {title && (
          <div className="reviewsTitle">
            { title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          )}
          {!stars && (<div className="reviewsRating">{BasicRating(isEdit, review.rating, setValue)}</div>)}
          {stars && (<div className="reviewsRating">{BasicRating(isEdit, stars, setStars)}</div>)}
          {!desc && (
          <div className="reviewsDescription">
            {review.reviewsDescription}
          </div>
          )}
          {desc && (
          <div className="reviewsDescription">
            {desc}
          </div>
          )}
          <div className="reviewsDate">
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnDummy">Submit</button>

        </div>
      )}
      {(review.email === email) && isEdit && (
        <div className="reviewsOfProduct">
          {!title && (
          <div className="reviewsTitle" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            { review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          )}
          {title && (
          <div className="reviewsTitle" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            { title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
          </div>
          )}
          {!stars && (<div className="reviewsRating">{BasicRating(isEdit, value, setValue, review.rating)}</div>)}
          {stars && (<div className="reviewsRating">{BasicRating(isEdit, stars, setStars)}</div>)}
          {!desc && (
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            {review.reviewsDescription}
          </div>
          )}
          {desc && (
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            {desc}
          </div>
          )}
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
        <div className="reviewsRating">{BasicRating(isEdit, review.rating, setValue)}</div>
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
