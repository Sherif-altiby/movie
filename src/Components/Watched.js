import React from 'react'
import { useMoviesContext } from './Context/GlobalContext'
import Watchitem from './Watchitem'


const Watched = () => {
  const MovieContext = useMoviesContext()

  return (
    <div className='watchlist' >
      <div className="container">
        <div className="watchlist-movies">


           <div className="headre-watchlist">
            <h2>Watched</h2> <span>
              {MovieContext.watched.length}{MovieContext.watched.length <=1 ? "MOVIE" : "MOVIES"}
            </span>
           </div>

    { MovieContext.watched.length > 0 ? ( <div className="all-movies-watchlist">  
           {  MovieContext.watched.map(movie => <Watchitem movie={movie}  type ="watched" key={movie.imdbID} />) } </div> ) 
                                                        : ( <h2 className='nofilms' > No Films Added , Add Some </h2> ) }

        </div>
      </div>
    </div>
  )
}

export default Watched