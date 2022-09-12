import Link from "next/link"
import { useState } from "react"
import Header from "../component/Header"
import Movie from "../component/Movie"
import Search from "../component/Search"
import Aos from "aos"
import 'aos/dist/aos.css';
import Head from "next/head"


if (typeof window !== 'undefined') {
  Aos.init(
    {
      
      duration:5000,
      
  }
  );
  
}

export const name = "Captain America"
function Home (props){
  
  const movies = props.movies.Search
  

  const [movieList, setMoviesList] = useState(movies)

  

  
  return (
    <>
      
      <div className='App' >
        <Head>
          <title>Movie Database</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header title="Movie Database"/>
        <Search />

        <div className='movies' >
          {movieList.map((movie) =>(
            <div key={movie.imdbID}>
            
              <Movie movieList={movieList} movie={movie} Title={movie.Title}/>
            
            </div>
          ))}
        </div>
        
      
    </div>
    </>
  )
}

export default Home

export async function getStaticProps(context){
  const error = false
  
  const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4a3b711b`)
  const data = await response.json()

  
  
   
 
  return{
    props: {
      movies: data,
      
    }
  }

}
