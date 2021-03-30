import React from 'react'
import { Card } from 'react-bootstrap'
import MovieRating from '../Rating/Rating'
import ModalAddMovie from '../AddMovie/AddMovie'

import './MovieCard.css'
import { Link } from 'react-router-dom'


const MovieCard = ({ movie, addCard, AddMovie }) => {
  return (
    addCard ?
    
        
         <div>
            <ModalAddMovie AddMovie={AddMovie} />
         
            </div>
      :
      <Link to={`/MovieApp/${movie.id}`} >
      <Card className="movieCard">
        <Card.Img variant="top" src={movie.img} />
        <Card.Body>
      
          <Card.Title className="movieTitle">{movie.title}</Card.Title> 
          
          <MovieRating  movieRating={movie.rating} />
        </Card.Body>
      </Card>
      </Link>
  )
}

export default MovieCard
