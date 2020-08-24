import React from "react";
import "./card-list.styles.css";
import { CardComp } from "../card/card_comp";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((usr) => (
      <CardComp usr={usr}></CardComp>
    ))}
  </div>
);
