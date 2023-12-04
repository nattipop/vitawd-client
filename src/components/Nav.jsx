import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import hamburger from "../pictures/Hamburger.png";
import logo from "../pictures/Untitled_Artwork.png";
import '../styles/Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const pages = Array.prototype.slice.call(document.getElementsByClassName("nav-links"));

  useEffect(() => {
    pages.forEach(item => item.classList.remove("current-page"));
    switch (location.pathname) {
      case "/":
        return document.getElementById("home-link").classList.add("current-page");
      case "/contact":
        return document.getElementById("contact-link").classList.add("current-page");
      case "/about":
        return document.getElementById("about-link").classList.add("current-page");
      case "/pricing":
        return document.getElementById("pricing-link").classList.add("current-page");
      default:
        return
    }
  }, [location])

  useEffect(() => {
    if(clicked) {
      document.getElementById("hamburger-dropdown").style.display = "block";
    } else {
      document.getElementById("hamburger-dropdown").style.display = "none";
    }
  }, [clicked])

  return (
    <div>
      <nav aria-label="primary menu" id="navbar">
        <div id="top-left-logo">
          <img src={logo} width="80px" onClick={() => navigate("/")} />
        </div>
        <ul className='links-container'>
          <li aria-current="page" className='nav-links' id="home-link">
            <Link to={"/"}>Home</Link>
          </li>
          <li aria-current="page" className='nav-links' id="contact-link">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li aria-current="page" className='nav-links' id="about-link">
            <Link to={"/about"}>About</Link>
          </li>
          <li aria-current="page" className='nav-links' id="pricing-link">
            <Link to={"/pricing"}>Pricing</Link></li>
        </ul>
        <a href="tel:7156421146"><button id="phone-nav">(715) 642-1146</button></a>
      </nav>
      <div id="hamburger-dropdown">
        <ul>
          <Link to={"/"} onClick={() => setClicked(false)}><li>
            Home
          </li></Link>
          <Link to={"/contact"} onClick={() => setClicked(false)}><li>
            Contact
          </li></Link>
          <Link to={"/about"} onClick={() => setClicked(false)}><li>
            About
          </li></Link>
          <Link to={"/pricing"} onClick={() => setClicked(false)}><li>
            Pricing
          </li></Link>
        </ul>
      </div>
      <nav id="nav-hamburger">
        <img onClick={() => setClicked(!clicked)} width="45px" src={hamburger} />
      </nav>
    </div>
  )
};

export default Nav;