import { useState } from "react";
import axios from "axios";

const UploadMedia = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return alert("No file selected");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/media/upload", formData, {
        // 👇 DON'T set Content-Type manually — let Axios handle it!
        headers: {
          // 'Content-Type': 'multipart/form-data', ← ❌ Don't add this
        },
      });
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
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadMedia;
