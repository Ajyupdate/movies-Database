import Link from "next/link"
import { useState } from "react"
import Header from "../component/Header"
import Movie from "../component/Movie"
import Search from "../component/Search"
import { motion, AnimatePresence } from "framer-motion"


// if (typeof window !== 'undefined') {
//   Aos.init(
//     {
//       duration:5000,
//   }
//   );
// }

export const name = "Batman"
function Home (props){
 

  const movies = props.movies.Search
  const [movieList, setMoviesList] = useState(movies)
  
  
  
    return (
      <>
        <AnimatePresence>
          <motion.div className='App'
            initial={{ opacity: 0, y:15}}
            animate={{ opacity: 1, y:0}}
            exist={{ opacity: 0, y:15}}
            transition={{ delay: 0.25}}
          >
            
            <Header title="Movie Database"/>
            <Search/>
    
            <div className='movies' >
              {movieList.map((movie) =>(
                <div key={movie.imdbID}>
                
                  <Movie movieList={movieList} movie={movie} Title={movie.Title}/>
                
                </div>
              ))}
            </div>
            
          
          </motion.div>
        </AnimatePresence>
        
        
      </>
    )
  


}

export default Home

export async function getStaticProps(){
 
  
  const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4a3b711b`)
  const data = await response.json()

  
  return{
    props: {
      movies: data,
      
    }
  }

}
