import Link from 'next/link'
import React from 'react'
import LogoutButton from '../Logout'

const UserNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-2.5">
    <div className="flex justify-between items-center">
      <div className="text-2xl">Navbar</div>
      <div>
        <LogoutButton/>
      </div>
    </div>
  </nav>
  )
}

export default UserNavbar