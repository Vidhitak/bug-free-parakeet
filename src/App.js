import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import SortDropdown from './SortDropdown';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="App">
      <h1>Product Reviews</h1>
      <SortDropdown /> {/* Dropdown for sorting options */}
      <ReviewList reviews={reviews} /> {/* Display list of reviews */}
    </div>
  );
}

export default App;
