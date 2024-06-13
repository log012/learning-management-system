import React from 'react'
import LogoutButton from '../Logout'

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 p-4 ml-[13rem] fixed left-0 right-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow me-2">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-[70%] p-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" 
          />
        </div>
        <LogoutButton/>
      </div>
    </nav>
  )
}

export default AdminNavbar
