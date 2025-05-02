import axios from "axios";

const API = axios.create({ baseURL: "https://consolbackend.vercel.app/api" });

export const uploadItem = (data) => API.post("/add-course", data);
export const fetchItems = () => API.get("/courses");

export const uploadTemplate = (data) => API.post("/add-template", data);
export const fetchTemplates = () => API.get("/templates");

// Add fetchBlogs function to get all blogs (press releases)
export const fetchBlogs = (limit) => {
  const url = limit ? `/blogs?limit=${limit}` : "/blogs";
  return API.get(url);
};
