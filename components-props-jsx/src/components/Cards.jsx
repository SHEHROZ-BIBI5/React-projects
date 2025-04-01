import React from 'react';
import "./Cards.css";

function Cards() {
  return (
    <div className="card" style={{overflow: "hidden"}}>
        <img src="/Learn-coding-620x330.jpg" alt="img" width={333} style={{border: "2px solid black"}}/>
          <h1>Title of the card</h1>
        <p>Description of the card</p>
    </div>
  );
}

export default Cards;
