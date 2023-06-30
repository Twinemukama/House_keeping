import React from "react";
import airbnb from "./images/bnb.jpg";

export default function About(){
  return(   
      <div className="main-content">
        <img src={airbnb} width="100%" className="hero-img"/>
          <h1 className="hero-title">
            Online Experiences
          </h1>
        <p className="hero-desc">
          Join unique interactive activities led by one of a kind hosts all without leaving<br/>home.
        </p>
        </div>
  )
}