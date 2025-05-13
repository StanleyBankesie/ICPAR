import React, { useState } from "react";

interface VideoPlayerProps {
  title: string;
  videoSrc: string;
  poster?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  videoSrc,
  poster,
  className = "",
}) => {
  const [videoError, setVideoError] = useState(false);

  const handleError = () => {
    setVideoError(true);
  };

  return (
    <div className={`video-container ${className}`}>
      {videoError ? (
        <div className="text-red-600 font-semibold p-4 bg-gray-100 rounded">
          Failed to load video.
        </div>
      ) : (
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          controls
          poster={poster}
          preload="metadata"
          onError={handleError}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {title && (
        <h3 className="mt-3 text-lg font-medium text-gray-800">{title}</h3>
      )}
    </div>
  );
};

export default VideoPlayer;
