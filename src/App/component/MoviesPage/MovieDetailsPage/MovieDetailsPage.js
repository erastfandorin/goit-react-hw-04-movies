import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  movieBox,
  descriptionMovie,
  movieImg,
  moreBox,
  movieButton,
} from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

class MovieDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  componentDidMount() {
    const { movie, match, openMovie } = this.props;
    if (movie.id !== Number(match.params.movieId)) {
      openMovie(match.params.movieId);
    }
    this.toPercent(movie.vote_average);
  }

  toPercent = vote => {
    const score = vote * 10;
    this.setState({ score });
  };

  goBack = () => {
    const { location, history } = this.props;
    if (location.state) {
      history.push(location.state.from.pathname);
    } else {
      history.push('/');
    }
  };

  render() {
    const { movie, match } = this.props;
    const { score } = this.state;

    return (
      <>
        <button className={movieButton} type="button" onClick={this.goBack}>
          &#8592; Go back
        </button>
        <div className={movieBox}>
          {movie.poster_path === undefined ? (
            <div>Loading...</div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className={movieImg}
            />
          )}

          <div className={descriptionMovie}>
            <h1>{movie.original_title}</h1>
            <p>User score: {score}%</p>
            <strong>Overview</strong>
            <p>{movie.overview}</p>
            <strong>Genres</strong>
            <ul>
              {movie.genres &&
                movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
        </div>
        <div className={moreBox}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            path={`${match.path}/cast`}
            render={() => {
              return <Cast movie={movie} />;
            }}
          />
          <Route
            path={`${match.path}/reviews`}
            render={() => {
              return <Reviews movie={movie} />;
            }}
          />
        </Suspense>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.shape({
    vote_average: PropTypes.number,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ movieId: PropTypes.string }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  openMovie: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MovieDetailsPage;
