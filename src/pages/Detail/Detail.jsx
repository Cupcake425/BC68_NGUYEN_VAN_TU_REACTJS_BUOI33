import React from "react";
import "./Detail.scss";
import { Link, useParams } from "react-router-dom";
import { arrShoes } from "../../data";

const Detail = () => {
  const { id } = useParams();
  const shoes = arrShoes.find((item) => item.id == id);
  return (
    <div className="detail">
      <div className="container">
        <img src={shoes.image} alt="" />
        <h1>{shoes.name}</h1>
        <p>{shoes.description}</p>
        <p>${shoes.price}</p>
        <Link className="button" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Detail;
