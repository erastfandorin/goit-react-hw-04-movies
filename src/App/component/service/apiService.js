const BASE_URL = 'https://api.themoviedb.org/3/';

export default {
  key: 'a0940a91a6adf20d77802d03a6798bb2',
  query: '',
  filmId: '',
  async fetchTrendingMovies() {
    try {
      const requestUrl = `trending/movie/day?api_key=${this.key}`;
      const response = await fetch(BASE_URL + requestUrl);
      const parsedResponse = await response.json();
      const trendingMoviesDate = await parsedResponse.results;
      return { trendingMoviesDate };
    } catch (err) {
      return err;
    }
  },
  searchQuery(string) {
    this.query = string;
  },
  async fetchSearchMovies() {
    try {
      const requestUrl = `search/movie?api_key=${this.key}&query=${this.query}`;
      const response = await fetch(BASE_URL + requestUrl);
      const parsedResponse = await response.json();
      const searchingMoviesDate = await parsedResponse.results;
      return { searchingMoviesDate };
    } catch (err) {
      return err;
    }
  },
  giveMovieId(id) {
    this.filmId = id;
  },
  async fatchMovie() {
    try {
      const requestUrl = `movie/${this.filmId}?api_key=${this.key}&append_to_response=reviews,credits`;
      const response = await fetch(BASE_URL + requestUrl);
      const movie = await response.json();
      return { movie };
    } catch (err) {
      return err;
    }
  },
};
