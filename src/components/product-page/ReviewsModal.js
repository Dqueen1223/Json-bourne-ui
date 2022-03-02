import React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BasicRating from './ReviewsStars';
import CreateReview from '../create-review/CreateReview';
import './ReviewsModal.css';
import Review from './Review';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ReviewsModal = ({
  product, closeModal, reviews, showCreateReview, setReviewFormToggle, setUpdateReviews
}) => {
  const [newReview, setReviewData] = React.useState('empty');
  const [activeReviews] = React.useState(reviews.filter((r) => (r.productId === product.id)));

  const UpdateReview = () => {
    if (newReview !== 'empty') {
      return (
        <div key={newReview.id}>
          <div className="reviewsOfProduct">
            <div className="reviewsTitle">{newReview.title}</div>
            <div className="reviewsRating">{BasicRating(newReview.rating)}</div>
            <div className="reviewsActual">{newReview.reviewsDescription}</div>
            <div className="reviewsDate">
              {/* slicing off the last few extra digits associated with the date */}
              {newReview.dateCreated.slice(0, 10)}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const sortedReviews = () => {
    if (!document.getElementsByClassName('reviewsModal-body')[0].classList.contains('reversed')) {
      document.getElementsByClassName('reviewsModal-body')[0].classList.add('reversed');
    } else {
      document.getElementsByClassName('reviewsModal-body')[0].classList.remove('reversed');
    }
  };

  const closeTheModal = (e) => {
    if (e.target.className === 'reviewsModalBackground' || e.target.className === 'reviewscloseButton') {
      closeModal(false);
      setReviewFormToggle(false);
    }
  };

  const DropDownButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div className="reviewModalDashboard">
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Review Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem
            // type="button"
            className="reviewsOrderButton"
            onClick={sortedReviews}
          >
            Order by Date
          </MenuItem>
          <MenuItem
            // type="button"
            onClick={() => setReviewFormToggle(!showCreateReview)}
            className="createReview"
          >
            Add Review
          </MenuItem>
        </Menu>
      </div>
    );
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
            <div className="productNameReviewModal">
              {product.name}
            </div>
            <div className="dropdown-menu">
              {DropDownButton()}
            </div>
          </div>
          <div className="createReview">
            {showCreateReview
              ? (
                <CreateReview
                  productId={product.id}
                  setNewReview={setReviewData}
                  newReview={newReview}
                  reviewFormToggle={setReviewFormToggle}
                />
              )
              : null}
          </div>
          <div className="reviewsModal-body">
            {/*  mapping the reviews to each product based off of the product id. */}
            {reviews && activeReviews.map((review) => (
              <div key={review.id}>
                <div className="reviewsOfProduct">
                  <div className="reviewsTitle">{review.title}</div>
                  <button
                    type="button"
                    onClick={UpdateReview}
                  >
                    click me to update
                  </button>
                  <div className="reviewsEmail">{review.email}</div>
                  <div className="reviewsRating">{BasicRating(review.rating)}</div>
                  <div className="reviewsActual">{review.reviewsDescription}</div>
                  <div className="reviewsDate">
                    {/* slicing off the last few extra digits associated with the date */}
                    {review.dateCreated.slice(0, 10)}
                  </div>
                </div>
                <Review
                  review={review}
                  setUpdateReviews={setUpdateReviews}
                  // email={email}
                />
              </div>
            ))}
            <div className="reviewsModal-footer" />
          </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
