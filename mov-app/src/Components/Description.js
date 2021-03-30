import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import moviesData  from './MoviesData'
import { Link } from 'react-router-dom'

const Description = ({match}) => {

    // console.log(match)
   const [movie, setMovie] = useState({moviesData});

    useEffect(() => {
        setMovie(moviesData.find(movie => movie.id === +match.params.id))
    }, [match.params.id]); 

    return (
        <div className="product-details">
         <h1>{movie.title}</h1> 
            <h3>{movie.description} </h3> 
            <hr style={{ margin: "50px 0" }} />
           <video style={{ width: 320, height: 240 }}    src={movie.video} type="video/mp4"    controls  /> 
         <br/>
            <Link to="/MovieApp">
                <Button variant="info">Go Back</Button>
            </Link>
        </div>
    )
}

export default Description
