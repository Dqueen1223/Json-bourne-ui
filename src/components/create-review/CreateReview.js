import React from 'react';
import ReviewForm from './CreateReviewForm';
import ShowReview from './ShowReview';
import styles from './PromoForm.module.css';

const Reviews = ({
  onClick, onChange, errors, reviews
}) => {
  return (
    <>
      <div className={styles.reviews}>
        <ReviewForm
          errors={errors}
          onChange={onChange}
          onClick={onClick}
        />
        {reviews.map(({
          review
        }) => (
          <ShowReview
            review={review}
          />
        ))}
      </div>
    </>
  );
};

export default Reviews;
