import React, { useState } from 'react'
import Loading from './Loading';
import Search from './Search'

function Details({searchedMovie}) {
    const ratings = searchedMovie.Ratings
    const [rottenTomatoe, setRottenTomamtoe] = useState("")
    // const rottenTomatoeRating = ratings.map(rating => {
        
    //     if(rating.Source === "Rotten Tomatoes"){
    //         return(
    //             rating.Value
    //         )
    //     }
    //     else if(rating.Source !== "Rotten Tomatoes"){
    //         return("")
    //     }
        
    // })

    if (!searchedMovie) {
		// todo: Display beautiful error component and pass message into it
		return <Loading />;
	}  
    
    
  return (
    <div data-aos="fade-up">
        
        <h2 className='App-header'>{searchedMovie.Title}</h2>
        <div className='contentOverview'>
            
            <Search />
            <div className='content'>
                
                <div className='searched-img'>
                    
                    <img
                        alt={` ${searchedMovie.Title} poster not available`}
                        src={searchedMovie.Poster === "N/A" ? 'movie Title not available' : searchedMovie.Poster}
                    />
                </div>

                <div className='contentSecondColumn'>

                    <div className='propDIv plot'>
                        <h4>Plot</h4>
                        <p className=''>{searchedMovie.Plot === "N/A" ? 'Plot not available' : searchedMovie.Plot}</p>
                    </div>
                    
                    <div className='row'>


                        <div className='propDIv'>
                            <h4>Director</h4>
                            {searchedMovie.Director === "N/A" ? 'Director not available' : searchedMovie.Director}
                        </div>

                        <div className='propDIv'>
                            <h4>Screenplay Writers</h4>
                            {searchedMovie.Writer === "N/A" ? 'Writer not available' : searchedMovie.Writer}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='propDIv'>
                            <h4>Released date</h4>
                            {searchedMovie.Released === "N/A" ? 'Released date not available' : searchedMovie.Released}
                        </div>

                        <div className='propDIv'>
                            <h4>USA BoxOffice</h4>
                            {searchedMovie.BoxOffice === "N/A" ? 'Box Office figure not available' : searchedMovie.BoxOffice}
                        </div>
                        
                        {/* <div className='propDIv'>
                            <h4>Rotten Tomatoe Rating</h4>
                            
                            {rottenTomatoeRating =="" ? 'Rotten Tomatoe rating not available' : rottenTomatoeRating}
                        </div> */}
                    </div>

                    <div className='row'>
                        <div className='propDIv'>
                            <h4>Genre</h4>
                            {searchedMovie.Genre === "N/A" ? 'Genre not available' :searchedMovie.Genre}
                        </div>

                        <div className='propDIv'>
                            <h4>Awards</h4>
                            {searchedMovie.Awards === "N/A" ? 'Awards not available' : searchedMovie.Awards}
                        </div>
                    </div>
                    
                    <div className='propDIv'>
                        <div>
                        <h4>Actors</h4>
                        {searchedMovie.Actors === "N/A" ? 'Actors not available' : searchedMovie.Actors}
                        </div>
                    </div>
                    
                    

                    
                </div>



            </div>
        </div>
    </div>
  )
}

export default Details