import React, { useState } from "react";
import axios from "axios";

const UploadBlog: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [datePublished, setDatePublished] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setImageFile(files && files.length > 0 ? files[0] : null);
  };

  const handleUpload = async () => {
    if (!title || !content || !imageFile || !datePublished || !category) {
      alert("Please fill out all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageFile);
    formData.append("datePublished", datePublished);
    formData.append("category", category);

    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/create/blog`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Blog created!");
      // reset form
      setTitle("");
      setContent("");
      setImageFile(null);
      setDatePublished("");
      setCategory("All");
    } catch (err) {
      console.error(err);
      alert("Blog upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>

      <input
        type="text"
        placeholder="Title"
        className="block w-full mb-4 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="block w-full mb-4 p-2 border rounded"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />
      {imageFile && (
        <p className="text-sm text-gray-600 mb-4">
          Selected file: {imageFile.name} ({Math.round(imageFile.size / 1024)}{" "}
          KB)
        </p>
      )}

      <input
        type="date"
        className="block w-full mb-4 p-2 border rounded"
        value={datePublished}
        onChange={(e) => setDatePublished(e.target.value)}
      />

      <select
        className="block w-full mb-4 p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Event">Event</option>
        <option value="Education">Education</option>
        <option value="Initiative">Initiative</option>
        <option value="Statement">Statement</option>
        <option value="Expansion">Expansion</option>
        <option value="Publications">Publications</option>
      </select>

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading…" : "Submit"}
      </button>
    </div>
  );
};

export default UploadBlog;
