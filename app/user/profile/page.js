import Navbar from '@/app/components/Navbar';
import Layout from '@/app/components/UserLayout';
import React from 'react';

const Profile = () => {
  return (
    <>
    <Layout>
    <div className="space-y-8">
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Recent Courses */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Course 1</p>
            <p className="text-sm text-gray-600">Last accessed: 2 days ago</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Course 2</p>
            <p className="text-sm text-gray-600">Last accessed: 3 days ago</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Course 3</p>
            <p className="text-sm text-gray-600">Last accessed: 5 days ago</p>
          </li>
        </ul>
      </div>

      {/* Progress Tracker */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Progress Tracker</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Course 1</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-600">70% complete</p>
          </div>
          <div>
            <p className="font-medium">Course 2</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <p className="text-sm text-gray-600">45% complete</p>
          </div>
          <div>
            <p className="font-medium">Course 3</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div className="bg-blue-600 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-600">85% complete</p>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Announcements</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">New course available: Course 4</p>
            <p className="text-sm text-gray-600">June 15, 2024</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Maintenance scheduled</p>
            <p className="text-sm text-gray-600">June 20, 2024</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">New feature: Interactive quizzes</p>
            <p className="text-sm text-gray-600">June 10, 2024</p>
          </li>
        </ul>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-2">
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Webinar: Learning Strategies</p>
            <p className="text-sm text-gray-600">June 18, 2024</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Live Q&A with Instructor</p>
            <p className="text-sm text-gray-600">June 22, 2024</p>
          </li>
          <li className="bg-gray-100 p-3 rounded-md">
            <p className="font-medium">Workshop: Advanced Topics</p>
            <p className="text-sm text-gray-600">June 25, 2024</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
    </Layout>
    </>
  );
};

export default Profile;
