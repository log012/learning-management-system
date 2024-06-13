'use client'
import React, { useState } from 'react'

const AdminLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      // console.log('Email:', email);
      // console.log('Password:', password);
      signIn("credentials",{
        email:email,
        password:password
      });
    };
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='w-[500px] shadow-md rounded-lg p-5'>
                <h1 className='text-2xl font-bold'>Admin Login</h1>
                <p>Welcome back</p>
               <form onSubmit={handleSubmit}>
               <div className='mt-5'>
               <label htmlFor="email" className='block'>Email</label>
               <input type="email" name="email" id="email" className='w-full p-2 border rounded-lg' onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className='mt-5'>
               <label htmlFor="password" className='block'>Password</label>
               <input type="password" name="password" id="password" className='w-full p-2 border rounded-lg' onChange={(e)=>setPassword(e.target.value)}/>

           </div>
           <div className='mt-5'>
               <button className='w-full p-2 bg-blue-500 text-white rounded-lg'>Login</button>
           </div>

               </form>

            </div>

        </div>
    )
}

export default AdminLogin