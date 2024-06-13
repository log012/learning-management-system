// components/Layout.js

import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AdminNavbar from '../components/AdminNavbar';


const Layout = ({ children }) => {
  return (
  
    <div className="flex h-screen">
    <Sidebar />
      <div className="flex flex-col flex-1">
        <AdminNavbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
