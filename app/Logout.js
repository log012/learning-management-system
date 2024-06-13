// components/LogoutButton.js
'use client';

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 me-2" onClick={() => signOut({ callbackUrl: '/user/login' })}>
      Logout
    </button>
  );
};

export default LogoutButton;