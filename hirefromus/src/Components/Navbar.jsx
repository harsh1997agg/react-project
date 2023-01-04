import React from 'react';
import "./Navbar.css";
import horizontallogo from "./../Assets/Horizontal Logo.png";
import futurense from "./../Assets/Futurense.png";
import BentoMenu from "./../Assets/Bento-Menu.png";
function Navbar(props) {
    return (
       
        <div className="navbarDiv ">
          <nav className="navbar navbar-expand-lg navbar-light col-12 pl-lg-5 ">
            <a className="navbar-brand offset-lg-1  pl-lg-3 "  href="#"
              ><img
                src={horizontallogo}
                className="d-none d-lg-block"
                style={{ height:"50px"}}
                alt="Futurense"
              />
      
              <img
                className="d-block d-lg-none" 
                src={futurense}
                style={{ height:"50px"}}
                alt="Futurense"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span> <img src={BentoMenu} alt="menu" /> </span>
            </button>
      
            <div
              className="collapse navbar-collapse offset-lg-4"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Hire from us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Apply to Upskill</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FuturenseUni</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
   
    );
}

export default Navbar;