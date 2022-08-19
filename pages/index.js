import Link from "next/link"
import { useState } from "react"
import Header from "../component/Header"
import Movie from "../component/Movie"
import Search from "../component/Search"

export const name = "captain america"
function Home (props){
  const movies = props.movies.Search
  

  const [movieList, setMoviesList] = useState(movies)
  console.log(movieList)
  

  const search = searchValue => {
    
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    
      
      .then(response => {
        if(!response.ok){
          throw Error("could not get list check your internet setting")
        }
        return response.json()
      })
      .then(jsonResponse => {
        setMoviesList(jsonResponse.Search);
        console.log(jsonResponse.Search)
        
        
      })
      
      
      
  }
  
  return (
    <>
      
      <div className='App'>
        <Header title="Movie Database"/>
        <Search search={search}/>

      <div className='movies'>
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

export async function getStaticProps(){
  const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4a3b711b`)
  const data = await response.json()
  
  return{
    props: {
      movies: data
    }
  }

}