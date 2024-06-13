import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LogoutButton from '@/app/Logout';
import Layout from '../Layout';

const AdminDashboard =async ({children}) => {
    const session=await getServerSession(authOptions);
    if(!session||session.user.role!='admin'){
        return <div>unauthorized</div>
    }
  return (
    <Layout>
    <div className="p-6 bg-gray-100  ml-[16rem] mt-16">
    <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Management Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Users Management</h3>
            <p className="text-gray-600 mb-4">Manage all users, instructors, and students.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Users</button>
        </div>

        {/* Courses Management Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Courses Management</h3>
            <p className="text-gray-600 mb-4">Create, update, and manage courses.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">View Courses</button>
        </div>

        {/* Reports and Analytics Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Reports & Analytics</h3>
            <p className="text-gray-600 mb-4">View reports and analyze data.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md">View Reports</button>
        </div>

        {/* Settings Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-gray-600 mb-4">Configure system settings and preferences.</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">View Settings</button>
        </div>

        {/* Notifications Card */}
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <p className="text-gray-600 mb-4">Manage notifications and alerts.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">View Notifications</button>
        </div>
    </div>
</div>
  </Layout>
  )
}



export default AdminDashboard