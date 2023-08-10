import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedByCompanies from "../../components/trustedbycompaies/TrustedByCompanies";
import Slide from "../../components/slide/Slide";
import { cards } from "../../components/slide/data";
import CatCard from "../../components/catcard/CatCard";
import { business, features, yniwgi } from "./data";
import video from "../../images/vid.mp4";
import right from "../../images/right.webp";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedByCompanies />
      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map((cards) => (
          <CatCard key={cards.id} item={cards} />
        ))}
      </Slide>

      <div className="features">
        <div className="left">
          <h1>The best part? Everything.</h1>
          {features.map((item) => {
            return (
              <>
                <div className="subheading">
                  <img src={item.img} />
                  <span>{item.subheading}</span>
                </div>
                <p>{item.para}</p>
              </>
            );
          })}
        </div>
        <div className="right">
          <video src={video} controls></video>
        </div>
      </div>

      <div className="yniwgi">
        <h1>You need it, we've got it</h1>
        <div className="container">
          {yniwgi.map((item) => {
            return (
              <div className="items" key={item.id}>
                <div className="icon">
                  <img src={item.img} alt="" />
                  <span className="underline" />
                </div>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="fiverrbusiness">
        <div className="left">
          <div className="container">
            <div className="logo">
              <span className="text">fiverr</span>
              <span className="dot">.</span>
            </div>
            <span className="bs">Business Solutions</span>
          </div>

          <div className="heading">
            <h2>Advanced solutions and professional talent for businesses</h2>
          </div>

          {business.map((item) => {
            return (
              <div className="lines">
                <div className="img">
                  <img src={item.img} />
                </div>
                <div className="linetext">
                  <span>{item.heading}</span>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
          <button>Learn more</button>
        </div>
        <div className="right">
          <img src={right} />
        </div>
      </div>


      <Slide slidesToShow={5} arrowsScroll={4}>
        {cards.map((cards) => (
          <CatCard key={cards.id} item={cards} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
