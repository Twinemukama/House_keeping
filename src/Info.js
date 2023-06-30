import React from "react";
import reactLogo from "./images/air.svg.png";

export default function Info(){
    return (
      <nav>
        <div className="info!">
        <img src={reactLogo} alt="react logo" width="70px" className="icon"/>
        </div>
      </nav>
    )
}