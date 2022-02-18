import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import BasicRating from './ReviewsStars';

/**
 * @name Review
 * @description Displays the review
 * @return component
 */
const Review = ({ review }, name) => (

  <div className="reviewsOfProduct">
    <div className="reviewsTitle">{name}</div>
    <div className="reviewsActual">
      {review.title}
      <FaPencilAlt className="pencilIcon" alt="pencilIcon" />
    </div>
    <div className="reviewsRating">{BasicRating(review.rating)}</div>
    <div className="reviewsDescription">
      {review.reviewsDescription}
    </div>
    <div className="reviewsDate">
      {review.dateCreated}
    </div>
  </div>
);

export default Review;
