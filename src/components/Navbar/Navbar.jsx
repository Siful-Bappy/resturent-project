import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutLineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app-navbar">
        <div className="app-navbar-logo">
          <img src={images.gericht} alt="Logo" />
        </div>
        <ul className="app-navbar-links">
          <li className="p-opensans"><a href="#home">Home</a></li>
          <li className="p-opensans"><a href="#home">About</a></li>
          <li className="p-opensans"><a href="#home">Manu</a></li>
          <li className="p-opensans"><a href="#home">Awards</a></li>
          <li className="p-opensans"><a href="#home">Contact</a></li>
        </ul>
        <div className="app-navbar-login">
            <a href="#login" className="p-opensans">Login / Register</a>
            <div></div>
        <a href="/" className="p-opensans">Book Table</a>
        </div>
        <div className="app-navbar-smallscreen" >
            <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => {}}></GiHamburgerMenu>
            
        </div>
    </nav>
  );
};

export default Navbar;
