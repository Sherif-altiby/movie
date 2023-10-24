import React from 'react'
import Controlse from './Controlse'

const Watchitem = ({movie, type}) => {
  return (
    <div className='watch-item' >
      {movie.Poster ? <img src={movie.Poster} alt={movie.Title} />  : <div className="no-img"></div> }
      <Controlse type={type} movie={movie} />
    </div>
  )
}

export default Watchitem