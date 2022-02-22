import React, { useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Delete from '@material-ui/icons/Delete';
import { useConfirm } from 'material-ui-confirm';
import { updateReview, deleteReview } from './ReviewService';
import { useProfile } from '../Profile/ProfileContext';
import BasicRating from './ReviewsStars';
import Constants from '../../utils/constants';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, setReviews) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  const [value, setValue] = React.useState();
  const [desc, setDesc] = React.useState();
  const [title, setTitle] = React.useState();
  const [stars, setStars] = React.useState();
  const confirm = useConfirm();
  const [email, setEmail] = React.useState('');
  const [apiError, setApiError] = React.useState(false);
  console.log(`review id ${review.id} product id ${review.productId}`);
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

  const deleteHandler = () => {
    setIsDeleted(!isDeleted);
  };

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
      .then(() => deleteReview(setReviews, setApiError, deletedReview))
      .catch(() => console.log('Deletion cancelled.')).finally(() => deleteHandler(true));
    setIsDeleted(true);
    const btnSubmit = reviewElement.querySelector('.btnSubmitDeleteReview');
    btnSubmit.style.visibility = 'hidden';
    setIsEdit(false);
  };

  return (
    <>
      {apiError && <span className="reviewsApiError" data-testid="errMsg">{Constants.API_ERROR}</span>}
      {!apiError && (review.email === email) && !isEdit && (
      <div className="reviewsOfProduct">
        <div className="reviewsTitle">
          { title || review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
            <Delete className="pencilIcon" alt="pencilIcon" onClick={(e) => (submitDeleteHandler(e))} />
        </div>

        {!stars && (<div className="reviewsRating">{BasicRating(isEdit, review.rating, setValue)}</div>)}
        {stars && (<div className="reviewsRating">{BasicRating(isEdit, stars, setStars)}</div>)}

        <div className="reviewsDescription">
          {desc || review.reviewsDescription}
        </div>
        <div className="reviewsDate">
          {review.dateCreated.slice(0, 10)}
        </div>
        <button type="button" className="btnDummy">Submit</button>

      </div>
      )}
      {!apiError && (review.email === email) && isEdit && (
      <div className="reviewsOfProduct">
        <div className="reviewsTitle" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
          { title || review.title }
            <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
            <Delete className="pencilIcon" alt="pencilIcon" onClick={(e) => (submitDeleteHandler(e))} />
        </div>
        {!stars && (<div className="reviewsRating">{BasicRating(isEdit, value, setValue, review.rating)}</div>)}
        {stars && (<div className="reviewsRating">{BasicRating(isEdit, stars, setStars)}</div>)}

        <div className="reviewsDescription" contentEditable suppressContentEditableWarning onInput={preventCursorDisappearHandler}>
          {desc || review.reviewsDescription}
        </div>

        <div className="reviewsDate">
          {review.dateCreated.slice(0, 10)}
        </div>
        <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
      </div>
      )}
      {!apiError && (review.email !== email) && (
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
