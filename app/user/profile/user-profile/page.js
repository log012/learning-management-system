"use client"
import Layout from '@/app/components/UserLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';


const Profile = () => {
    const [user, setUser] = useState([]);
    console.log(user);

    const fetchUser = async () => {
        const res = await axios.get('/api/users/single-user');
        if (res) {
            setUser(res.data.data);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleSave = () => {
        // Add save logic here (e.g., API call)
        setEditMode(false);
    };

    return (
        <>
            <Layout>
                <div className="space-y-8">
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        {user.map((e) => {
                            return (

                                <>

                                    <div className="mb-4">
                                        <label className="block text-gray-700">Name</label>
                                        {editMode ? (
                                            <input
                                                type="text"
                                                name="name"
                                                value={e.name}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        ) : (
                                            <p className="mt-1 text-gray-600">{e.name}</p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email</label>
                                        {editMode ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={e.email}
                                                onChange={handleInputChange}
                                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        ) : (
                                            <p className="mt-1 text-gray-600">{e.email}</p>
                                        )}
                                    </div>
                                   
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={handleEditToggle}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                        >
                                            {editMode ? 'Cancel' : 'Edit'}
                                        </button>
                                        {editMode && (
                                            <button
                                                onClick={handleSave}
                                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                                            >
                                                Save
                                            </button>
                                        )}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Profile;
