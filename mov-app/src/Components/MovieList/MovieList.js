import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({ movies, inputSearch, rating, AddMovie }) => {
  return (
    <div >
      <div className="movieList">
      {movies
        .filter(movie =>
          movie.title.toUpperCase().includes(inputSearch.toUpperCase())
          &&
          movie.rating >= rating
        )
        .map(movie =>
          <MovieCard movie={movie} key={movie.id} />
        )}
        </div>
<br/>

<div>
      <MovieCard className="addMovie" addCard={true} AddMovie={AddMovie} />
      </div> </div>
  )
}

export default MovieList
