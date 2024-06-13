// components/Table.js
import Link from 'next/link';
import React from 'react';

const Table = ({ data, currentPage, itemsPerPage, onPageChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table header */}
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sr NO
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
            </th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="bg-white divide-y divide-gray-200">
       
          {paginatedData.map(item => (
            
            <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.id}</div>
          </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{item.role}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">
              <Link href={`/admin/user/update/${item.id}`} className='me-2 border border-black p-2 rounded bg-blue-500 text-white'>Update</Link>
              <Link href={`/admin/user/delete/${item.id}`} className='border border-black rounded p-2 bg-red-500 text-white'>Delete</Link>
            </div>
          </td>
              {/* Add more fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          className="py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
