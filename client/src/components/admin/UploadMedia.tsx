import React, { useState } from "react";
import axios, { AxiosError } from "axios";

const UploadMedia: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFile(files && files.length > 0 ? files[0] : null);
  };

  const handleUpload = async () => {
    if (!title || !file) {
      alert("Please provide a title and select a media file (image or video).");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);
    formData.append("category", category);

    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/media/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Media uploaded successfully!");
      setTitle("");
      setFile(null);
      setCategory("All");
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      console.error(error.response?.data);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      } else {
        alert("Media upload failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Media</h2>

      <input
        type="text"
        placeholder="Title"
        className="block w-full mb-4 p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="block w-full mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />
      {file && (
        <p className="text-sm text-gray-600 mb-4">
          Selected: {file.name} ({Math.round(file.size / 1024)} KB) -{" "}
          {file.type.startsWith("video") ? "Video" : "Image"}
        </p>
      )}

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

export default UploadMedia;
