import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MoviesList = ({ films, location }) => {
  return (
    <>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <NavLink
              to={{
                pathname: `/movies/${film.id}`,
                state: { from: location },
              }}
            >
              {film.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default MoviesList;
