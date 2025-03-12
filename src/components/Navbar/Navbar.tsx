import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin,FaGithub } from "react-icons/fa"; 
import "./Navbar.css"; // Import separate CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="src/assets/avatar.png" alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://github.com/gerharddev" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gerhard-maree-90a77083/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
