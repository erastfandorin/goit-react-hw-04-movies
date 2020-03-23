import React from 'react';
import PropTypes from 'prop-types';
import imgAvatarCastProfile from '../../../../../img/avatarCast.png';
import { actorItemList, actorItemImg, actorItem } from './Cast.module.css';

const Cast = ({ movie }) => {
  window.scrollBy({
    top: 500,
    behavior: 'smooth',
  });
  return (
    <>
      <ul className={actorItemList}>
        {movie.credits.cast.map(actor => (
          <li key={actor.credit_id} className={actorItem}>
            <img
              src={
                actor.profile_path === null
                  ? imgAvatarCastProfile
                  : `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              }
              alt={actor.name}
              className={actorItemImg}
            />
            <h4>{actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

Cast.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    credits: PropTypes.shape({
      cast: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default Cast;
