// components/LoginForm.js
'use client'
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { useEffect, useState } from 'react';
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react';

import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      if (session.user.role === 'admin') {
        router.push('/admin/dashboard');
      } else {
        router.push('/');
      }
    }
  }, [session, status, router]);

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
  // console.log('Email:', email);
  // console.log('Password:', password);
  signIn("credentials", {
    email: email,
    password: password
  });
};
if (status === 'loading') return <p>Loading...</p>;

return (
  <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>

  </>
);
};

export default LoginForm;
