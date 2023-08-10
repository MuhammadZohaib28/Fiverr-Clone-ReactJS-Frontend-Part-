import React, { useEffect, useState } from "react";
import "./featured.scss";
import data from "./Data";

const Featured = () => {
  const [bgColor, setBgColor] = useState("#151515");
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));

      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBgColor(randomColor);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const imageStyles = {
    opacity: 1,
    transition: `all 2s ease-in-out`,
  };

  return (
    <div className="featured" style={{ backgroundColor: bgColor, transition: "all ease 2s" }}>
      <div className="container">
        <div className="left">
          <h1>
            Find the right <span>freelance</span> service, right away
          </h1>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>logo Design</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src={data[currSlide]} style={data[currSlide] && imageStyles} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
