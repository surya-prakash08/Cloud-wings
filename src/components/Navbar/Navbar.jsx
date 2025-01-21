

import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './Navbar.css';
import logo from '../assets/logo.png';
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 hooks

const Navbar = () => {


  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; // Optional: Loader while Auth0 initializes
  }

  return (
    <nav className="main-container">
      {/* Logo Section */}
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="options">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mybooking">My Booking</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/search-flight">Search Flight</Link></li>
      </ul>

      {/* Button Section */}
      <div className="btn-container">

        {!isAuthenticated ? (
          <>
            <button
              className="loginBtn"
              onClick={() => loginWithRedirect()}
            >
              <span>Login</span>
            </button>
            <button
              className="signupBtn"
              onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
            >
              <span>Signup</span>
            </button>
          </>
        ) : (
          <div>
            <span style={{ marginRight: '15px' }}>Hi, {user.name}</span>
            <button
              className="logoutBtn"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span>Logout</span>
            </button>
            </div>
        )}
            
          </div>
    </nav>
  );
};

export default Navbar;
