import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ExecutivePage from "./pages/Executive";
import PressReleasePage from "./pages/PressRelease";
import StructurePage from "./pages/Structure";
import GalleryPage from "./pages/Gallery";
import ScrollToTop from "./components/common/ScrollToTop";
import UploadBlog from "./components/admin/UploadBlog";
import UploadMedia from "./components/admin/UploadMedia";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/executive" element={<ExecutivePage />} />
            <Route path="/press" element={<PressReleasePage />} />
            <Route path="/structure" element={<StructurePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/admin/blog" element={<UploadBlog />} />
            <Route path="/admin/media" element={<UploadMedia />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
