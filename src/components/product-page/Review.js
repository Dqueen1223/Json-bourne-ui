import React, { useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Delete from '@material-ui/icons/Delete';
import { useConfirm } from 'material-ui-confirm';
import Rating from '@mui/material/Rating';
import { /* updateReview, */ deleteReview } from './ReviewService';
// import { useProfile } from '../Profile/ProfileContext';
// import BasicRating from './ReviewsStars';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review, email } /* , setReviews */) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  // const [value, setValue] = React.useState();
  const [desc, setDesc] = React.useState();
  const [title, setTitle] = React.useState();
  const [stars, setStars] = React.useState(review.rating);
  const [apiError, setApiError] = React.useState(false);
  const [currentRating] = React.useState(<Rating name="half-rating-read" defaultValue={review.rating} precision={review.rating} readOnly />);
  const confirm = useConfirm();
  console.log(`review id ${review.id} product id ${review.productId}`);
  /* const {
    state: { userProfile }
  } = useProfile(); */

  useEffect(() => {
    if (apiError) {
      toast.error('Cannot connect to the database');
    }
  }, [apiError]);

  const editHandler = () => {
    setIsEdit(!isEdit);
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText.trim();
    const description = reviewElement.querySelector('.reviewsDescription').innerText.trim();
    const starRating = Number(reviewElement.querySelector('.starRating').innerText.trim());
    /* const updatedReview = {
      id: review.id,
      rating: starRating,
      title: reviewTitle,
      reviewsDescription: description,
      email: review.email,
      productId: review.productId,
      uerId: review.userId,
      dateCreated: review.dateCreated
    }; */
    if (reviewTitle === '') {
      toast.info('title cannot be empty');
      reviewElement.querySelector('.reviewsTitle').focus();
      return;
    }
    if (reviewTitle.length > 50) {
      toast.info('title must be 50 characters or less');
      reviewElement.querySelector('.reviewsTitle').focus();
      return;
    }
    if (description === '') {
      toast.info('description cannot be empty');
      reviewElement.querySelector('.reviewsDescription').focus();
      return;
    }
    if (description.length > 500) {
      toast.info('description must be 500 characters or less');
      reviewElement.querySelector('.reviewsDescription').focus();
      return;
    }
    setTitle(reviewTitle);
    setDesc(description);
    setStars(starRating);
    // updateReview(setReviews, setApiError, updatedReview);
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
    setIsEdit(false);
  };

  const preventCursorDisappearHandler = (e) => {
    const input = e.target.innerText;
    if (input === '') {
      e.target.innerText = ' ';
    }
  };

  /* const deleteHandler = () => {
    setIsDeleted(!isDeleted);
  }; */

  const submitDeleteHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText.trim();
    const description = reviewElement.querySelector('.reviewsDescription').innerText.trim();
    const starRating = Number(reviewElement.querySelector('.starRating').innerText.trim());
    const deletedReview = {
      id: review.id,
      rating: starRating,
      title: reviewTitle,
      reviewsDescription: description,
      email: review.email,
      productId: review.productId,
      uerId: review.userId,
      dateCreated: review.dateCreated
    };
    confirm({
      title: 'Are you sure you would like to delete this review?',
      description: 'This action cannot be undone.',
      confirmationText: 'Delete'
    })
      .then(() => deleteReview(setIsDeleted, setApiError, deletedReview))
      .catch(() => console.log('Deletion cancelled.'));
    // setIsDeleted(true);
    // const btnSubmit = reviewElement.querySelector('.btnSubmitDeleteReview');
    // btnSubmit.style.visibility = 'hidden';
  };

  return (
    <>
      { /* if the current review is not being edited, and is associated with the signed in user */ }
      {(review.email === email) && !isEdit && !isDeleted && (
      <div className="reviewsOfProduct">
        <div className="titleContainer">
          <div className="reviewsTitle">
            { title || review.title }
          </div>
          <div>
            <span>
              <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
              <Delete className="pencilIcon" alt="pencilIcon" onClick={submitDeleteHandler} />
            </span>
          </div>
        </div>

        {!stars
          && (<div className="reviewsRating">{currentRating}</div>)}
        {stars && (<div className="reviewsRating">{currentRating}</div>)}
        {' '}
        <div className="reviewsDescription">
          {desc || review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          created on:
          {' '}
          {review.dateCreated.slice(0, 10)}
        </div>
        <button type="button" className="btnDummy">Submit</button>

      </div>
      )}
      { /* If the current review is being edited by the signed in user */}
      {(review.email === email) && isEdit && !isDeleted && (
        <div className="reviewsOfProduct">
          <div className="titleContainer">
            <div className="reviewsTitle" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
              { title || review.title }
            </div>
            <div>
              <span>
                <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
                <Delete className="pencilIcon" alt="pencilIcon" />
              </span>
            </div>
          </div>
          <div className="reviewsRating">
            <Rating
              name="simple-controlled"
              value={stars}
              onChange={(event, newValue) => {
                setStars(newValue);
              }}
            />
          </div>
          <div className="reviewsDescription" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
            {desc || review.reviewsDescription}
          </div>
          <div className="reviewsDate">
            created on:
            {' '}
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
        </div>
      )}
      {(review.email === email) && isDeleted && (
        <div className="reviewsOfProduct">
          test
        </div>
      )}
      { /* if the current review is not a review by the current user */}
      {(review.email !== email) && (
      <div className="reviewsOfProduct">
        <div className="reviewsTitle">
          {review.title}
        </div>
        <div className="reviewsRating">{currentRating}</div>
        <div className="reviewsDescription">
          {review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          created on:
          {' '}
          {review.dateCreated.slice(0, 10)}
        </div>
        <button type="button" className="btnDummy" onClick={submitEditHandler}>Submit</button>
      </div>
      )}
    </>
  );
};

export default Review;
