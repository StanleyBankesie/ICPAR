import UploadMedia from "../components/admin/UploadMedia";
import UploadBlog from "../components/admin/UploadBlog";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UploadMedia />
      <UploadBlog />
    </div>
  );
};

export default AdminPage;
