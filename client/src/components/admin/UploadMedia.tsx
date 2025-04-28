import { useState } from "react";
import axios from "axios";

const UploadMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("No file selected");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);

    try {
      await axios.post("http://localhost:5000/api/media/upload", formData);
      alert("Media uploaded!");
    } catch (err) {
      alert("Upload failed");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Upload Image/Video</h2>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;
