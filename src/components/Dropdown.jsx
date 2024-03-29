import { Link } from "react-router-dom";
import "../styles/Dropdown.css"
import { useEffect } from "react";

const Dropdown = () => {
  useEffect(() => {
    document.getElementById("dropdown").classList.add("full");
    document.getElementById("nav-hamburger").style.display = "none";
    return
  }, [])

  const hamburgerShow = () => {
    document.getElementById("dropdown").classList.remove("full");
    return document.getElementById("nav-hamburger").style.display = "block";
  }
  
  return (
    <div id="dropdown">
      <Link to="/"><h1 className="dropdown-link" onClick={hamburgerShow}>Home</h1></Link>
      <Link to="/contact"><h1 className="dropdown-link" onClick={hamburgerShow}>Contact</h1></Link>
      <Link to="/about"><h1 className="dropdown-link" onClick={hamburgerShow}>About</h1></Link>
      <Link to="/pricing"><h1 className="dropdown-link" onClick={hamburgerShow}>Pricing</h1></Link>
    </div>
  )
}

export default Dropdown;