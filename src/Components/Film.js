import React from 'react'
import { useMoviesContext } from './Context/GlobalContext'
import * as actions from './Context/ActionsTypes'

const Film = ({movie}) => {
   const MovieContext = useMoviesContext()

   const storedMovieWatchlist = MovieContext.watchlist.find((item)=> item.imdbID === movie.imdbID)
   const storedMovieWatched   = MovieContext.watched.find((item)=> item.imdbID === movie.imdbID)

   const watchlistDisabled    = storedMovieWatchlist ? true : storedMovieWatched ? true : false 
   const watchedDisabled      = storedMovieWatched   ? true : false

  return (
    <div className='film-container' >
      <div className="poster">
        {movie.Poster ?  <img src={movie.Poster} alt={movie.Title} className='img-poster' /> : <div className="no-poster"></div>  }
      </div>
      <div className="info">
        <div className="title">  {movie.Title}  </div>
        <div className="year">   {movie.Year}  </div>
      </div>
      <div className="buttons">

        <button onClick={()=> MovieContext.stateDispatch({type : actions.ADD_MOVIE_TO_WATCHLIST , payload : movie})} 
                className={watchlistDisabled ? "disabled" : ""} >   Add To Watchlist</button>

        <button onClick={()=> MovieContext.stateDispatch({type : actions.ADD_MOVIE_TO_WATCHED   , payload : movie})}
                className= {watchedDisabled  ? "disabled" : ""} >   Add To Watched</button>
      </div>
    </div>
  )
}

export default Film