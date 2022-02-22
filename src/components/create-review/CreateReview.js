import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReviewForm from './CreateReviewForm';
import styles from './CreateReview.module.css';
import { useProfile } from '../Profile/ProfileContext';
import makeReview from './CreateReviewService';
import generateErrors from './forms/FormValidation';
// import fetchProducts from '../product-page/ProductPageService';

const CreateReview = ({ productId, reviewFormToggle }) => {
  const [review, setReviewData] = useState({});
  const [rating, setRating] = useState(2);
  const [errors, setErrors] = useState({});

  const {
    state: { userProfile }
  } = useProfile();

  const onReviewChange = (e) => {
    setReviewData({ ...review, [e.target.id]: e.target.value });
    setErrors({});
  };

  const handleErrors = (form) => {
    const idList = Object.keys(form);
    const errorLists = generateErrors(form, idList);

    for (let i = 0; i < idList.length; i += 1) {
      const id = idList[i];
      if (errorLists[id]) {
        errors[id] = errorLists[id];
      }
      if (errorLists.date) {
        errors.date = errorLists.date;
      }
    }
    setErrors(errors);
  };

  const handleCreate = () => {
    if (userProfile[1]) {
      const newReview = {
        Rating: rating,
        Title: review.title,
        ReviewsDescription: review.reviewDescription,
        Email: userProfile[1].email,
        ProductId: productId,
        DateCreated: new Date().toISOString(),
        UserId: userProfile[1].id
      };

      handleErrors(newReview);
      setReviewData(newReview);
    } else {
      toast.error('Must be signed in to create a review');
    }
  };

  const handleSubmit = async () => {
    handleCreate();

    if (Object.keys(errors).length === 0) {
      if (await makeReview(review) !== 'Bad Request') {
        await makeReview(review);
        reviewFormToggle(false);
      } else {
        toast.error('Bad Request');
      }
    } else {
      toast.error('Some fields contain invalid inputs.');
    }
  };

  return (
    <>
      <div className={styles.review}>
        <ReviewForm
          // errors={errors}
          onChange={onReviewChange}
          onClick={handleSubmit}
          rating={rating}
          setRating={setRating}
          review={review}
        />
      </div>
    </>
  );
};

export default CreateReview;
