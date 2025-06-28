import React, { useEffect, useState } from "react";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import api from "../api/api";

type GalleryItem = {
  _id: string;
  type: string; // "image" | "video"
  url: string;
  category: string;
  title?: string;
  createdAt: string;
};

const categories = [
  "All",
  "Events",
  "Training",
  "Messages",
  "Regional",
  "Leadership",
  "Worship",
  "Outreach",
  "Publications",
];

const GalleryPage: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await api.get("/media");
        console.log("Fetched media items:", response.data);
        // Sort media by createdAt descending to show new media first
        const sortedMedia = response.data.sort(
          (a: GalleryItem, b: GalleryItem) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setGalleryItems(sortedMedia);
        setError(null);
      } catch (error) {
        console.error("Error fetching media:", error);
        setError("Failed to fetch media items.");
      }
    };
    fetchMedia();
  }, []);

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item._id === lightboxItem._id
    );
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setLightboxItem(filteredItems[newIndex]);
  };

  return (
    <div>
      <PageBanner
        title="Gallery"
        subtitle="Browse our collection of photos and videos"
        bgImage="https://images.pexels.com/photos/1178686/pexels-photo-1178686.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Media Gallery"
            subtitle="Explore our collection of images and videos from events, conferences, and ministry activities around the world."
          />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-primary-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {error ? (
              <p className="text-center text-red-500 col-span-full">{error}</p>
            ) : filteredItems.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">
                No media items found.
              </p>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item._id}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  {item.type?.includes("image") ? (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title || ""}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-64 overflow-hidden relative">
                      <video
                        src={item.url}
                        poster=""
                        className="w-full h-full object-cover"
                        muted
                        loop
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-primary-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">
                      {item.title || "Untitled"}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-primary-700">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.type?.includes("image") ? "Photo" : "Video"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            onClick={() => navigateLightbox("prev")}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            onClick={() => navigateLightbox("next")}
          >
            <ChevronRight size={40} />
          </button>
          <div className="max-w-6xl w-full mx-auto">
            {lightboxItem.type?.includes("image") ? (
              <img
                src={lightboxItem.url}
                alt={lightboxItem.title}
                className="max-h-[80vh] mx-auto"
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 w-full">
                <video
                  className="w-full max-h-[80vh]"
                  controls
                  src={lightboxItem.url}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">
                {lightboxItem.title || "Untitled"}
              </h3>
              <p className="text-gray-300">{lightboxItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
