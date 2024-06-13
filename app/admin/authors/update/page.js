// app/add-author/page.js

'use client';

import { useEffect, useState } from 'react';
import Layout from '../../Layout';
import axios from 'axios';
import { useRouter,useSearchParams } from 'next/navigation';

export default function AddAuthor() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [item,setItem]=useState({});
  console.log(item);
  
    const router=useRouter();
    const params=useSearchParams();
    const id=params.get('id');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await axios.put('/api/author/update',{name,id})

      if (!res) {
        const errorData = await res.data;
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await res.data;
      console.log(data)
      setSuccess(`Author "${data.result}" update successfully!`);
      setName('');
      router.push('/'+'admin/authors')
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getSingleauthor=async()=>{
    const res = await axios.get('/api/author/single-author?id='+id);
    if (res) {
      console.log(res.data.author);
      setItem(res.data.author);
    } else {
      console.log('error');
    }
  }

useEffect(()=>{
  getSingleauthor();

},[])

 useEffect(()=>{
    if(item.length > 0){
      setName(item[0].name)
    }
    // const author=item[0];
    // console.log(author);
    // setName(author.name)
   
 },[item])

  return (
    <Layout>
    <div className=" flex items-center justify-center mt-[13rem] ml-[13rem]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Author</h1>
        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Author Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Author'}
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
}
