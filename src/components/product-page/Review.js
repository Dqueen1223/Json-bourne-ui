import React, { useEffect } from 'react';
import reactDom from 'react-dom';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Delete from '@material-ui/icons/Delete';
import Rating from '@mui/material/Rating';
import ConfirmModal from '../checkout-page/ConfirmModal';
import { updateReview, deleteReview } from './ReviewService';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({
  review, email, setUpdateReviews, setEditing, editing
}) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDeleted, setIsDeleted] = React.useState(false);
  // const [value, setValue] = React.useState();
  const [desc, setDesc] = React.useState(review.reviewsDescription);
  const [title, setTitle] = React.useState(review.title);
  const [stars, setStars] = React.useState(review.rating);
  const [apiError, setApiError] = React.useState(false);
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const [goAhead, setGoAhead] = React.useState(false);
  // eslint-disable-next-line max-len
  const [currentRating, setCurrentRating] = React.useState(<Rating name="half-rating-read" defaultValue={stars} precision={stars} readOnly />);
  console.log(`review id ${review.id} product id ${review.productId}`);
  // The following useEffect is for DELETING a review
  useEffect(() => {
    if (goAhead) {
      const deletedReview = {
        id: review.id,
        rating: stars,
        title,
        reviewsDescription: desc,
        email: review.email,
        productId: review.productId,
        uerId: review.userId,
        dateCreated: review.dateCreated
      };
      deleteReview(setIsDeleted, setApiError, deletedReview);
      setUpdateReviews(true);
      setGoAhead(false);
    }
  }, [goAhead, review, desc, isDeleted, setUpdateReviews, stars, title]);
  useEffect(() => {
    if (apiError) {
      toast.error('Cannot connect to the database');
    }
  }, [apiError]);

  const editHandler = () => {
    setIsEdit(!isEdit);
    setEditing(!editing);
  };

  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle').innerText.trim();
    const description = reviewElement.querySelector('.reviewsDescription').innerText.trim();
    const updatedReview = {
      id: review.id,
      rating: stars,
      title: reviewTitle,
      reviewsDescription: description,
      email: review.email,
      productId: review.productId,
      uerId: review.userId,
      dateCreated: review.dateCreated
    };
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
    setCurrentRating(<Rating name="half-rating-read" defaultValue={stars} precision={stars} readOnly />);
    updateReview(setUpdateReviews, setApiError, updatedReview);
    setUpdateReviews(true);
    const btnSubmit = reviewElement.querySelector('.btnSubmitEditReview');
    btnSubmit.style.visibility = 'hidden';
    setIsEdit(false);
    setEditing(false);
  };

  const preventCursorDisappearHandler = (e) => {
    const input = e.target.innerText;
    setTitle(e.target.innerText);
    if (input === '') {
      e.target.innerText = ' ';
    }
  };
  const preventCursorDisappearHandlerDescription = (e) => {
    setDesc(e.target.innerText);
    const input = e.target.innerText;
    if (input === '') {
      e.target.innerText = ' ';
    }
  };
  const showTitleErrors = (e) => {
    if (Number(50 - e.target.innerText.length) < 0) {
      e.target.parentNode.parentNode.children[2].classList.remove('hidden');
      e.target.parentNode.parentNode.children[1].classList.add('hidden');
    } else if (Number(50 - e.target.innerText.length) < 8) {
      e.target.parentNode.parentNode.children[1].classList.remove('hidden');
      e.target.parentNode.parentNode.children[2].classList.add('hidden');
    } else {
      e.target.parentNode.parentNode.children[2].classList.add('hidden');
      e.target.parentNode.parentNode.children[1].classList.add('hidden');
    }
  };
  const showDescriptionErrors = (e) => {
    if (Number(300 - e.target.innerText.length) < 0) {
      e.target.parentNode.children[6].classList.remove('hidden');
      e.target.parentNode.children[5].classList.add('hidden');
    } else if (Number(300 - e.target.innerText.length) < 45) {
      e.target.parentNode.children[5].classList.remove('hidden');
      e.target.parentNode.children[6].classList.add('hidden');
    } else {
      e.target.parentNode.children[5].classList.add('hidden');
      e.target.parentNode.children[6].classList.add('hidden');
    }
  };

  const openModal = () => {
    setConfirmationOpen(true);
  };

  return (
    <>
      {confirmationOpen && reactDom.createPortal(
        <ConfirmModal
          setConfirm={setGoAhead}
          setDeleteConfirmationModal={setConfirmationOpen}
          confirmMessage="Are you sure you would like to delete this review? This action can not be undone."
        />,
        document.getElementById('root')
      )}
      { /* if the current review is not being edited, and is associated with the signed in user */ }
      {(review.email === email) && !isEdit && (
      <div className="reviewsOfProduct">
        <div className="titleContainer">
          <div className="reviewsTitle">
            { title || review.title }
          </div>
          <div className="icons">
            <span>
              <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
              <Delete className="trashIcon" alt="pencilIcon" onClick={openModal} />
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
      {(review.email === email) && isEdit && (
        <div className="reviewsOfProduct">
          <div className="titleContainer">
            <div className="reviewsTitle editable" contentEditable suppressContentEditableWarning onInput={(e) => { preventCursorDisappearHandler(e); showTitleErrors(e); }}>
              { review.title }
            </div>
            <div>
              <span>
                <FaPencilAlt className="pencilIcon" alt="pencilIcon" onClick={editHandler} />
                <Delete className="trashIcon" alt="pencilIcon" onClick={openModal} />
              </span>
            </div>
          </div>
          <div className="titleErrorContainer hidden">
            Remaining Characters:&nbsp;
            {Number(50 - title.length)}
          </div>
          <div className="titleErrorContainer red hidden">
            Character limit exceeded:
            {'    '}
            { title.length }
            {' '}
            of 50 used
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
          <div className="reviewsDescription editable" contentEditable suppressContentEditableWarning onInput={(e) => { preventCursorDisappearHandlerDescription(e); showDescriptionErrors(e); }}>
            {review.reviewsDescription}
          </div>
          <div className="descriptionErrorContainer hidden">
            Remaining Characters:&nbsp;
            {Number(300 - desc.length)}
          </div>
          <div className="descriptionErrorContainer red hidden">
            Character limit exceeded:
            {'    '}
            { desc.length }
            {' '}
            of 300 used
          </div>
          <div className="reviewsDate">
            created on:
            {' '}
            {review.dateCreated.slice(0, 10)}
          </div>
          <button type="button" className="btnSubmitEditReview" onClick={(e) => (submitEditHandler(e))}>Submit</button>
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
