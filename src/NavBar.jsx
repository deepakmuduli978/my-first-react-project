import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">NavBar</div>

      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/service">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/bookticket">BookTicket</a></li>
      </ul>
    </nav>

    </div>
  )
}

export default NavBar