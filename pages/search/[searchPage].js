import {useRouter} from 'next/router'
function searchedMovie({searchedMovie}){
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading</h1>
    }    

    console.log(searchedMovie)
    return(
        <div>hi</div>
    )
}

export default searchedMovie

export async function getStaticPaths(){ 
    
    const response = await fetch(`https://www.omdbapi.com/?t=avengers&apikey=4a3b711b`)
    const data = await response.json()
    return{
        paths: [
            {
                params: {search: 'Captain America: Civil War'},
            },
        ],
        
        fallback: true,
    }
}

export async function getStaticProps(context){
    
    const {params} = context
    const response = await fetch(`https://www.omdbapi.com/?s=${params.search}&apikey=4a3b711b`)
    const data = await response.json()
     
    
    return{
        props :{
            searchedMovie: data
        }
    }
}
