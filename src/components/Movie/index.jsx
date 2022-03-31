import React from 'react';


const Movie = ({title, poster, year, rating, director, genre}) => {
    return (
    <div className="one_movie">
      <h2>{title}</h2>
        
        <img className ="poster" src={ '/assets/' + poster} alt="Plakát k filmu" />
        
        <ul>
            <li>Režie: {director}</li>
            <li>Rok vydání: {year}</li>
            <li>Žánr: {genre}</li>
            <li>Hodnocení: {rating}</li>
        </ul>
    </div>
    )
    };

export default Movie;