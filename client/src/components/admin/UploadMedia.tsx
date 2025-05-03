import { useState } from "react";
import axios from "axios";

const UploadMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("Events");
  const [title, setTitle] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleUpload = async () => {
    if (!file || !title) {
      setMessage("Please select a file and provide a title.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // must match multer.single("image")
    formData.append("title", title);
    formData.append("category", category);

    try {
      setUploading(true);
      setMessage("");

      const response = await axios.post(
        "http://localhost:5000/api/create/blog",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setMessage("Blog created successfully!");
      console.log("New blog:", response.data.blog);
      setFile(null);
      setTitle("");
    } catch (err: any) {
      console.error("Upload error:", err.response || err.message);
      const errMsg = err.response?.data?.message || err.message;
      setMessage(`Upload failed: ${errMsg}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Create Blog Post
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full mb-4 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a title for the blog"
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Category
      </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      >
        <option value="Events">Events</option>
        <option value="Training">Training</option>
        <option value="Messages">Messages</option>
        <option value="Regional">Regional</option>
        <option value="Leadership">Leadership</option>
        <option value="Worship">Worship</option>
        <option value="Outreach">Outreach</option>
        <option value="Publications">Publications</option>
      </select>

      <button
        onClick={handleUpload}
        disabled={uploading || !file || !title}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Create Blog"}
      </button>

      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
      )}
    </div>
  );
};

export default UploadMedia;
