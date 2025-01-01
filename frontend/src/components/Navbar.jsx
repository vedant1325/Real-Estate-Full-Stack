import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'; // Import react-scroll

const Navbar = () => {
  const [mobileMenu, SetMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // If token exists, set the user as logged in
    } else {
      setIsLoggedIn(false); // If no token, user is not logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token to log out the user
    setIsLoggedIn(false); // Update state to reflect logout
    navigate('/'); // Navigate to home page after logout
  };

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenu]);

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className="container flex mx-auto justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img onClick={() => navigate('/')} className="cursor-pointer" src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <Link to="header" smooth={true} duration={1000} className="cursor-pointer hover:text-gray-400">
            Home
          </Link>
          <Link to="About" smooth={true} duration={1000} className="cursor-pointer hover:text-gray-400">
            About
          </Link>
          <Link to="Projects" smooth={true} duration={1000} className="cursor-pointer hover:text-gray-400">
            Projects
          </Link>
          <Link to="Testimonials" smooth={true} duration={1000} className="cursor-pointer hover:text-gray-400">
            Testimonials
          </Link>
          
        </ul>
        {!isLoggedIn ? (
          <button
            className="bg-white px-8 py-2 rounded-full hidden hover:scale-105 md:block "
            onClick={() => navigate('/login')} // Navigate to signup page
          >
            Sign up
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className=" hover:scale-105 hover:bg-red-500 hover:text-white bg-white px-8 py-2 rounded-full hidden md:block  "
          >
            Logout
          </button>
        )}
        <img
          onClick={() => SetMobileMenu(true)}
          src={assets.menu_icon}
          className="cursor-pointer md:hidden w-7"
          alt="Menu Icon"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          mobileMenu ? 'fixed w-full' : 'h-0 w-0'
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => SetMobileMenu(false)}
            className="p-1 w-8 hover:bg-slate-400 hover:rounded-full"
            src={assets.cross_icon}
            alt="Close Icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg">
          <Link
            to="header"
            smooth={true}
            duration={1000}
            className="px-4 py-2 rounded inline-block"
            onClick={() => SetMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="About"
            smooth={true}
            duration={1000}
            className="px-4 py-2 rounded inline-block"
            onClick={() => SetMobileMenu(false)}
          >
            About
          </Link>
          <Link
            to="Projects"
            smooth={true}
            duration={1000}
            className="px-4 py-2 rounded inline-block"
            onClick={() => SetMobileMenu(false)}
          >
            Projects
          </Link>
          <Link
            to="Testimonials"
            smooth={true}
            duration={1000}
            className="px-4 py-2 rounded inline-block"
            onClick={() => SetMobileMenu(false)}
          >
            Testimonials
          </Link>
          
        </ul>
        {!isLoggedIn ? (
          <button
            className="bg-gradient-to-r from-cyan-600 to-blue-800 hover:scale-110 text-white px-8 py-2 rounded-full mt-5 mx-auto block"
            onClick={() => {
              SetMobileMenu(false);
              navigate('/login');
            }}
          >
            Sign up
          </button>
        ) : (
          <button
            onClick={() => {
              SetMobileMenu(false);
              handleLogout();
            }}
            className="bg-red-500 hover:scale-110 text-white px-8 py-2 rounded-full mt-5 mx-auto block"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
