import React from 'react';

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
  className = "" 
}) => {
  return (
    <div className={`video-container ${className}`}>
      <video 
        className="w-full h-auto rounded-lg shadow-lg"
        controls
        poster={poster}
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {title && (
        <h3 className="mt-3 text-lg font-medium text-gray-800">{title}</h3>
      )}
    </div>
  );
};

export default VideoPlayer;