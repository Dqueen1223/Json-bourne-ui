import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Delete from '@material-ui/icons/Delete';
import BasicRating from './ReviewsStars';
import { updateReview, deleteReview } from './ReviewService';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews, setApiError) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [value, setValue] = React.useState();

  const [desc, setDesc] = React.useState();
  const [title, setTitle] = React.useState();
  const [stars, setStars] = React.useState();

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText;
    const description = reviewElement.querySelector('.reviewsDescription').innerText;
    const starRating = Number(reviewElement.querySelector('.starRating').innerText);
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
    setTitle(reviewTitle);
    setDesc(description);
    setStars(starRating);
    console.log(`star rating state is ${description} stars is ${stars} starRating is ${starRating}`);
    console.log(value);
    // perform validation on inputs use external validation service
    updateReview(setReviews, setApiError, updatedReview);
    setIsEdit(false);
    // get submit edit button   set visibile to false
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
  };

  const deleteHandler = () => {
    setIsDeleted(!isDeleted);
  };

  const submitDeleteHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText;
    const description = reviewElement.querySelector('.reviewsDescription').innerText;
    const starRating = Number(reviewElement.querySelector('.starRating').innerText);
    const deletedReview = {
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
    deleteReview(setReviews, setApiError, deletedReview);
    setIsDeleted(true);
    const btnSubmit = reviewElement.querySelector('.btnSubmitDeleteReview');
    btnSubmit.style.visibility = 'hidden';
  };

  return (
    <>
      {(!isDeleted) && (
        <div className="reviewsOfProduct">
          {!title && (
          <div className="reviewsTitle">
            { review.title }
              {/* <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} /> */}
              <Delete className="pencilIcon" alt="pencilIcon" onClick={deleteHandler} />
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
          <button type="button" className="btnSubmitDeleteReview" onClick={(e) => (submitDeleteHandler(e))}>Delete</button>
        </div>
      )}
      {/* {(isEdit && !isDeleted) && (
        <div className="reviewsOfProduct">
          {!title && (
          <div className="reviewsTitle" contentEditable suppressContentEditableWarning>
            { review.title }
              <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
              <Delete className="pencilIcon" alt="pencilIcon" onClick={deleteHandler} />
          </div>
          )}
          {title && (
          <div className="reviewsTitle" contentEditable suppressContentEditableWarning>
            { title }
              <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
              <Delete className="pencilIcon" alt="pencilIcon" onClick={deleteHandler} />
          </div>
          )}
          {!stars && (<div className="reviewsRating">{BasicRating(isEdit, value, setValue, review.rating)}</div>)}
          {stars && (<div className="reviewsRating">{BasicRating(isEdit, stars, setStars)}</div>)}
          {!desc && (
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning>
            {review.reviewsDescription}
          </div>
          )}
          {desc && (
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning>
            {desc}
          </div>
          )}
          <div className="reviewsDate">
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
          <button type="button" className="btnSubmitDeleteReview" onClick={(e) => (submitDeleteHandler(e))}>Delete</button>
        </div>
      )} */}
      {isDeleted && (
        <div className="reviewsOfProduct">
          {/* <button type="button" className="btnSubmitDeleteReview" onClick={(e) => (submitDeleteHandler(e))}>Delete</button> */}
        </div>
      )}
    </>

  );
};

export default Review;
