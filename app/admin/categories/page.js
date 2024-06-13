'use client'
import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import axios from 'axios';
import Link from 'next/link';

const Categories = () => {
    const [categories,setCategories]=useState([]);

    const getData=async()=>{
         const res=await axios.get('/api/categories');
         if(res){
            //  let values=Object.values(res.data);
             console.log(res.data.categories)
             setCategories(res.data.categories)
         }else{
             console.log('error');
         }
    }

    useEffect(()=>{
        getData()
    },[]);
  return (
    // <div>Categories</div>
    <Layout>
    <div className=" mx-auto px-4 py-8 ml-[13rem] mt-16">
    <h1 className="text-3xl font-bold mb-8">Categories</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {categories.map((category) => (
        <div key={category.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
          <p className="text-gray-700 mb-4">{category.description}</p>
          <Link href={`/categories/${category.id}`} className='text-blue-500 hover:underline'>
          Explore {category.name}
          </Link>
          <br />
          <Link href={`/admin/categories/update?id=${category.id}`} className='text-green-500 hover:underline mt-2'>
              Update
          </Link>
        </div>
      ))} 
    </div>
  </div>

    </Layout>
  )
}

export default Categories