import React,{useState} from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const [hovered, setHovered] = useState(false);
  return (
<>  
 
<nav className="navD">
        <ul className="list">
          <img
            className="im"
            src="./mainlogo.png"
            alt=""
          />
          <li>
            <Link id="home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
        <div className="net">
         
        <img
      className="imd"
      src="./mainlogo.png"
      alt=""
    />
      <button 
         
        className="btn"
        id="bt"
        onMouseOver={() => {
          if (!hovered) setHovered(true);
        }}
        onMouseLeave={() => {
          if (hovered) setHovered(false);
        }}
      >  
        Browse
        {hovered && (
          <nav className="drop" id="dr"> 
          
            <ul className="listD" id="li">
              <li>
                <Link id="a" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link id="a" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link id="a" to="/service">
                  Services
                </Link>
              </li>
              <li>
                <Link id="a" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </button>
      </div>
      
</>
  )
}
