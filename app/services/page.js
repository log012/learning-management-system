import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
     <Navbar/>
     <section class="py-12 px-4 md:px-8 mt-16">
     <div class="max-w-7xl mx-auto">
       <h2 class="text-4xl font-bold text-center mb-12">Our Services</h2>
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
         <div class="bg-white shadow-md rounded-lg overflow-hidden">
           <img src="service1.jpg" alt="Service 1" class="w-full h-64 object-cover"/>
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">Wide Range of Courses</h3>
             <p class="text-gray-700">Access a diverse selection of courses covering various topics tailored to meet your learning needs.</p>
           </div>
         </div>
         
         <div class="bg-white shadow-md rounded-lg overflow-hidden">
           <img src="service2.jpg" alt="Service 2" class="w-full h-64 object-cover"/>
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">Interactive Learning Experience</h3>
             <p class="text-gray-700">Engage with interactive content and activities designed to enhance your learning experience.</p>
           </div>
         </div>
         
         <div class="bg-white shadow-md rounded-lg overflow-hidden">
           <img src="service3.jpg" alt="Service 3" class="w-full h-64 object-cover"/>
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">Flexible Learning Options</h3>
             <p class="text-gray-700">Learn at your own pace and convenience with flexible scheduling options and access from any device.</p>
           </div>
         </div>
       </div>
     </div>
   </section>
   <Footer/>
    </>
  )
}

export default page