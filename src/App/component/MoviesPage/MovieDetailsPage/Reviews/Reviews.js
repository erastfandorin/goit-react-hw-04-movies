import React from 'react';
import PropTypes from 'prop-types';
import { reviewsItem } from './Reviews.module.css';

const Reviews = ({ movie }) => {
  window.scrollBy({
    top: 500,
    behavior: 'smooth',
  });
  return (
    <>
      <div>
        {movie.reviews.results.length <= 0 ? (
          <p>We don`t have any reviews for this movie.</p>
        ) : (
          <ul>
            {movie.reviews.results.map(review => (
              <li className={reviewsItem} key={review.id}>
                <strong>Author: {review.author}</strong>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    reviews: PropTypes.shape({
      results: PropTypes.array,
    }),
  }).isRequired,
};

export default Reviews;
