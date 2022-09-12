import {useRouter} from 'next/router'
import Header from '../../component/Header'
import Movie from '../../component/Movie'
import Search from '../../component/Search'
function searchedMovie({searchedMovie}){
    
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading</h1>
    }    

    
    return(
        <div className='App'>
            <Header title="Movie Database"/>
            <Search/>
            <div className='movies'>
                {searchedMovie.Search.map((movie) =>(
                <div key={movie.imdbID}>
            
                    <Movie searchedMovie={searchedMovie} movie={movie} Title={movie.Title}/>
            
                </div>
            ))}
            </div>
            
        </div>
    )
}

export default searchedMovie

export async function getStaticPaths(){ 
    
    const response = await fetch(`https://www.omdbapi.com/?s=avengers&apikey=4a3b711b`)
    const data = await response.json()
    return{
        paths: [
            {
                params: {searchPage: 'avengers'},
            },
        ],
        
        fallback: true,
    }
}

export async function getStaticProps(context){
    
    const {params} = context
    console.log(params)
    const response = await fetch(`https://www.omdbapi.com/?s=${params.searchPage}&apikey=4a3b711b`)
    const data = await response.json()

    
    return{
        props :{
            searchedMovie: data
        }
    }
}


