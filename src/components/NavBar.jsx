import React, { useState } from "react";
import logo from "../images/logo/freshcart-logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <>
      <header>
        <div className="top-header">
          <div className="container">
            <div className="header-cover">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                </ul>
              </nav>
              <div className="open-menu" onClick={()=>setOpenMenu(true)}>
                <div className="button">
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={openMenu ? "side-menu-area active" : "side-menu-area"}>
        <div className="side-menu-box">
          <div className="side-menu">
            <div className="close-btn" onClick={()=>setOpenMenu(false)}>
            <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <nav>
              <ul>
                <li onClick={()=>setOpenMenu(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                  <Link to="/about">About</Link>
                </li >
                <li onClick={()=>setOpenMenu(false)}>
                  <Link to="/products">Products</Link>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={()=>setOpenMenu(false)}>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="overlay" onClick={()=>setOpenMenu(false)}></div>
      </div>
    </>
  );
};

export default NavBar;
