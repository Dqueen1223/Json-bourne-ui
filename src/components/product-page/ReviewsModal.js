import * as React from 'react';
// import fetchReviews from './ReviewService';
import BasicRating from './ReviewsStars';

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
  // const toggleSortDate = () => {
  //   const { postList } = toggleSortDate;
  //   const newPostList = postList.reverse();
  //   toggleSortDate({
  //     postList: newPostList.sort((a, b) => a.dateCreated > b.dateCreated)
  //   });
  // };
  // const toggleReviews = (e) => {
  //   console.log(e.target);
  //   const sortReviews = new Date(r) - new Date(e.target.value);
  //   return sortReviews;
  // };

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
          </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
