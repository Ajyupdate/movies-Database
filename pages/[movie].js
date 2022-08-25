import React from 'react'
import { name } from '.'

import {useRouter} from 'next/router'
import Details from '../component/Details'


function movie({searchedMovie}) {
    // console.log(searchedMovie)
    const router = useRouter()
    if(router.isFallback){
        return <h1>Loading</h1>
    }    

    
  return (
    <div className=''>
        <Details searchedMovie={searchedMovie}/>
    </div>
  )
}

export default movie

export async function getStaticPaths(){
    
    
    const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=4a3b711b`)
    const data = await response.json()
    
    
    return{
        paths: [
            {
                params: {movie: 'Captain America: Civil War'},
            },
        ],
        
        fallback: true,
    }
}


export async function getStaticProps(context){
    
    const {params} = context
    const response = await fetch(`https://www.omdbapi.com/?t=${params.movie}&apikey=4a3b711b`)
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