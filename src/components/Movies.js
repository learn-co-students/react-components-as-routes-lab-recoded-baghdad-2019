import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      
      {Movies.map(actor =>
        <div>
        
          <h3>{Movies.name}</h3>
          <ul>{Movies.movies.map(movie =>
            <li>{movie}</li>
          )}</ul>
          
        </div>)}
    </div>
  );
};

export default Movies;
