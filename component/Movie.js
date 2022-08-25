import Link from 'next/link';
import React, { useState } from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie}) => {
  
  
  const poster =
      movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    // <Link href={`/${movie.Title}`}>
    <div className='movie' >
      
        <h2 className="movie-title">{movie.Title}</h2>
        
        <Link href={`/${movie.Title}`}>
          <a>
            <div className="movie-details">
                <img
                    width="300"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
          </a>
        </Link>

        <Link href={`/${movie.Title}`}>
        <a>
          <div className='movie-button'>
            <button type='button'>See Details</button>
          </div>
        </a>
        </Link>
        
        <p>({movie.Year})</p>
    </div>
    // </Link>
  )
}



export default Movie