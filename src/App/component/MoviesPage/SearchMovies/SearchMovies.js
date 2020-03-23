import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { form, formInput, formButton } from './SearchMovies.module.css';

class SearchMovies extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.searchMovies(query);
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={form}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          placeholder="Search Movies"
          className={formInput}
          required
        />
        <button type="submit" className={formButton}>
          Search
        </button>
      </form>
    );
  }
}

SearchMovies.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default SearchMovies;
