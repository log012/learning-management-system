"use client";
import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CreateCourse() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImageFile] = useState(null);
  
  const [categoryId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [videoUrls, setVideoUrls] = useState([{ url: "", title: "" }]);
 console.log(videoUrls);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category_id", categoryId);
    formData.append("author_id", authorId);
    videoUrls.forEach((video) => {
      formData.append("videos[]", JSON.stringify(video));
    });

    try {
      const imageUpload = await axios.post("/api/courses/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (imageUpload) {
        console.log(imageUpload.data);
        router.push("/admin/course");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    const res = await axios.get("/api/categories");
    if (res) {
      console.log(res.data.categories);
      setCategories(res.data.categories);
    } else {
      console.log("error");
    }
  };

  const getAuthors = async () => {
    const res = await axios.get("/api/author");
    if (res) {
      console.log(res.data.author);
      setAuthors(res.data.author);
    } else {
      console.log("error");
    }
  };

  const handleVideoUrlChange = (index, field, value) => {
    const newVideoUrls = [...videoUrls];
    newVideoUrls[index][field] = value;
    setVideoUrls(newVideoUrls);
  };

  const addVideoUrlField = () => {
    setVideoUrls([...videoUrls, { url: "", title: "" }]);
  };

  useEffect(() => {
    getCategories();
    getAuthors();
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center mt-32 ml-[16rem]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Create a New Course</h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="price" className="block text-gray-700">Price</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label htmlFor="image" className="block text-gray-700">Image</label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium text-gray-700">Videos</label>
                {videoUrls.map((video, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="text"
                      placeholder="Video URL"
                      value={video.url}
                      onChange={(e) => handleVideoUrlChange(index, "url", e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md mb-2"
                    />
                    <input
                      type="text"
                      placeholder="Video Title"
                      value={video.title}
                      onChange={(e) => handleVideoUrlChange(index, "title", e.target.value)}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addVideoUrlField}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add Video
                </button>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label htmlFor="category" className="block text-gray-700">Category</label>
                <select
                  id="category"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label htmlFor="author" className="block text-gray-700">Author</label>
                <select
                  id="author"
                  value={authorId}
                  onChange={(e) => setAuthorId(e.target.value)}
                  className="mt-1 block w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Author</option>
                  {authors.map((author) => (
                    <option key={author.id} value={author.id}>{author.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
