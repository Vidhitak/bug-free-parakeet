// ReviewItem.js
import React from 'react';

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3>{review.REVIEW_TITLE}</h3>
      <p>{review.REVIEW_TEXT}</p>
      <p>Rating: {review.RATING}</p>
      <p>Customer Name: {review.CUSTOMER_NAME}</p>
    </div>
  );
}

export default ReviewItem;
