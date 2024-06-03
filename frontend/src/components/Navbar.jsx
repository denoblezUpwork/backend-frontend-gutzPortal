import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './style/Navbar.css';
import logo from './style/images/g.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faWrench, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import faWrench and faPhone icons

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="header">
      <nav className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="Logo" className='logoImage' />
          <div>
            <span className='logoText'>Gutz Portal</span>
            <span className='logoText2'>Investments Tour Food</span>
          </div>
        </NavLink>
        <div className="menu" id="menu-nav">
          <ul className="navList">
            <li className="navItem">
              <NavLink to='/' className='navLink' exact>
                <FontAwesomeIcon icon={faHouse} /> Home
              </NavLink>
            </li>
            <li 
              className="navItem" 
              onMouseEnter={() => setDropdown(true)} 
              onMouseLeave={() => setDropdown(false)}
            >
              <NavLink to='/services' className='navLink'>
                <FontAwesomeIcon icon={faWrench} /> Services {/* Use faWrench icon here */}
              </NavLink>
              {dropdown && (
                <ul className="dropdownMenu">
                  <li>
                    <NavLink to='/services/Investments' className='dropdownLink'>Investments</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/service2' className='dropdownLink'>Tour</NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/service3' className='dropdownLink'>Food</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="navItem">
              <NavLink to='/contact' className='navLink'>
                <FontAwesomeIcon icon={faPhone} /> Contact Us {/* Use faPhone icon here */}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
