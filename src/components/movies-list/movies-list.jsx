import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

import Button from 'react-bootstrap/Button';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

const onLogOut = (e) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.open('/', '_self');
};

export function MoviesList(props) {
  const { movies, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase())
      || m.Director.Name.toLowerCase().includes(visibilityFilter.toLowerCase())
      || m.Genre.Name.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />;

  return <div className="movies-list">
    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    {filteredMovies.map(m => <MovieCard key={m._id} movie={m} />)}
    <footer>
      <p>Designed and created by Jen Hobbs. </p>
      <p>Movie data from IMDB. Photo's from UnSplash.</p>
    </footer>
  </div>;
}

export default connect(mapStateToProps)(MoviesList);
