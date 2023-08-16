import React, { useEffect, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import arrow from "../../images/down.png";

const Gigs = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 210 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className="gigs">
      

      <div className="top">
        <span>
          {" "}
          <img src="" alt="" /> {">"} GRAPHICS & DESIGN
        </span>
        <h1>AI Artists</h1>
        <span>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </span>
      </div>
      <div className="topnavv">
          <div className="left">
            <div className="navbtn">
              <span>Logo options</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Seller Details</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Budget</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Delivery Time</span>
              <img src={arrow} />
            </div>
          </div>
          <div className="right">
            <div className="navbtn">
              {/* <img src={arrow} /> */}
              <input class="switch" type="checkbox" checked="false" />
              <span>Pro services</span>
            </div>

            <div className="navbtn">
             <input class="switch" type="checkbox" checked="false" />
              <span>Local sellers</span>
            </div>

            <div className="navbtn">
             <input class="switch" type="checkbox" checked="false" />
              <span>Online sellers</span>
            </div>
          </div>
        </div>
      {active && (
        <div className="topnav">
          <div className="left">
            <div className="navbtn">
              <span>Logo options</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Seller Details</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Budget</span>
              <img src={arrow} />
            </div>
            <div className="navbtn">
              <span>Delivery Time</span>
              <img src={arrow} />
            </div>
          </div>
          <div className="right">
            <div className="navbtn">
              {/* <img src={arrow} /> */}
              <input class="switch" type="checkbox" checked="false" />
              <span>Pro services</span>
            </div>

            <div className="navbtn">
             <input class="switch" type="checkbox" checked="false" />
              <span>Local sellers</span>
            </div>

            <div className="navbtn">
             <input class="switch" type="checkbox" checked="false" />
              <span>Online sellers</span>
            </div>
          </div>
        </div>
      )}
      <div className="bottom"></div>
      <GigCard />
    </div>
  );
};

export default Gigs;
