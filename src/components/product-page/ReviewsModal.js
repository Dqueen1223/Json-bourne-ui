import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import BasicRating from './ReviewsStars';
import CreateReview from '../create-review/CreateReview';
import { useProfile } from '../Profile/ProfileContext';
import './ReviewsModal.css';
import Review from './Review';

/**
 * @name ReviewModal
 * @description material-ui styling for product card review modal
 * @return component
 */

const ReviewsModal = ({
  product, closeModal, reviews, showCreateReview, setReviewFormToggle, setUpdateReviews, setReviews,
  setApiError, fetchReviews, updateReviews
}) => {
  const [newReview, setReviewData] = React.useState('empty');
  const [editing, setEditing] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [activeReviews, setActiveReviews] = React.useState(
    reviews.filter((r) => (r.productId === product.id))
  );
  useEffect(() => {
    setActiveReviews(reviews.filter((r) => (r.productId === product.id)));
  }, [updateReviews, product.id, reviews]);
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

  const sortByNewest = () => {
    if (!document.getElementsByClassName('reviewsModal-body')[0].classList.contains('reversed')) {
      document.getElementsByClassName('reviewsModal-body')[0].classList.add('reversed');
    // } else {
    //   document.getElementsByClassName('reviewsModal-body')[0].classList.remove('reversed');
    }
  };
  const sortByOldest = () => {
    if (document.getElementsByClassName('reviewsModal-body')[0].classList.contains('reversed')) {
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
          Sort By Date
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
            onClick={sortByNewest}
          >
            Newest to Oldest
          </MenuItem>
          <MenuItem
            // type="button"
            onClick={sortByOldest}
          >
            Oldest to Newest
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
            <div className="review-menu">
              {DropDownButton()}
              {email !== '' && (
                <Button
                  // type="button"
                  onClick={() => setReviewFormToggle(!showCreateReview)}
                  className="createReview"
                >
                  Add Review
                </Button>
              )}
              {email === '' && (
                <Button
                  sx={{
                    width: '50%',
                    color: 'gray'
                  }}
                  title="Must be logged in!"
                  className="createReview grey"
                >
                  Add Review
                </Button>
              )}
            </div>
          </div>
          <div className="createReview">
            {showCreateReview
              ? (
                <CreateReview
                  productId={product.id}
                  setNewReview={setReviewData}
                  setActiveReviews={setActiveReviews}
                  activeReviews={activeReviews}
                  newReview={newReview}
                  reviewFormToggle={setReviewFormToggle}
                  setUpdateReviews={setUpdateReviews}
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
                  setReviews={setReviews}
                  setApiError={setApiError}
                  fetchReviews={fetchReviews}
                />
              </div>
            ))}
            {/* <UpdateReview /> */}
            <div className="reviewsModal-footer" />
          </div>
          <div className="reviewsModal-footer" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsModal;
