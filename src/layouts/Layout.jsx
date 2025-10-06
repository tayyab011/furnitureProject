import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='w-11/12 mx-auto flex-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Layout;