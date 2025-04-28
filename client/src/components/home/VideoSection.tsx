import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import VideoPlayer from '../common/VideoPlayer';

const VideoSection: React.FC = () => {
  // Sample videos - in a real application, these would come from a CMS or API
  const featuredVideos = [
    {
      id: 1,
      title: "Prophetic Vision for 2025",
      videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      poster: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1280"
    },
    {
      id: 2,
      title: "Apostolic Leadership Conference Highlights",
      videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      poster: "https://images.pexels.com/photos/8047040/pexels-photo-8047040.jpeg?auto=compress&cs=tinysrgb&w=1280"
    },
    {
      id: 3,
      title: "Global Prayer Summit 2025",
      videoSrc: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      poster: "https://images.pexels.com/photos/7087668/pexels-photo-7087668.jpeg?auto=compress&cs=tinysrgb&w=1280"
    }
  ];

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
          <Link to="/gallery" className="btn btn-primary inline-flex items-center">
            <Play size={18} className="mr-2" />
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;