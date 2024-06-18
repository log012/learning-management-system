"use client"
import Layout from "@/app/components/UserLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Courses = () => {
  const [course,setCourse]=useState([]);
    const enrolledCourses = [
      {
        id: 1,
        title: 'Introduction to Programming',
        description: 'Learn the basics of programming with this beginner course.',
        progress: 80,
        lastAccessed: 'June 14, 2024',
      },
      {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Deep dive into advanced JavaScript concepts and techniques.',
        progress: 60,
        lastAccessed: 'June 10, 2024',
      },
      {
        id: 3,
        title: 'Web Development with React',
        description: 'Build modern web applications using React and Next.js.',
        progress: 50,
        lastAccessed: 'June 12, 2024',
      },
    ];
     const getData=async()=>{
         const res=await axios.get('/api/courses/enrolled-course/getEnrolledCourse');
         if(res){
          console.log(res.data.course);
          setCourse(res.data.course)
         }else{
          console.log('error');
         }
     }
     useEffect(()=>{
         getData();
     },[])
    return (
        <>
        
        
       <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Enrolled Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.map((course) => (
            <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={`/uploads/${course.image}`} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            
              <button href="" className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 w-[100%]">
              Course Overview
            </button>
            </div>
          </div>
          ))}
        </div>
      </div>
      </Layout>
       </>
    );
  };
  
  export default Courses;
  