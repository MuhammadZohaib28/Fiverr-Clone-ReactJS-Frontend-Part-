import React, { useState } from "react";
import "./gigcard.scss";
import star from "../../images/star.png";
import gigimage from "../../images/man.png";
import lineheart from "../../images/lineheartt.png";
import { gigcard } from "./data";
import check from "../../images/check.png";

const GigCard = () => {
  const [isHeartHovered, setIsHeartHovered] = useState(null);
  return (
    <div className="gigcard">
      {gigcard.map((item, index) => {
        return (
          <div className="container" key={item.id}>
            <img
              src={lineheart}
              className="heart"
              onMouseEnter={() => setIsHeartHovered(index)}
              onMouseLeave={() => setIsHeartHovered(null)}
            />
            {isHeartHovered === index && (
              <div className="wishlist">
                <span>Save to list</span>
              </div>
              
            )}

            <div className="img">
              <img src={item.gigImage} alt="" />
            </div>
            <div className="mid">
              <div className="nameandimg">
                <div className="left">
                  <div className="imgcontainer">
                    <img src={item.profilePic} alt="" />
                  </div>
                  <span>{item.username}</span>
                </div>
                <div className="right">
                  {item.badge ? (
                    <div className="badge">
                      <img src={check} alt="" />
                      <span>Pro</span>
                    </div>
                  ) : item.level >= 1 ? (
                    <span>Level {item.level}</span>
                  ) : null}
                </div>
              </div>
              <p>{item.gigdesc}</p>
              <div className="star">
                <img src={star} />
                <span>{item.rating}</span>
                <span>({item.count})</span>
              </div>
            </div>
            <div className="bottom">
              <div className="pricing">
                <span>From</span>
                <span>PKR {item.price}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GigCard;
