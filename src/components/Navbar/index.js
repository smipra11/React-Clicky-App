import React from "react";
import "./style.css"


function Navbar({message,score,topscore}) {
  return (
    <div className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">

      <ul>
        <li>
          <a
            className="nav-calc-font navbar-brand p-0 m-0 title-line-hgt"
            href="/"
          >
            Clickey Game </a> </li>
        <li>{message} </li>
        <li className= "score"> SCore: {score}| Top Score : {topscore}</li>
      </ul>
    </div>
  )
}

export default Navbar;
