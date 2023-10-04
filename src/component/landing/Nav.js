import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import {Link, animateScroll as scroll} from 'react-scroll'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="h-16 z-999 w-full fixed bg-white shadow-lg">
        <section className="fixed mx-auto"> 
          <nav className="flex flex-col xl:flex-row text-white w-screen">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center items-start">
              <div className="flex lg:block w-full mx-5 lg:w-48 justify-between">
                <NavLink to="/" className="text-3xl font-bold font-heading">
                  <img src={logo} alt="logo" />
                </NavLink>
                <div className="navbar-burger text-textblue self-center cursor-pointer mx-4 xl:hidden" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>

              <ul
                className={`${
                  isMenuOpen ? "block" : "hidden lg:flex"
                } flex flex-col lg:flex-row lg:space-x-7 px-4  font-medium text-black font-heading`}
              >
                <li className="py-3 lg:py-0">
                <Link
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                offset={-70}
                className="cursor-pointer"
                duration={500}
              >
                    Features
                  </Link>
                </li>
                <li className="py-3 lg:py-0">
                <Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                className="whitespace-nowrap cursor-pointer"
                duration={500}
              >
                    How It Works
                  </Link>
                </li>
              </ul>

              <div className={`${
                  isMenuOpen ? "block" : "hidden lg:flex"
                } flex items-center text-bluetwo text-lg font-semibold px-4 space-y-5 py-3 lg:py-0 lg:space-y-0 space-x-5 `}>
                <NavLink to="/login" className="text-textblue whitespace-nowrap">
                  Get Started
                </NavLink>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Nav;
