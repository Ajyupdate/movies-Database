import React from 'react'
import { name } from '.'

import {useRouter} from 'next/router'
import Details from '../component/Details'
import Loading from '../component/Loading'


function movie({searchedMovie}) {
    // console.log(searchedMovie)
    const router = useRouter()
    if(router.isFallback){
        return <Loading/>
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
    const response = await fetch(`https://www.omdbapi.com/?t=${params.movie}&plot=full&apikey=4a3b711b`)
    
    const data = await response.json()
     
    
    return{
        props :{
            searchedMovie: data
        }
    }
}