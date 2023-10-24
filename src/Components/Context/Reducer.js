import * as actions from './ActionsTypes'


const reducer =(state, action)=>{  switch(action.type){
    case actions.ADD_MOVIE_TO_WATCHLIST : 
         return{ ...state,  watchlist : [action.payload, ...state.watchlist],}

    case actions.REMOVE_MOVIE_FROM_WATCHLIST :
        return{ ...state,  watchlist  : state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID) }

    case actions.MOVE_MOVIE_TO_WATCHED:
        return{ ...state,  watchlist  : state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID),
                           watched    :[action.payload, ...state.watched] }    
                           
    case actions.ADD_MOVIE_TO_WATCHED :
        return{ ...state,  watched    :[action.payload, ...state.watched] }    
        
    case actions.REMOVE_MOVIE_FROM_WATCHED :
        return{ ...state,  watched    : state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID)}    

    case actions.MOVE_MOVIE_TO_WATCHEDLIST :
        return{ ...state, watched    : state.watched.filter((movie) => movie.imdbID !== action.payload.imdbID),
                          watchlist : [action.payload, ...state.watchlist] }
   default:
        return state;   
   }}
export default reducer