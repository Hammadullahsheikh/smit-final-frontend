import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer /> {/* Footer ko yahaan add karein */}
    </>
  );
};

export default Layout;
