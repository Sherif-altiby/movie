import React from "react";
import { useMoviesContext } from "./Context/GlobalContext";
import * as actions from './Context/ActionsTypes'

const Controlse = ({ type, movie }) => {
  const MovieContext = useMoviesContext()
  return (
    <div className="controls">

      {type === "watchlist" && (  <> <i className="fa-solid fa-eye" onClick={()=> MovieContext.stateDispatch
                                                              ({type: actions.MOVE_MOVIE_TO_WATCHED, payload:movie})} ></i>      
                                     <i className="fa-solid fa-xmark" onClick={()=> MovieContext.stateDispatch
                                                          ({type: actions.REMOVE_MOVIE_FROM_WATCHLIST, payload:movie})}></i>  </>  )}



      {type === "watched"   && (  <> <i className="fa-solid fa-eye-slash" onClick={()=>MovieContext.stateDispatch
                                                              ({type: actions.MOVE_MOVIE_TO_WATCHEDLIST, payload : movie}) } ></i>   

      <i className="fa-solid fa-xmark"  onClick={()=>MovieContext.stateDispatch
                                              ({type: actions.REMOVE_MOVIE_FROM_WATCHED, payload : movie}) }></i>  </>  )}

    </div>
  );
};

export default Controlse;
