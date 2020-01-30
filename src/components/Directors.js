import React from 'react';
import { directors } from '../data';

const Directors = () => render() {
  return (
    <div>
      <h1>Directors Page</h1>
      {actors.map((actor,index) =>(
      <div key={index}>
      {actor.name}
     <ul>
     {actor.movies.map((movie,index) =>(<li key={index}>{movie}</li>)
     )}
     </ul>
      </div>
      ))}
    </div>
  );
}

export default Directors
