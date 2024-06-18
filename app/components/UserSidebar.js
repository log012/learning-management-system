"use client"
import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { ALargeSmall } from 'lucide-react';
import { useSession } from 'next-auth/react';
const UserSidebar = () => {
  const session=useSession();
  console.log(session.data.user.name);
  return (
    <div className="h-full bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
    <div className="text-white text-xl flex items-center space-x-2 px-4">
      <span>Name:{session.data.user.name}</span>
    </div>
    <nav>
   
      <Link href="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        
      Home
      
      </Link>
      <Link href="/user/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        
      Dashboard
      
      </Link>
      <Link href="/user/profile/enrolled-courses" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
    
         Enrolled Courses
    
      </Link>
      <Link href="/user/profile/user-profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        
          Profile
        
      </Link>
      <Link href="/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        
          Settings
        
      </Link>
    </nav>
  </div>
  )
}

export default UserSidebar