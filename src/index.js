import React from "react";
import  ReactDOM  from "react-dom";

import "./style.css";
import Info from "./Info.js";
import About from "./About.js";
import Card from "./Card.js";
import data from "./data.js";
 function Page(){
  const cards = data.map(item=>{
    return(
     <Card
       key={item.id}
       item={item}
      //  img={item.coverImg}
      //  rating={item.stats.rating}
      //  revCount={item.stats.revCount}
      //  location={item.location}
      //  title={item.title}
      //  price= {item.price}
      //  openSpots={item.openSpots}
     /> 
    )
  })
    
    return(
    <div className="page">
     <Info/>
     <About/>
     <section className="cards-list">
      {cards}
      </section>
     
     </div>
        )
  }

ReactDOM.render(<Page/>, document.getElementById('root'))