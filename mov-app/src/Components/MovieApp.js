import React, { useState } from 'react'
import FilterByName from './filterByName/FilterByName';
import FilterByRating from './Rating/Rating'
import MovieList from './MovieList/MovieList';
import listMovies from './MoviesData'


const MovieApp = () => {
  const [movies, setMovies] = useState(listMovies);
  const [inputSearch, setInputSearch] = useState("");
  const [rating, setRating] = useState(1);

  const AddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }


  return (
    <div className="movieApp">
      <div className="Search">
        
        <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} /> </div>
        <br/>
        <div className="rate"> <FilterByRating filterRate={true} rating={rating} setRating={setRating} /></div>
        <hr style={{ margin: "70px 0" }} />

      <MovieList movies={movies} inputSearch={inputSearch} 
      rating={rating} AddMovie={AddMovie} />

      
    </div>
  )
}

export default MovieApp
