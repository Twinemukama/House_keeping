 import React from "react";
//  import  bnb1 from "./images/airbnb1.jpg";
 import star from "./images/star.png";

 export default function Card(props){
      let badgeText
      if (props.item.openSpots===0){
        badgeText="SOLD OUT";
      }else if (props.item.location ==="Online"){
        badgeText="ONLINE";
      }
      

    return(
        <div className="bnb-wrapper">
            <div className="bnb">
                {badgeText &&<buttton className="bnb-button"><b>{badgeText}</b></buttton>}
                <img src={`../images/${props.item.coverImg}`} className="bnb-img" alt="bnb"/>
                <span className="bnb-span">
                    <img src={star} width="10px" height="10px"/>
                    {props.item.stats.rating}
                 </span>
                    <span className="prop-span"> ({props.item.stats.revCount}) </span> 
                    <span className="prop-span">{props.item.location}</span>
                <p className="bnb-text">{props.item.title}<br/><b>for ${props.item.price}</b>/person</p>
            </div>
            
        </div> 
        
    )
 }