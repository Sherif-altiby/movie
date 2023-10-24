import axios from "axios";
import React, { useEffect, useState } from "react";
import Film from "./Film";

const Add = () => {
 
  const [searchValue, setSearchValue]= useState("")  
  const [movies, setMovies] = useState([])

useEffect(()=>{
 
  axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=9ae77222`)
  .then(data =>{
    if(data.data.Search){
      setMovies(data.data.Search)
    }
  })
  .catch((error) => console.log("NO RESULTS"));

}, [searchValue])


  return (
    <div className="add">
      <div className="container">

          <input onChange={(e)=>setSearchValue(e.target.value)} type="text"  value={searchValue} placeholder="Find Your Film " />
        
          { movies.length > 0 &&
           (<ul className="all-movies" > {movies.map(movie =>(<li key={movie.imdbID}><Film movie={movie} /></li>))}</ul>)}

      </div>
    </div>
  );
};

export default Add;


