import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import service from './component/service/apiService';
import Header from './component/Header/Header';
import './App.module.css';

const HomePage = lazy(() =>
  import('./component/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './component/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './component/MoviesPage/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      trendingMoviesDate: [],
      searchingMoviesDate: [],
      movie: {},
      error: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.fatchTrending();
  }

  fatchTrending = async () => {
    try {
      this.setState(() => ({ isLoading: true }));
      const { trendingMoviesDate } = await service.fetchTrendingMovies();
      this.setState(() => ({ trendingMoviesDate }));
      this.setState(() => ({ isLoading: false }));
    } catch (error) {
      this.setState(() => ({ error }));
    }
  };

  searchMovies = async query => {
    try {
      this.setState(() => ({ isLoading: true }));
      service.searchQuery(query);
      const { searchingMoviesDate } = await service.fetchSearchMovies();
      this.setState(() => ({ searchingMoviesDate }));
      this.setState(() => ({ isLoading: false }));
    } catch (error) {
      this.setState(() => ({ error }));
    }
  };

  openMovie = async id => {
    try {
      this.setState(() => ({ isLoading: true }));
      service.giveMovieId(id);
      const { movie } = await service.fatchMovie();
      this.setState(() => ({ movie }));
      this.setState(() => ({ isLoading: false }));
    } catch (error) {
      this.setState(() => ({ error }));
    }
  };

  render() {
    const {
      trendingMoviesDate,
      searchingMoviesDate,
      movie,
      error,
      isLoading,
    } = this.state;

    return (
      <>
        {error !== '' && <p>Error: {error}</p>}
        <Header />
        {isLoading === true ? (
          <div>Loading...</div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                path="/"
                exact
                render={({ location }) => {
                  return (
                    <HomePage
                      location={location}
                      trendingMoviesDate={trendingMoviesDate}
                    />
                  );
                }}
              />
              <Route
                path="/movies/:movieId"
                render={({ match, location, history }) => {
                  return (
                    <MovieDetailsPage
                      location={location}
                      match={match}
                      history={history}
                      movie={movie}
                      openMovie={this.openMovie}
                    />
                  );
                }}
              />
              <Route
                path="/movies"
                render={({ location }) => {
                  return (
                    <MoviesPage
                      location={location}
                      searchingMoviesDate={searchingMoviesDate}
                      searchMovies={this.searchMovies}
                    />
                  );
                }}
              />
              <Redirect to="/" />
            </Switch>
          </Suspense>
        )}
      </>
    );
  }
}

export default App;
