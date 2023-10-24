import React from 'react'
import { useMoviesContext } from './Context/GlobalContext'
import Watchitem from './Watchitem'

const Watchlist = () => {
  const MovieContext = useMoviesContext()
  return (
    <div className='watchlist' >
      <div className="container">
        <div className="watchlist-movies">


           <div className="headre-watchlist">
            <h2>Watchlist</h2> <span>
            {MovieContext.watchlist.length}{MovieContext.watchlist.length <=1 ? "MOVIE" : "MOVIES"}

            </span>
           </div>

    { MovieContext.watchlist.length > 0 ? ( <div className="all-movies-watchlist">  
           {  MovieContext.watchlist.map(movie => <Watchitem movie={movie}  type ="watchlist" key={movie.imdbID} />) } </div> ) 
                        : ( <h2 className='nofilms' > No Films Added , Add Some </h2> ) }

        </div>
      </div>
    </div>
  )
}

export default Watchlist

