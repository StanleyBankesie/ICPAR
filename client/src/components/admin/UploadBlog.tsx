import { useState } from "react";
import axios from "axios";

const UploadBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async () => {
    try {
      await axios.post("http://localhost:5000/api/blogs/create", {
        title,
        content,
        imageUrl,
      });
      alert("Blog created!");
    } catch (err) {
      console.error(err);
      alert("Blog upload failed!");
    }
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleUpload}>Submit</button>
    </div>
  );
};

export default UploadBlog;
