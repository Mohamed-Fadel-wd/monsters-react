import React from "react";
import "./Card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}1?set=set2&size=180x180`}
      />
      <h3>{props.monster.name}</h3>;<h4>{props.monster.email}</h4>;
    </div>
  );
};