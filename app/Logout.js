// components/LogoutButton.js
'use client';

import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  return (
    <button className="block mx-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 " onClick={() => signOut({ callbackUrl: '/user/login' })}>
      Logout
    </button>
  );
};

export default LogoutButton;
