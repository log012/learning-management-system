// components/CourseList.js
'use client'
import CategoryFilter from "@/app/components/CategoryFilter";
import Navbar from "@/app/components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const courses = [
  { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming.", image: "/images/course1.jpg" },
  { id: 2, title: "Advanced JavaScript", description: "Deep dive into JavaScript and its features.", image: "/images/course2.jpg" },
  { id: 3, title: "React for Beginners", description: "Learn how to build web applications using React.", image: "/images/course3.jpg" },
  // Add more courses as needed
];

const fetchCourseByID=async(categoryId)=>{
    const res=await axios.get('/api/filterCourse?category='+categoryId);
    return res.data.courses;
}
const fetchCourse=async()=>{
    const res=await axios.get('/api/courses');
    return res.data.course;
}
const fetchCategories=async()=>{
    const res=await axios.get('/api/categories');
    return res.data.categories;
}
const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  console.log(selectedCategory)
   useEffect(()=>{
       const getCategories=async()=>{
           const categories=await fetchCategories();
           console.log(categories);
            setCategories([{id:'0',name:'All'},...categories])
             
       } ;
       getCategories();
   },[])

   useEffect(()=>{
    const getCourses=async()=>{
      if(selectedCategory==='0'){
        const courses=await fetchCourse();
        console.log(courses);
        setCourses(courses);
      }else{
        const courses=await fetchCourseByID(selectedCategory);
        console.log(courses);
        setCourses(courses);
      }
        
       
    }
    getCourses();
   },[selectedCategory]);
  return (

    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={`/uploads/${course.image}`} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CourseList;
