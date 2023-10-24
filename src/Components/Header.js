import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

const [classToggle, setClassToggle] = useState("not-block") 

const toggleClass =()=>{ setClassToggle((preveState) => preveState === "not-block" ? "block" : "not-block") }

  return (
      <header>
    <div className="container">
        <div className="header">
        <div className="logo">
          <Link to="/"> Movies </Link>
        </div>
        <ul className={classToggle} >
          <li>
            <Link to="/" onClick={()=> setClassToggle("not-block")} > Watchlist </Link>
          </li>
          <li>
            <Link to="/watched" onClick={()=> setClassToggle("not-block")} > Watched </Link> 
          </li>
          <li>
            <Link to="/add" onClick={()=> setClassToggle("not-block")} > Add </Link>
          </li>
        </ul>
        <i onClick={()=>toggleClass()} className="fa-solid fa-bars"></i>
        </div>
    </div>
      </header>
  );
};

export default Header;
