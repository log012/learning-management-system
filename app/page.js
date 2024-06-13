import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Image from "next/image";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="containerImage">
        <img src="/image2.jpg" style={{ width: "100vw", height: "100vh" }} className="imageText"></img>
        <div className="text-overlay ">
          <h4 className=" text-3xl text-center mb-2">
            Welcome to Learn With Fun </h4>
          <h1 className="text-4xl mb-2"> Empowering Knowledge, Inspiring Growth</h1>
          <p className="mb-4">Discover a world of learning at your fingertips. Our platform provides seamless access to a diverse range of courses, ensuring you stay ahead in your career.</p>
          <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" href="/user/courses">EXPLORE COURSES</Link>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center px-4 md:px-14 mt-14" >

        <div class="md:w-1/2">
          <img src="image1.jpg" alt="Descriptive Alt Text" class="w-full h-auto" />
        </div>


        <div class="md:w-1/2 p-8">
          <h3 class="text-xl font-bold mb-4">Empowering Knowledge, Inspiring Growth.</h3>
          <h1 class="text-6xl mb-4">Begin your journey today</h1>
          <p>Learn, Grow, and Succeed with <span className="font-bold">Learn With Fun</span></p>

        </div>
      </div>
      <section class="bg-gray-100 py-12 px-4 md:px-8">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div class="flex flex-col md:flex-row md:space-x-8">
          
          <div class="bg-white shadow-md rounded-lg p-6 mb-8 md:mb-0 md:flex-1">
            <img src="/whyusimg1.jpg" alt="Feature 1 Icon" class="w-56 h-44 mx-auto mb-4"/>
            <h3 class="text-2xl font-semibold mb-2">Comprehensive Course Library</h3>
            <p class="text-gray-600">Access a wide range of courses tailored to meet your learning needs, from technical skills to soft skills.</p>
          </div>
          
          <div class="bg-white shadow-md rounded-lg p-6 mb-8 md:mb-0 md:flex-1">
            <img src="/whyusimg2.jpg" alt="Feature 2 Icon" class="w-56 h-44 mx-auto mb-4"/>
            <h3 class="text-2xl font-semibold mb-2">User-Friendly Interface</h3>
            <p class="text-gray-600">Navigate through your learning journey effortlessly with our intuitive and easy-to-use platform.</p>
          </div>
        
          <div class="bg-white shadow-md rounded-lg p-6 md:flex-1">
            <img src="/whyusimg3.jpg" alt="Feature 3 Icon" class="w-56 h-44 mx-auto mb-4"/>
            <h3 class="text-2xl font-semibold mb-2">24/7 Support</h3>
            <p class="text-gray-600">Get help whenever you need it with our round-the-clock support team, dedicated to your success.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 px-4 md:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">Benefits of Our Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
            
            <i class="fas fa-book-open w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Flexible Learning</h3>
          <p class="text-gray-600">Learn at your own pace, anytime, anywhere. Our LMS offers the flexibility you need to fit learning into your busy schedule.</p>
        </div>
       
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
          <i class="fas fa-chalkboard-teacher w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Interactive Content</h3>
          <p class="text-gray-600">Engage with interactive courses designed to keep you motivated and improve your retention of information.</p>
        </div>
     
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
          <i class="fas fa-chart-line w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Performance Tracking</h3>
          <p class="text-gray-600">Monitor your progress with our advanced tracking tools. Set goals and see your achievements in real-time.</p>
        </div>
        
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
          <i class="fas fa-user-tie w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Expert Instructors</h3>
          <p class="text-gray-600">Learn from industry experts who bring real-world experience and knowledge to the courses.</p>
        </div>
      
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
          <i class="fas fa-certificate w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Certification</h3>
          <p class="text-gray-600">Earn certifications upon completion of courses to showcase your skills and knowledge.</p>
        </div>
        
        <div class="bg-gray-100 shadow-md rounded-lg p-6">
          <div class="flex items-center justify-center mb-4">
          <i class="fas fa-users w-12 h-12 text-blue-500"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-2">Community Support</h3>
          <p class="text-gray-600">Join a community of learners and get support from peers and instructors to enhance your learning experience.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 py-12 px-4 md:px-8">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-8">In-Demand Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image1.jpg" alt="Course 1 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 1</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
       
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image2.jpg" alt="Course 2 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 2</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
        
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image3.jpg" alt="Course 3 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 3</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
       
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image4.jpg" alt="Course 4 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 4</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
        
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image5.jpg" alt="Course 5 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 5</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
        
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <img src="course-image6.jpg" alt="Course 6 Image" class="w-full h-48 object-cover"/>
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">Course Title 6</h3>
            <p class="text-gray-600 mb-4">Brief description of the course, highlighting key topics and benefits.</p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">Enroll Now</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
    </>

  );
}
