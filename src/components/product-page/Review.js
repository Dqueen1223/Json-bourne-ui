import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import BasicRating from './ReviewsStars';
import { updateReview } from './ReviewService';
/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews, setApiError) => {
  const [isEdit, setIsEdit] = React.useState(false);
  // const [value, setValue] = React.useState(review.rating);
  const [value, setValue] = React.useState();

  const [desc, setDesc] = React.useState();
  const [title, setTitle] = React.useState();
  const [stars, setStars] = React.useState();

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
      // get user id
      userId: 1,
      dateCreated: review.dateCreated
    };
    // perform validation on inputs use external validation service
    if (reviewTitle === '') {
      toast.info('title cannot be empty');
      return;
    }
    if (description === '') {
      toast.info('description cannot be empty');
      return;
    }
    setTitle(reviewTitle);
    setDesc(description);
    setStars(starRating);
    console.log(`star rating state is ${description} stars is ${stars} starRating is ${starRating}`);

    updateReview(setReviews, setApiError, updatedReview);
    setIsEdit(false);
    // get submit edit button   set visibile to false
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
  };

  const preventCursorDisappearHandler = (e) => {
    const input = e.target.innerText;
    console.log(e);
    if (input === '') e.target.innerText = ' ';
  };

  return (
    <>
      {!isEdit && (
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
      {isEdit && (
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
    </>

  );
};

export default Review;
