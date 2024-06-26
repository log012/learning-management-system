'use client'
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LogoutButton from '../Logout';
import Login from './Login';
import Signup from './Signup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  console.log(session)
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Learn With Fun</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {session ? (
              <DropdownMenu />
            ) : (
              <>
                <Login />
                <Signup />
              </>
            )}
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItem href="/" label="Home" isActive={pathname === '/'} />
              <NavItem href="/about" label="About" isActive={pathname === '/about'} />
              <NavItem href="/services" label="Services" isActive={pathname === '/services'} />
              <NavItem href="/contact" label="Contact" isActive={pathname === '/contact'} />
              <NavItem href="/user/courses" label="Courses" isActive={pathname === '/user/courses'} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ href, label, isActive }) => {
  return (
    <li>
      <a href={href} className={isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'} aria-current={isActive ? 'page' : null}>
        {label}
      </a>
    </li>
  );
};

const DropdownMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
   const { data: session, status } = useSession();

  return (
    <div className="relative">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex items-center p-2 text-sm font-medium text-gray-700 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span>{session.user.name}</span>
        <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg py-1 z-20 ">
         <FontAwesomeIcon icon="fa-solid fa-user" /> <a href="/user/profile" className="block mx-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:rounded hover:w-28 hover:m-0 ">Profile</a>
          <a href="#" className="block mx-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:rounded hover:w-28 hover:m-0">Settings</a>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default Navbar;
