import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge } from '@fortawesome/free-solid-svg-icons';
import { ALargeSmall } from 'lucide-react';

const UserSidebar = () => {
  return (
    <div className="h-full bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
    <div className="text-white text-2xl flex items-center space-x-2 px-4">
      <span>LMS Dashboard</span>
    </div>
    <nav>
   
      <Link href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        
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