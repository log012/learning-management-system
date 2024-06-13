"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState();
   console.log(selectedVideo?.videoUrl)
  const searchParams=useSearchParams();
  const id=searchParams.get('id');
 

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
      //   const response = await fetch(`/api/course?id=${id}`); // Assuming the backend API endpoint is '/api/course'
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch course data");
      //   }
      //   const data = await response.json();
      //   setCourseData(data.courseWithVideos);
      const res=await axios.get('/api/courses/single-record?id='+id);
      if (res) {
        setCourseData(res.data.courseWithVideos);
        console.log(res.data.courseWithVideos);
      }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCourseData();
  }, []);
  // console.log(courseData.videoUrl)
  const toggleLock = async () => {
    try {
      const response = await fetch(`/api/courses/single-record?id=${id}`); // Assuming the backend API endpoint is '/api/course'
      if (!response.ok) {
        throw new Error("Failed to toggle lock status");
      }
      const data = await response.json();
      setCourseData(data.course);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <h1 className="text-2xl mb-4">Course Sections</h1>
        <ul>
          {courseData.map((section) => (
            
            <li
              key={section.id}
              className="mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedVideo(section)}
            >
              {section.videoTitle}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 bg-gray-100 p-4 m-auto flex flex-col items-center">
        <h1 className="text-2xl mb-4">{courseData.title}</h1>

        <div className="relative">

          <iframe
            width="800"
            height="500"
            src={selectedVideo?.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {courseData.locked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11V7a4 4 0 00-8 0v4m12 0V7a4 4 0 10-8 0v4m-6 4h20v7H6v-7z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex">
          <button
            className={`mt-4 me-2  px-4 py-2 rounded ${
              courseData.locked ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            } text-white `}
            onClick={toggleLock}
          >
            {courseData.locked ? "Unlock" : "Lock"}
          </button>

          <Link href="/admin/course" className="block px-4 mt-4 py-2 rounded bg-orange-300 hover:bg-orange-400">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
