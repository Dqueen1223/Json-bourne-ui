import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import * as React from 'react';
import BasicRating from './ReviewsStars';
import CreateReview from '../create-review/CreateReview';

// import styles from './ProductPage.module.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */
// const [review, setReview] = useState([]);

const ReviewsModal = ({ product, reviews, closeModal }) => {
  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
    }
  };
  // const sortedReviews = () => {
  //   reviews.sort((a, b) => b.dateCreated - a.dateCreated);
  //   {
  //     return b.dateCreated - a.dateCreated;
  //   };
  // };
  // const toggleSortDate = () => {
  //   const { postList } = toggleSortDate;
  //   const newPostList = postList.reverse();
  //   toggleSortDate({
  //     postList: newPostList.sort((a, b) => a.dateCreated > b.dateCreated)
  //   });
  // };
  const toggleReviews = (a, b) => {
    const sortReviews = new Date(b) - new Date(a);
    return sortReviews;
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
            {/*  mapping the reviews to each product based off of the product id. */}
            {reviews && reviews.filter((r) => (r.productId === product.id)).map((review) => (

              <div key={review.id}>
                <button
                  type="button"
                  className="reviewsOrderButton"
                  onClick={() => {
                    console.log(review.dateCreated.slice(0, 10));
                    // document.getElementsByClassName('reviewsDate');
                    toggleReviews();
                  }}
                >
                  Order by Date
                </button>
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
            <Accordion
              disableSpacing
              className="createReview"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Create Review
              </AccordionSummary>
              <AccordionDetails>
                <CreateReview
                  productId={product.id}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
