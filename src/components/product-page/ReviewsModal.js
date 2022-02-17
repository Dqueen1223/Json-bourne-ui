import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Delete from '@material-ui/icons/Delete';
import { updateReview, deleteReview } from './ReviewService';
import BasicRating from './ReviewsStars';

const userId = 1;
/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
const ReviewsModal = ({
  product, reviews, closeModal, setReviews, setApiError, isEditMode, setIsEditMode
}) => {
  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };
  const submitEditHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const editId = Number(reviewElement.id);
    const review = reviews.find((r) => r.id === editId);

    const updatedReview = {
      id: review.id,
      rating: review.rating,
      // rating: document.getElementById('rating'),
      title: reviewElement.querySelector('#title').innerText,
      reviewsDescription: reviewElement.querySelector('#description').innerText,
      email: review.email,
      productId: review.productId,
      // get user id
      userId: 1,
      dateCreated: review.dateCreated
    };

    // perform validation on inputs
    updateReview(setReviews, setApiError, updatedReview);
    reviewElement.querySelector('.btnSubmitEditReview').remove();
    setIsEditMode(false);
  };

  const editHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const reviewTitle = reviewElement.querySelector('.reviewsTitle');
    const reviewRating = reviewElement.querySelector('.reviewsRating');
    const reviewDescription = reviewElement.querySelector('.reviewsDescription');

    reviewTitle.contentEditable = 'true';
    reviewRating.contentEditable = 'true';
    reviewDescription.contentEditable = 'true';

    if (!reviewElement.querySelector('.btnSubmitEditReview')) {
      const btnSubmit = document.createElement('button');
      btnSubmit.innerHTML = 'Submit';
      btnSubmit.className = 'btnSubmitEditReview';
      btnSubmit.addEventListener('click', submitEditHandler);
      reviewElement.appendChild(btnSubmit);
    }
  };

  const submitDeleteHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    const deleteId = Number(reviewElement.id);
    const review = reviews.find((r) => r.id === deleteId);

    // const updatedReview = {
    //   id: review.id,
    //   rating: review.rating,
    //   // rating: document.getElementById('rating'),
    //   title: reviewElement.querySelector('#title').innerText,
    //   reviewsDescription: reviewElement.querySelector('#description').innerText,
    //   email: review.email,
    //   productId: review.productId,
    //   // get user id
    //   userId: 1,
    //   dateCreated: review.dateCreated
    // };

    // perform validation on inputs
    deleteReview(setReviews, setApiError, review);
    reviewElement.querySelector('.btnSubmitDeleteReview').remove();
    setIsEditMode(false);
  };

  const deleteHandler = (e) => {
    const reviewElement = e.target.closest('.reviewsOfProduct');
    // const reviewTitle = reviewElement.querySelector('.reviewsTitle');
    // const reviewRating = reviewElement.querySelector('.reviewsRating');
    // const reviewDescription = reviewElement.querySelector('.reviewsDescription');

    // reviewTitle.contentEditable = 'true';
    // reviewRating.contentEditable = 'true';
    // reviewDescription.contentEditable = 'true';

    if (!reviewElement.querySelector('.btnSubmitDeleteReview')) {
      const btnSubmit = document.createElement('button');
      btnSubmit.innerHTML = 'Delete';
      btnSubmit.className = 'btnSubmitDeleteReview';
      btnSubmit.addEventListener('click', submitDeleteHandler);
      reviewElement.appendChild(btnSubmit);
    }
  };

  return (
    <div
      className="reviewsModalBackground"
      onClick={closeTheModal}
      aria-hidden="true"
    >
      <div className="reviewsModal">
        <div className="reviewsModal-content">

          <div className="reviewsModal-header">
            <button
              type="button"
              className="reviewscloseButton"
              onClick={closeTheModal}
            >
              &times;
            </button>
          </div>
          <div className="productName">
            {product.name}
          </div>
          <div className="reviewsModal-body">
            <button
              type="button"
              className="reviewsOrderButton"
            >
              Newest First
            </button>
            {reviews && reviews.filter((r) => (r.productId === product.id)).map((review) => (
              <div key={review.id}>
                <div className="reviewsOfProduct" id={review.id}>
                  <div className="reviewsProductName">
                    {product.name}
                    {userId === 1 && <FaPencilAlt className="pencilIcon" onClick={(e) => { editHandler(e, { review }); }} />}
                    {userId === 1 && <Delete className="deleteIcon" onClick={(e) => { deleteHandler(e, { review }); }} />}
                  </div>
                  <div className="reviewsRating">{BasicRating(isEditMode, review.rating)}</div>
                  <div className="reviewsTitle" id="title">{review.title}</div>
                  <div className="reviewsDescription" id="description">
                    {review.reviewsDescription}
                  </div>
                  <div className="reviewsDate">
                    {review.dateCreated.slice(0, 10)}
                  </div>
                </div>
              </div>
            ))}
            <div className="reviewsModal-footer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
