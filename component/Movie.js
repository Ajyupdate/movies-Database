import Link from 'next/link';
import React, { useState } from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
import { animate, motion } from 'framer-motion';

const variants = {
  hidden: {opacity: 0},
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.3,
    },
  },
}

const images = {
  hidden:{
    opacity: 0,
    x: 30,
  },
  show:{
    opacity: 1,
    x: 0, 
    transition:{
      duration: 3,
    }
  }
}
const Movie = ({ movie}) => {
  
  
  const poster =
      movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    // <Link href={`/${movie.Title}`}>
    <motion.div variants={variants} initial={'hidden' } animate='show' className='movie' data-aos="fade-up">
      
        <motion.h4 whileHover={{scale: 2.1}} className="movie-title">{movie.Title}</motion.h4>
        
        <Link href={`/${movie.Title}`}>
         
         
            <div className="movie-details">
                <motion.img
                  variants={images}
                    width="300"
                    height="444"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
         
        </Link>

        <h4 className='type'>Movie Type: <i>{movie.Type}</i></h4>

        <Link href={`/${movie.Title}`}>
          
            <div className='movie-button'>
              <button type='button'>See Details</button>
            </div>
          
        </Link>
        
        
    </motion.div>
    // </Link>
  )
}



export default Movie