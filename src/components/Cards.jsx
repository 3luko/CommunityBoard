import React from "react";
import "./Cards.css";

const Cards = ({ imgsrc, imgAlt, title, cardDescription, link }) => {
  return (
    <div className="card-div">
      <img className="card-img" src={imgsrc} alt={imgAlt}></img>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{cardDescription}</p>
      <button
        className="card-button"
        onClick={() => window.open(link, "_blank")}
      >
        Visit Website
      </button>
    </div>
  );
};

export default Cards;
