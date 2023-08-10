import React from "react";
import { Link } from "react-router-dom";
import "./catCard.scss";

const CatCard = ({ item }) => {
  return (
    <Link to={"/gigs?cat=design"}>
      <div className="catcard">
        <img src={item.img} />

        <div className="card-content">
          <span className="desc">{item.desc}</span>
          <span className="title">{item.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
