import React from "react";
import "./footer.scss";
import twitter from "../../images/twitter.png";
import fb from "../../images/facebook.png";
import linkedin from "../../images/linkedin.png";
import pinterst from "../../images/pinterest.png";
import insta from "../../images/instagram.png";
import access from "../../images/accessibility.png";
import globe from "../../images/globe.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="categories">
          <ul>
            <li className="heading">Categories</li>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Fiverr Logo Maker</li>
            <li>Programming & Tech</li>
            <li>Data</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Lifestyle</li>
            <li>Photography</li>
            <li>End-to-End Projects</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="categories">
          <ul>
            <li className="heading">About</li>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellectual Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="categories">
          <ul>
            <li className="heading">Support and Education</li>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
            <li>Fiverr Guides</li>
            <li>Fiverr Workspace</li>
            <li>Learn</li>
          </ul>
        </div>
        <div className="categories">
          <ul>
            <li className="heading">Community</li>
            <li>Customer Success Stories</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Affiliates</li>
            <li>Podcast</li>
            <li>Become a Seller</li>
            <li>Invite a Friend</li>
            <li>Become a Seller</li>
            <li>Community Standards</li>
          </ul>
        </div>
        <div className="categories">
          <ul>
            <li className="heading">business Solution</li>
            <li>About Business Solutions</li>
            <li>Fiverr Pro</li>
            <li>Fiverr Certified</li>
            <li>Fiverr Enterprise</li>
            <li>ClearVoice</li>
            <li>Working Not Working</li>
            <li>Contact Sales</li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h1 className="fiverrspan">
            fiverr <span>®</span>
          </h1>

          <span>© Fiverr International Ltd. 2023</span>
        </div>
        <div className="right">
          <div className="rightleft">
            <img src={twitter} alt="" />
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={pinterst} alt="" />
            <img src={insta} alt="" />
          </div>
          <div className="rightright">
            <div className="english">
              <img src={globe} alt="" className="globe"/>
              <span>English</span>
            </div>
            <span>PKR</span>
            <img src={access} alt="" className="access"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
