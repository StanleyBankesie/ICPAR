import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
//import { io, Socket } from 'socket.io-client';
//import axios from 'axios';

// ✅ Define a proper type for gallery items
type GalleryItem = {
  id: number;
  type: "image" | "video";
  title: string;
  src: string;
  poster?: string;
  category: string;
};

// Sample gallery data

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "image",
    title: "Annual Leadership Summit 2024",
    src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Events",
  },
  {
    id: 2,
    type: "image",
    title: "Prophetic Training Conference",
    src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Training",
  },
  {
    id: 3,
    type: "video",
    title: "Prophetic Vision for 2025",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster:
      "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Messages",
  },
  {
    id: 4,
    type: "image",
    title: "Jerusalem Prayer Summit",
    src: "https://images.pexels.com/photos/1178686/pexels-photo-1178686.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Events",
  },
  {
    id: 5,
    type: "image",
    title: "African Continental Gathering",
    src: "https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Regional",
  },
  {
    id: 6,
    type: "video",
    title: "Apostolic Leadership Conference Highlights",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster:
      "https://images.pexels.com/photos/8047040/pexels-photo-8047040.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Messages",
  },
  {
    id: 7,
    type: "image",
    title: "Executive Council Meeting",
    src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Leadership",
  },
  {
    id: 8,
    type: "image",
    title: "Youth Prophetic Training",
    src: "https://images.pexels.com/photos/6544846/pexels-photo-6544846.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Training",
  },
  {
    id: 9,
    type: "video",
    title: "Prophetic Worship Session",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster:
      "https://images.pexels.com/photos/7087668/pexels-photo-7087668.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Worship",
  },
  {
    id: 10,
    type: "image",
    title: "Asia Pacific Regional Conference",
    src: "https://images.pexels.com/photos/262005/pexels-photo-262005.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Regional",
  },
  {
    id: 11,
    type: "image",
    title: "ICPAR Humanitarian Mission",
    src: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Outreach",
  },
  {
    id: 12,
    type: "video",
    title: "Prophetic Declaration Service",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1280",
    category: "Messages",
  },
];

const categories = [
  "All",
  "Events",
  "Training",
  "Messages",
  "Regional",
  "Leadership",
  "Worship",
  "Outreach",
];

const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

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
      (item) => item.id === lightboxItem.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }

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
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                {item.type === "image" ? (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-primary-700">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.type === "image" ? "Photo" : "Video"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
            {lightboxItem.type === "image" ? (
              <img
                src={lightboxItem.src}
                alt={lightboxItem.title}
                className="max-h-[80vh] mx-auto"
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 w-full">
                <video
                  className="w-full max-h-[80vh]"
                  controls
                  autoPlay
                  src={lightboxItem.src}
                  poster={lightboxItem.poster}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{lightboxItem.title}</h3>
              <p className="text-gray-300">{lightboxItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
