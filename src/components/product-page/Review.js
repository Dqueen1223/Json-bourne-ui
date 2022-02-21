import React from 'react';
import Delete from '@material-ui/icons/Delete';
import BasicRating from './ReviewsStars';
import { deleteReview } from './ReviewService';
import { useConfirm } from 'material-ui-confirm';

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
  const confirm = useConfirm();

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
    confirm({
      title: 'Are you sure you would like to delete this review?',
      description: 'This action can not be undone.',
      confirmationText: 'Delete',
      confirmationButtonProps: { primary: 'success' }
    })
      .then(() => deleteReview(setReviews, setApiError, deletedReview));
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
              <Delete className="pencilIcon" alt="pencilIcon" onClick={(e) => (submitDeleteHandler(e))} />
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
    </>

  );
};

export default Review;
