import React from 'react';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchMovies from './SearchMovies/SearchMovies';
import MoviesList from '../MoviesList/MoviesList';

const MoviesPage = ({ location, searchingMoviesDate, searchMovies }) => {
  return (
    <>
      <SearchMovies searchMovies={searchMovies} />
      {searchingMoviesDate.length > 0 && (
        <MoviesList films={searchingMoviesDate} location={location} />
      )}
    </>
  );
};

MoviesPage.propTypes = {
  searchingMoviesDate: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchMovies: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default MoviesPage;
