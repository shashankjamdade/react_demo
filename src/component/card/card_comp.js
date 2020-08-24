import React from "react";
import "./card_comp.css";

export const CardComp = (props) => (
  <div className="card-container">
    <h1>{props.usr.name}</h1>
  </div>
);
