import React from 'react';
import styles from './PromoForm.module.css';

const ShowReview = ({
  review
}) => {
  return (
    <>
      <div className={styles.reviews}>
        {review}
      </div>
    </>
  );
};

export default ShowReview;
