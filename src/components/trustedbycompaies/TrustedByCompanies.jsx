import React from "react";
import "./trustedbycomapnies.scss";
import facebook from "../../images/meta.png";
import google from "../../images/google.png";
import netflix from "../../images/netflix.png";
import png from "../../images/png.png";
import paypal from "../../images/paypal.png";

const TrustedByCompanies = () => {
  return (
    <div className="tbc">
      <div className="icons">
        <span className="text">Trusted By:</span>
        <span>
          <img src={facebook} alt="" srcset="" />
        </span>

        <span>
          <img src={google} alt="" srcset="" />
        </span>

        <span>
          <img src={netflix} alt="" srcset="" />
        </span>

        <span>
          <img src={png} alt="" srcset="" />
        </span>

        <span>
          <img src={paypal} alt="" srcset="" />
        </span>
      </div>
    </div>
  );
};

export default TrustedByCompanies;
