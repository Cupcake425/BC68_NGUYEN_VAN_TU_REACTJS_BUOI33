import React from "react";
import "./Home.scss";
import { arrShoes } from "../../data";
import ShoesCard from "../../components/ShoesCard/ShoesCard";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="grid grid-cols-3 gap-5">
          {arrShoes.map((item) => (
            <ShoesCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
