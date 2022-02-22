import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ReviewForm from './CreateReviewForm';
import styles from './CreateReview.module.css';
import { useProfile } from '../Profile/ProfileContext';
import makeReview from './CreateReviewService';
// import fetchProducts from '../product-page/ProductPageService';

const CreateReview = ({ productId }) => {
  const [review, setReviewData] = useState({});
  const [rating, setRating] = useState(2);
  // const [errors, setErrors] = useState({});
  const {
    state: { userProfile }
  } = useProfile();

  const onReviewChange = (e) => {
    setReviewData({ ...review, [e.target.id]: e.target.value });
    // setErrors({});
  };

  const handleCreate = () => {
    if (userProfile[0]) {
      const newReview = {
        Rating: rating,
        Title: review.title,
        ReviewsDescription: review.reviewDescription,
        Email: userProfile[0].email,
        ProductId: productId,
        DateCreated: new Date().toISOString(),
        UserId: 1
      };
      // console.log(fetchProducts(userProfile[0].email));

      makeReview(newReview);
    } else {
      toast.error('Must be signed in to create a review');
    }
  };

  const handleSubmit = async () => {
    handleCreate();
    // if (Object.keys(errors).length === 0) {
    //   if (await makePromo(review) !== 'Bad Request') {
    //     await makeReview(review);
    //   } else {
    //     toast.error('Bad Request');
    //   }
    // } else {
    //   toast.error('Some fields contain invalid inputs.');
    // }
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
