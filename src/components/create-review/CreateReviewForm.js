import React from 'react';
import FormItemTextArea from './forms/FormItemTextArea';
import FormItem from './forms/FormItem';
import BasicRating from './forms/ReviewsStars';
import styles from './CreateReview.module.css';

const ReviewForm = ({
  onClick, onChange, rating, setRating, review
}) => (
  <>
    <div className={styles.createReview}>
      <BasicRating
        id="rating"
        onChange={onChange}
        rating={rating}
        setRating={setRating}
      // value={review.rating}
      />
      <FormItem
        id="title"
        label="Add Title"
        className={styles.title}
        onChange={onChange}
        value={review.title}
      // error={errors.code}
      />
      <FormItemTextArea
        id="reviewDescription"
        label="Add Review"
        className={styles.reviewDescription}
        onChange={onChange}
        value={review.reviewDescription}
        reviewLength={review.reviewDescription ? review.reviewDescription.length : 0}
      // error={errors.code}
      />
      <button
        type="button"
        className={styles.submitButton}
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  </>
);

export default ReviewForm;
