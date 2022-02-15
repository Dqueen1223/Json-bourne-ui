import React, { useState } from 'react';
import ReviewForm from './CreateReviewForm';
import styles from './CreateReview.module.css';
import { useProfile } from '../Profile/ProfileContext';
// import fetchUserByEmail from './CreateReviewService';

const CreateReview = ({ productId }) => {
  const [review, setReviewData] = useState({});
  // const [errors, setErrors] = useState({});
  const {
    state: { userProfile }
  } = useProfile();
  console.log(userProfile);
  const onReviewChange = (e) => {
    setReviewData({ ...review, [e.target.id]: e.target.value });
    // setErrors({});
  };

  const handleCreate = async () => {
    // const userData = await fetchUserByEmail(userProfile[0].email);
    const newReview = {
      Rating: review.rating,
      Title: review.title,
      ReviewDescription: review.reviewDescription,
      Email: userProfile[0].email,
      ProductId: productId
    };
    console.log(newReview);
    // setReviewData(newReview);
  };

  return (
    <>
      <div className={styles.review}>
        <ReviewForm
          // errors={errors}
          onChange={onReviewChange}
          onClick={handleCreate}
        />
      </div>
    </>
  );
};

export default CreateReview;
