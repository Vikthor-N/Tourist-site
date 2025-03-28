import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import MenuButton from "../UI/MenuButton";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-6 md:px-10 lg:pl-[80px] py-6 md:py-8 lg:py-0">
        {/* Logo */}
        <div className="z-50">
          <img src={logo} alt="weblogo" className="h-10 md:h-12 lg:h-auto" />
        </div>

        {/* Decorative line - only on desktop */}
        <div className="hidden lg:block absolute h-[1px] bg-gray-300 top-16 left-[160px] right-[700px]"></div>

        {/* Navigation Menu */}
        <div className="flex items-center">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden z-50">
            <MenuButton isOpen={isOpen} onclick={toggleMenu} />
          </div>

          {/* Navigation Links */}
          <ul
            className={`
              fixed top-0 right-0 w-[70%] md:w-[50%] h-full 
              bg-white/10 backdrop-blur-2xl 
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              lg:translate-x-0 lg:relative lg:flex lg:w-auto lg:h-auto lg:bg-transparent lg:backdrop-blur-none
              flex flex-col lg:flex-row 
              items-start lg:items-center 
              pt-24 lg:pt-0 
              pl-10 lg:pl-0 
              gap-8 lg:gap-[60px] 
              text-white
            `}
          >
            {[
              { path: '/', number: '00', name: 'HOME' },
              { path: '/DESTINATION', number: '01', name: 'DESTINATION' },
              { path: '/CREW', number: '02', name: 'CREW' },
              { path: '/TECHNOLOGY', number: '03', name: 'TECHNOLOGY' }
            ].map((item) => (
              <li key={item.path} className="relative group">
                <NavLink 
                  to={item.path} 
                  className="flex items-center gap-2 py-2 lg:py-[30px]"
                >
                  <span className="font-bold">{item.number}</span>
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white lg:block hidden"></div>
                  )}
                  
                  {/* Mobile active indicator */}
                  {isActive(item.path) && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-full bg-white lg:hidden"></div>
                  )}
                  
                  {/* Hover indicator (only shows when not active) */}
                  {!isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/0 group-hover:bg-white/50 transition-colors lg:block hidden"></div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {!isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40" 
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;



