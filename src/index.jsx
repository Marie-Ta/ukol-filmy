import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Header from './components/Header';
import Movie from './components/Movie';

import movies from './movies.js';
import MovieList from './components/MovieList';

const App = () => (
  <>
   <Header/>
    <div>
      {movies.map(movie =>
        <Movie
          director={movies.director} 
          year={movies.year} 
          genre={movies.genre}
          rating={movies.rating}/>
      )
      }
    </div>
    
     

  </>
);

render(<App />, document.querySelector('#app'));
