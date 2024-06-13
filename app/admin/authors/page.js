// app/authors/page.js
'use client'
import { useState, useEffect } from 'react';
import Layout from '../Layout';
import axios from 'axios';
import Link from 'next/link';

export default function DisplayAuthors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAuthors = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/api/author');
        setAuthors(res.data.author);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  const handleClick = async (id) => {
    try {
      const res = await axios.delete(`/api/author/delete`, { data: { id } });
      if (res.status === 200) {
        setAuthors(authors.filter(author => author.id !== id));
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center mt-[9rem] ml-[13rem]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Authors List</h1>
          {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">ID</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {authors.map((author) => (
                    <tr key={author.id}>
                      <td className="py-2 px-4 border-b border-gray-200">{author.id}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{author.name}</td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <Link href={`/admin/authors/update?id=${author.id}`} className='text-black-500 hover:underline mt-2 me-2 border border-black p-2 rounded bg-green-600'>
                          Update
                        </Link>
                        <button
                          onClick={() => handleClick(author.id)}
                          className='text-black hover:underline mt-2 border border-black p-2 rounded bg-red-600'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
