import React from 'react';
import StarRatingComponent from 'react-star-rating-component'





const Rater = ({ filterRate, movieRating, rating, setRating }) => {


  const handleChange = value => {
   
    setRating(value)
  };

  return (
    <span className="ratingContent">
      {filterRate ?
        <StarRatingComponent  onChange={handleChange} value={rating} />
        :
        <StarRatingComponent value={movieRating} disabled className="movieRating" />
      }

    </span>
  );
}

export default Rater
