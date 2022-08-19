import React from 'react'
import { name } from '.'

import {useRouter} from 'next/router'


function movie({searchedMovie}) {
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading</h1>
    }    
  return (
    <div className=''>
        <h2 className='App-header'>{searchedMovie.Title}</h2>
        <div className='contentOverview'>
            <h2 className='overview'>Overview</h2> 
            <div className='content'>
                <div>
                    <img
                        alt={`The movie titled: ${searchedMovie.Title}`}
                        src={searchedMovie.Poster === "N/A" ? 'movie Title not available' : searchedMovie.Poster}
                    />
                </div>

                <div className='contentSecondColumn'>
                    <p className='plot'>{searchedMovie.Plot }</p>

                    <div className='firstMinorContent'>
                        <div className='director'>
                            <h4>Director</h4>
                            {searchedMovie.Director}
                        </div>

                        <div>
                            <h4>Producer</h4>
                            {searchedMovie.Producer}
                        </div>

                        <div className='screenPlayWriters'>
                            <h4>Screenplay Writers</h4>
                            {searchedMovie.Writer}
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default movie

export async function getStaticPaths(){
    
    
    const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=4a3b711b`)
    const data = await response.json()
    
    
    return{
        paths: [
            {
                params: {movie: 'tt8372298'},
            },
        ],
        
        fallback: true,
    }
}


export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://www.omdbapi.com/?i=${params.movie}&apikey=4a3b711b`)
    const data = await response.json()

    // if(!data.imdbID){
    //     return {
    //         notFound: true
    //     }
    // }
    
    return{
        props :{
            searchedMovie: data
        }
    }
}