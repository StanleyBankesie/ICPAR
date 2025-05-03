import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import VideoPlayer from "../common/VideoPlayer";
import axios from "axios";

type Video = {
  id: string;
  title: string;
  videoSrc: string;
  poster?: string;
};

const VideoSection: React.FC = () => {
  const [featuredVideos, setFeaturedVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/media`
        );
        // Filter videos with type including "video" and url ending with .mp4
        const videos = response.data
          .filter(
            (item: { type: string; url: string }) =>
              item.type.includes("video") && item.url.endsWith(".mp4")
          )
          .slice(0, 3)
          .map((item: { _id: string; title?: string; url: string }) => ({
            id: item._id,
            title: item.title || "Untitled",
            videoSrc: item.url,
            poster: "", // No poster info available, can be added if exists
          }));
        setFeaturedVideos(videos);
        setLoading(false);
      } catch {
        setError("Failed to load videos");
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="section bg-gray-50">
        <div className="container text-center">
          <p>Loading videos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section bg-gray-50">
        <div className="container text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Featured Videos"
          subtitle="Watch our latest sermons, teachings, and spiritual insights from our leadership team."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <div key={video.id} className="aspect-video">
              <VideoPlayer
                title={video.title}
                videoSrc={video.videoSrc}
                poster={video.poster}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="btn btn-primary inline-flex items-center"
          >
            <Play size={18} className="mr-2" />
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
