import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <h4>length: {movie.time}min</h4>
            <h4>genres: </h4>
            <ul>
              {movie.genres.map((le, index) => (
                <li key={index}>{le}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
