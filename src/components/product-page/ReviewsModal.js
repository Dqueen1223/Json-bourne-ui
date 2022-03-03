import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BasicRating from './ReviewsStars';
import CreateReview from '../create-review/CreateReview';
import { useProfile } from '../Profile/ProfileContext';
import Review from './Review';
import './ReviewsModal.css';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ReviewsModal = ({
  product, closeModal, reviews, showCreateReview, setReviewFormToggle, setUpdateReviews
}) => {
  // eslint-disable-next-line max-len
  const [newReview, setReviewData] = React.useState('empty');
  const [editing, setEditing] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [activeReviews] = React.useState(reviews.filter((r) => (r.productId === product.id)));
  const {
    state: { userProfile }
  } = useProfile();

  useEffect(() => {
    if (userProfile.length > 1) {
      if (typeof userProfile[1].email !== 'undefined') {
        setEmail(userProfile[1].email);
      }
    }
  }, [userProfile, setEmail]);
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
      {editing && <div className="reviewsModalBackgroundBlocker" />}
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
                <Review
                  setEditing={setEditing}
                  editing={editing}
                  review={review}
                  setUpdateReviews={setUpdateReviews}
                  email={email}
                />
              </div>
            ))}

            <UpdateReview />
            <div className="reviewsModal-footer" />
          </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
