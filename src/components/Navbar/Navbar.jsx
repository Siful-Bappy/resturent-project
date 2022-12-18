import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutLineRestaurantMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
    const [toggleManu, setToggleManu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.gericht} alt="Logo" />
      </div>
      <ul className="app-navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#home">About</a>
        </li>
        <li className="p-opensans">
          <a href="#home">Manu</a>
        </li>
        <li className="p-opensans">
          <a href="#home">Awards</a>
        </li>
        <li className="p-opensans">
          <a href="#home">Contact</a>
        </li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login" className="p-opensans">
          Login / Register
        </a>
        <div></div>
        <a href="/" className="p-opensans">
          Book Table
        </a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleManu(true)}
        ></GiHamburgerMenu>
        {
            toggleManu && (
        <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="overlay-close"
            onClick={() => setToggleManu(false)}
          ></MdOutlineRestaurantMenu>
          <ul className="app-navbar-smallscreen-links">
            <li className="p-opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p-opensans">
              <a href="#home">About</a>
            </li>
            <li className="p-opensans">
              <a href="#home">Manu</a>
            </li>
            <li className="p-opensans">
              <a href="#home">Awards</a>
            </li>
            <li className="p-opensans">
              <a href="#home">Contact</a>
            </li>
          </ul>
        </div>)}
      </div>
    </nav>
  );
};

export default Navbar;
