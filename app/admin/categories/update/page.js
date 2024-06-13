'use client'
import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import axios from 'axios';
import { useRouter,useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';

// import { useRouter } from 'next/router';

const Categories = () => {
    const params=useSearchParams();
    const router=useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [item,setItem]=useState({});
    const id=params.get('id');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

    
        try {
          const response = await axios.put('/api/categories/update', { name,description,id });
          if (response.status === 201) {
            alert('update successful!');
            // Optionally, you can clear the form fields here
            setName('');
            setDescription('');
            router.push('/admin/categories')
    
          } else {
            alert('update failed!');
          }
        } catch (error) {
          console.error('Error during updation:', error);
          alert('An error occurred during registration.');
        }
      };

      const getSinglecategory=async()=>{
        const res = await axios.get('/api/categories/single-category?id='+id);
        if (res) {
          console.log(res.data.category);
          setItem(res.data.category);
        } else {
          console.log('error');
        }
      }
      useEffect(()=>{
        getSinglecategory();
      },[])

      useEffect(()=>{
        if(item.length > 0){
          setName(item[0].name);
          setDescription(item[0].description);
        }
      },[item])
  return (
    <Layout>
        <div className='ml-[16rem] mt-24'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Update Category</h2>
  
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Category Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>
  
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
      </form>
        </div>
    </Layout>
  )
}

export default Categories