import { useState, useEffect } from "react";
import UploadMedia from "../components/admin/UploadMedia";
import UploadBlog from "../components/admin/UploadBlog";
import Register from "./Register";
import AdminLogin from "./AdminLogin";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activePage, setActivePage] = useState<
    "login" | "register" | "uploadMedia" | "uploadBlog"
  >("login");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
      setActivePage("uploadMedia");
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setActivePage("uploadMedia");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
    setActivePage("login");
  };

  const renderPage = () => {
    if (!isAuthenticated) {
      if (activePage === "login") {
        return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
      } else if (activePage === "register") {
        return <Register onRegisterSuccess={handleLoginSuccess} />;
      }
    } else {
      switch (activePage) {
        case "uploadMedia":
          return <UploadMedia />;
        case "uploadBlog":
          return <UploadBlog />;
        default:
          return <UploadMedia />;
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {!isAuthenticated ? (
        <nav className="mb-6 flex space-x-4">
          <button
            onClick={() => setActivePage("login")}
            className={`px-4 py-2 rounded ${
              activePage === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActivePage("register")}
            className={`px-4 py-2 rounded ${
              activePage === "register"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Register
          </button>
        </nav>
      ) : (
        <>
          <nav className="mb-6 flex space-x-4">
            <button
              onClick={() => setActivePage("uploadMedia")}
              className={`px-4 py-2 rounded ${
                activePage === "uploadMedia"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Upload Media
            </button>
            <button
              onClick={() => setActivePage("uploadBlog")}
              className={`px-4 py-2 rounded ${
                activePage === "uploadBlog"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Upload Blog
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-600 text-white"
            >
              Logout
            </button>
          </nav>
        </>
      )}
      <div>{renderPage()}</div>
    </div>
  );
};

export default AdminPage;
