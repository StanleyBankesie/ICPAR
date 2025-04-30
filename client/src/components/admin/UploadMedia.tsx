import { useState } from "react";
import axios from "axios";

const UploadMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("Events");
  const [title, setTitle] = useState<string>(""); // New state for title
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file || !title) {
      setMessage("Please select a file and provide a title.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Changed from "image" to "file" to match backend multer middleware
    formData.append("category", category);
    formData.append("title", title); // Append the title to form data

    try {
      setUploading(true);
      setMessage("");

      const response = await axios.post(
        "http://localhost:5000/api/media/upload",
        formData
      );

      setMessage(
        `Upload successful: ${response.data.filename || "File uploaded"}`
      );
      setFile(null);
      setTitle(""); // Clear the title field after successful upload
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Axios error:", errorMsg);
        setMessage(`Upload failed: ${errorMsg}`);
      } else {
        console.error("Unknown error:", error);
        setMessage("An unexpected error occurred.");
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
        Upload Image or Video
      </h2>

      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full mb-4 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
      />

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a title for the media"
      />

      <label className="block mb-2 text-sm font-medium text-gray-700">
        Select Category
      </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Events">Events</option>
        <option value="Training">Training</option>
        <option value="Messages">Messages</option>
        <option value="Regional">Regional</option>
        <option value="Leadership">Leadership</option>
        <option value="Worship">Worship</option>
        <option value="Outreach">Outreach</option>
      </select>

      {file && (
        <p className="text-sm text-gray-600 mb-2">
          Selected file: <strong>{file.name}</strong>
        </p>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading || !file || !title}
        className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition ${
          uploading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {message && (
        <div className="mt-4 text-center text-sm text-gray-700">{message}</div>
      )}
    </div>
  );
};

export default UploadMedia;
