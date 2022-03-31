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
    <div className = "movies">
      {movies.map(movie =>
        <Movie
        title={movie.title}
          key = {movie.id}
          poster={movie.poster}
          director={movie.director} 
          year={movie.year} 
          genre={movie.genre}
          rating={movie.rating}/>
      )
      }
    </div>
   <MovieList movies= {movies}/>
  </>
);

render(<App />, document.querySelector('#app'));
