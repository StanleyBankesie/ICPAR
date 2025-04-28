import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle, 
  bgImage = "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1920" 
}) => {
  return (
    <div 
      className="relative bg-primary-900 pt-40 pb-20 md:pt-48 md:pb-28"
      style={{
        backgroundImage: `linear-gradient(rgba(53, 33, 76, 0.85), rgba(53, 33, 76, 0.85)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-white font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gold-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;