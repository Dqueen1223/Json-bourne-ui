import React from 'react';
import { AccordionDetails, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import * as React from 'react';
import BasicRating from './ReviewsStars';
import CreateReview from '../create-review/CreateReview';
import DropDownButton from './DropDownButton';

// import styles from './ProductPage.module.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ReviewsModal = ({ product, reviews, closeModal }) => {
  // eslint-disable-next-line max-len
  const [activeReviews] = React.useState(reviews.filter((r) => (r.productId === product.id)));
  // const [toggleDate, setToggle] = React.useState(true);

  const sortedReviews = () => {
    console.log('ive been clicked!');
    if (!document.getElementsByClassName('reviewsModal-body')[0].classList.contains('reversed')) {
      // setActiveReviews(activeReviews.sort((a, b) => b.dateCreated - a.dateCreated));
      document.getElementsByClassName('reviewsModal-body')[0].classList.add('reversed');
    } else {
      document.getElementsByClassName('reviewsModal-body')[0].classList.remove('reversed');
      // setActiveReviews(activeReviews.sort((a, b) => a.dateCreated - b.dateCreated));
    }
    // setToggle(!toggleDate);
    // return activeReviews;
  };

  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
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
            <DropDownButton />
            <button
              type="button"
              className="reviewsOrderButton"
              onClick={sortedReviews}
            >
              Order by Date
            </button>

          </div>
          <div className="reviewsModal-body">
            {/*  mapping the reviews to each product based off of the product id. */}
            {reviews && activeReviews.map((review) => (

              <div key={review.id}>
                <div className="reviewsOfProduct">
                  <div className="reviewsTitle">{review.title}</div>
                  <div className="reviewsRating">{BasicRating(review.rating)}</div>
                  <div className="reviewsActual">{review.reviewsDescription}</div>
                  <div className="reviewsDate">
                    {/* slicing off the last few extra digits associated with the date */}
                    {review.dateCreated.slice(0, 10)}
                  </div>
                </div>
              </div>
            ))}
            <div className="reviewsModal-footer" />
              <Button
                disableSpacing
                className="createReview"
              >
                Add Review
              </Button>
            </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
