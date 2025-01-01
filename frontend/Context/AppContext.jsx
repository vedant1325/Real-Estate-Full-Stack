import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext(null); // Create the context

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token is present in localStorage on component mount
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token to log out the user
    setIsLoggedIn(false); // Update state to reflect logout
    navigate('/'); // Navigate to home page after logout
  };

  // Context value
  const contextValue = {
    isLoggedIn,
    handleLogout, setIsLoggedIn
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children} {/* Render child components */}
    </AppContext.Provider>
  );
};
