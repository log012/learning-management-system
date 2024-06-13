import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <section class="bg-gray-100 py-12 px-4 md:px-8 mt-16">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-8">About Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <img src="/aboutus.jpg" alt="About Us Image" class="w-full h-auto rounded-lg shadow-md"/>
        </div>
       
        <div>
          <p class="text-xl text-gray-700 mb-4">We are committed to providing high-quality online education through our Learning Management System (LMS). With a focus on innovation and accessibility, we strive to empower learners from all backgrounds to achieve their goals.</p>
          <p class="text-xl text-gray-700 mb-4">Our team consists of experienced educators and technologists who are dedicated to creating engaging and effective learning experiences. Whether you're a student, professional, or lifelong learner, we have courses designed to meet your needs.</p>
          <p class="text-xl text-gray-700 mb-4">At our LMS, we believe that learning should be flexible, interactive, and personalized. That's why we offer a wide range of courses, interactive content, and personalized support to help you succeed on your learning journey.</p>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
    </>
  )
}

export default page