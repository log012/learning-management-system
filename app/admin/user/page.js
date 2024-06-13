// pages/index.js
'use client'
import React, { useEffect, useState } from 'react';
import Table from './Table';
import Layout from '../Layout';
import axios from 'axios';


// const data = [
//   { id: 1, field1: 'Value 1', field2: 'Value 2' },
//   // Add more data as needed
// ];

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data,setData]=useState([]);
  const itemsPerPage = 5; // Adjust as needed

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const getData=async()=>{
    const res=await axios.get('/api/users');
    if(res){
        console.log(res.data.users)
        setData(res.data.users)
    }
  }

  useEffect(()=>{
    getData()
  },[]);
  return (
    <Layout>
    <div className=" mx-auto ml-[13rem] mt-16">
      <h1 className="text-2xl font-bold my-4">Table Example</h1>
      <Table
        data={data}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
    </Layout>
  );
};

export default Home;
