// ReviewList.js
import React from 'react';
import ReviewItem from './ReviewItem';

function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <ReviewItem key={review.REVIEW_ID} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
