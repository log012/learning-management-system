// components/Sidebar.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Sidebar = () => {
  const { data: session, status } = useSession();
  
  return (
    <aside className="bg-gray-900 text-gray-100 w-52 fixed top-0 bottom-0">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4 pb-4 border-b border-gray-700">Admin Dashboard</h2>
        <ul className=''>
          <li className="mb-4 relative group">
            <Link href="/admin/dashboard" className="hover:text-white">Dashboard</Link>
          </li>
          <li className="mb-4 relative group">
            <Link href="/admin/course" className="hover:text-white">Course</Link>
            <ul className="absolute left-full top-0 bg-gray-800 text-white hidden group-hover:block w-32">
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/course/create"}>Create</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/course/update"}>Update</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/course"}>Show</Link></li>
            </ul>
          </li>
          <li className="mb-4 relative group">
            <Link href="/dashboard" className="hover:text-white">Students</Link>
            <ul className="absolute left-full top-0 bg-gray-800 text-white hidden group-hover:block w-32">
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/students/create"}>Create</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/students/update"}>Update</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/students"}>Show</Link></li>
            </ul>
          </li>
          <li className="mb-4 relative group">
            <Link href="/admin/categories" className="hover:text-white transition-colors duration-300">Categories</Link>
            <ul className="absolute left-full top-0 bg-gray-800 text-white hidden group-hover:block w-32 ">
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/categories/create"}>Create</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/categories/update"}>Update</Link></li>
              <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/categories"}>Show</Link></li>
            </ul>
          </li>
          <li className="mb-4 relative group">
          <Link href="/admin/authors" className="hover:text-white transition-colors duration-300">Authors</Link>
          <ul className="absolute left-full top-0 bg-gray-800 text-white hidden group-hover:block w-32 ">
            <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/authors/create"}>Create</Link></li>
            <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/authors/update"}>Update</Link></li>
            <li className="p-2 hover:bg-gray-700"><Link href={"/"+"admin/authors"}>Show</Link></li>
          </ul>
        </li>
          <li className="mb-2 relative group">
            <Link href="/dashboard" className="hover:text-white">Settings</Link>
          </li>
        </ul>
        <div className="mt-[18rem] p-4 border-t border-gray-700 items-end">
          <h2 className="font-semibold mb-4">Admin Details</h2>
          <div>
            <p className="text-xs">Name: {status === 'authenticated' ? session.user.name : null}</p>
            <p className="text-xs">Email: {status === 'authenticated' ? session.user.email : null}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
