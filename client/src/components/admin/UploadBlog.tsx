import { useState } from "react";
import axios from "axios";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("All");

  const handleUpload = async () => {
    try {
      await axios.post("http://localhost:5000/api/create/blog", {
        title,
        content,
        imageUrl,
        date,
        category,
      });
      alert("Blog created!");
      setTitle("");
      setContent("");
      setImageUrl("");
      setDate("");
      setCategory("All");
    } catch (err) {
      console.error(err);
      alert("Blog upload failed!");
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
        type="text"
        placeholder="Image URL"
        className="block w-full mb-4 p-2 border rounded"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        type="date"
        className="block w-full mb-4 p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="block w-full mb-4 p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Event">Event</option>
        <option value="Education">Education</option>
        <option value="Publication">Publication</option>
        <option value="Initiative">Initiative</option>
        <option value="Statement">Statement</option>
        <option value="Expansion">Expansion</option>
      </select>

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default UploadBlog;
