import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
  <>
    <Navbar/>
    <section class="py-12 px-4 md:px-8 mt-16">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Send us a message</h3>
            <form>
              <div class="mb-4">
                <label for="name" class="block text-gray-700">Your Name</label>
                <input type="text" id="name" name="name" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700">Your Email</label>
                <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
            </form>
          </div>
          <div class="p-6 bg-gray-100">
            <h3 class="text-xl font-semibold mb-2">Contact Information</h3>
            <p class="text-gray-700">Feel free to reach out to us with any questions or concerns. Our team is here to help!</p>
            <ul class="mt-4">
              <li class="flex items-center mb-2">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657-2.206 4-6 4-6s1.9 3.794 3.557 6C21.02 13.257 22 15.134 22 17c0 3.313-2.686 6-6 6-3.313 0-6-2.687-6-6 0-1.865.98-3.743 2.443-6zM12 13a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                <span>123 Main Street, Cityville</span>
              </li>
              <li class="flex items-center mb-2">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V8s-2-2-8-2-8 2-8 2v4c0 6 8 10 8 10z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>(123) 456-7890</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10c0-5-4-9-9-9s-9 4-9 9c0 2.033.81 4.076 2.188 5.554L12 21l5.844-5.446A8.003 8.003 0 0021 10zm-9-5c-3.313 0-6 2.686-6 6 0 4 6 10 6 10s6-6 6-10c0-3.314-2.687-6-6-6z"></path></svg>
                <span>info@example.com</span>
              </li>
            </ul>
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