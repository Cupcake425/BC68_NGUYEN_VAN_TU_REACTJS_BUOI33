import React from "react";
import "./ShoesCard.scss";
import { Link } from "react-router-dom";

const ShoesCard = ({ item }) => {
  return (
    <div className="shoescard">
      <img src={item.image} alt="" />
      <div className="info">
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <Link className="button" to={`${item.id}`}>
        Add to carts
      </Link>
    </div>
  );
};

export default ShoesCard;
