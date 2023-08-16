import React, { useEffect, useState } from "react";
import "./navbar.scss";
import sellerimg from "../../images/seller.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(true);
  const [menu, setMenu] = useState(false);

  const { pathname } = useLocation();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const isActive2 = () => {
    window.scrollY > 350 ? setActive2(true) : setActive2(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    window.addEventListener("scroll", isActive2);

    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener("scroll", isActive2);
    };
  }, []);

  const currUser = {
    id: 1,
    username: "Muhammad Zohaib",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="LINK">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        {(active2 || pathname !== "/") && (
          <div>
            <input
              type="search"
              placeholder="What services are you looking for today ?"
              className="searchbar"
            />
          </div>
        )}
        <div className="links">
          <ul className="listitems">
            <li className="listitem">Business solutions</li>

            <li className="listitem">Exolore</li>

            <li className="listitem">English</li>

            <li className="listitem">Become a Seller</li>

            {!currUser?.isSeller && <li className="listitem">Sign in</li>}

            {!currUser?.isSeller && (
              <li>
                <button>Join</button>
              </li>
            )}

            {currUser && (
              <div className="user" onClick={handleMenu}>
                <img src={sellerimg} alt="" />
                <span>{currUser.username}</span>
                {menu && (
                  <div className="options">
                    {currUser?.isSeller && (
                      <>
                        <Link className="LINK" to={"/gigs"}>
                          Gigs
                        </Link>
                        <hr />
                        <Link className="LINK" to={"/add"}>
                          Add new Gig
                        </Link>
                        <hr />
                      </>
                    )}

                    <Link className="LINK" to={"/orders"}>
                      Orders
                    </Link>
                    <hr />
                    <Link className="LINK" to={"/messages"}>
                      Messages
                    </Link>
                    <hr />
                    <Link className="LINK" to={"/"}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            )}
          </ul>
        </div>
      </div>
      {(active2 || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to={"/"} className="LINK">
              Graphics & Design
            </Link>
            <Link to={"/"} className="LINK">
              Video & Animation
            </Link>
            <Link to={"/"} className="LINK">
              Writing & Translation
            </Link>
            <Link to={"/"} className="LINK">
              AI services
            </Link>
            <Link to={"/"} className="LINK">
              Digital Marketing
            </Link>
            <Link to={"/"} className="LINK">
              Programming & Tech
            </Link>
            <Link to={"/"} className="LINK">
              Business
            </Link>
            <Link to={"/"} className="LINK">
              Data
            </Link>
            <Link to={"/"} className="LINK">
              Photography
            </Link>
            <Link to={"/"} className="LINK">
              Music & Audio
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
