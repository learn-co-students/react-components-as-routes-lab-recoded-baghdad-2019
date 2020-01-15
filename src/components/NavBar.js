import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
   <div>
      <h1>Navbar</h1>
      
      {Navbar.map(actor =>
        <div>
        
          <h3>{Navbar.name}</h3>
          <ul>{Navbar.movies.map(movie =>
            <li>{movie}</li>
          )}</ul>
          
        </div>)}
    </div>
  );
};

export default NavBar;
