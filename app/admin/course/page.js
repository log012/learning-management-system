'use client'
import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import axios from 'axios';

const Course = () => {
 
  
  const [courses,setCourse]=useState([]);

  const getData=async()=>{
       const res=await axios.get('/api/courses');
       if(res){
          //  let values=Object.values(res.data);
           console.log(res.data.course)
           setCourse(res.data.course)
       }else{
           console.log('error');
       }
  }

  useEffect(()=>{
      getData()
  },[]);
  return (
    <Layout>
    <div className=" mx-auto ml-[16rem] mt-16">
    <h1 className="text-3xl font-semibold mb-8">Course List</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map(course => (
        <div key={course.id} className="bg-white p-6 rounded-lg shadow-md">
          <img src={`/uploads/${course.image}`} alt={course.title} className="w-full h-40 object-cover mb-4 rounded-md" />
          <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
          <p className="text-gray-600">Instructor: {course.instructor}</p>
          <p className="text-gray-600">category: {course.category}</p>
          <a href={`/admin/course/show-course?id=${course.id}`} className="mt-4  block text-center bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            View Details
          </a>
          <a href={`/admin/course/update?id=${course.id}`} className="mt-4 block text-center bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
          update
        </a>
        </div>
      ))}
    </div>
  </div>
       
    </Layout>
  )
}

export default Course