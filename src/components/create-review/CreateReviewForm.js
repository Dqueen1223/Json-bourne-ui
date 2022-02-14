import React from 'react';
import FormItemTextArea from '../form/FormItemTextArea';
import styles from './PromoForm.module.css';

const ReviewForm = ({
  onClick, onChange, errors, review
}) => {
  return (
    <>
      <div className={styles.createReview}>
        <FormItemTextArea
          id="review"
          label="Add Review"
          className={styles.review}
          onChange={onChange}
          value={review.code}
          error={errors.code}
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
};

export default ReviewForm;
