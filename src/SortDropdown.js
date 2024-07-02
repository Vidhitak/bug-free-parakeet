// SortDropdown.js
import React from 'react';

function SortDropdown() {
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    console.log('Sorting by:', sortBy); // Placeholder for sorting logic
    // Implement sorting logic here
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort By: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="newest">Newest</option>
        <option value="highest">Highest Rating</option>
        <option value="lowest">Lowest Rating</option>
      </select>
    </div>
  );
}

export default SortDropdown;
