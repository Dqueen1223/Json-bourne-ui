import React from 'react';
import FormItemTextArea from '../form/FormItemTextArea';
import FormItem from '../form/FormItem';
import BasicRating from './forms/ReviewsStars';
import styles from './CreateReview.module.css';

const ReviewForm = ({
  onClick, onChange, rating, setRating
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
        className={styles.review}
        onChange={onChange}
        // value={review.code}
        // error={errors.code}
      />
      <FormItemTextArea
        id="reviewDescription"
        label="Add Review"
        className={styles.review}
        onChange={onChange}
        // value={review.code}
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
