import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList/MoviesList';

const HomePage = ({ location, trendingMoviesDate }) => {
  return (
    <>
      <h1>Trending today</h1>
      <MoviesList films={trendingMoviesDate} location={location} />
    </>
  );
};

HomePage.propTypes = {
  trendingMoviesDate: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default HomePage;
