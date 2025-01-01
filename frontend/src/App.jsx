import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from '../Pages/Login'; // Ensure Login is imported
import Home from '../Pages/Home';
import { AppContextProvider } from '../Context/AppContext'; // Import the AppContextProvider

const App = () => {
  return (
    <AppContextProvider> 
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
};

export default App;
