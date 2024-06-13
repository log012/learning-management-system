import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 class="text-2xl font-semibold mb-4">About Us</h3>
          <p class="text-gray-400">We provide high-quality online courses to help you achieve your learning goals. Our platform is user-friendly and our courses are taught by industry experts.</p>
        </div>
      
        <div>
          <h3 class="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Courses</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Support</a></li>
          </ul>
        </div>
       
        <div>
          <h3 class="text-2xl font-semibold mb-4">Contact Us</h3>
          <p class="text-gray-400 mb-2">123 Learning Lane</p>
          <p class="text-gray-400 mb-2">City, State, 12345</p>
          <p class="text-gray-400 mb-2">Email: info@lms.com</p>
          <p class="text-gray-400 mb-2">Phone: (123) 456-7890</p>
          <div class="mt-4">
            <a href="#" class="text-gray-400 hover:text-white mr-4"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-white mr-4"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-white mr-4"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="mt-8 text-center text-gray-500">
        <p>&copy; 2024 LMS, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer