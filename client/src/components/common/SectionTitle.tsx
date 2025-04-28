import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightTheme?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  lightTheme = false
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-cormorant font-bold text-3xl md:text-4xl ${lightTheme ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 ${centered ? 'mx-auto' : ''} max-w-2xl text-lg ${lightTheme ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 rounded ${centered ? 'mx-auto' : ''} ${lightTheme ? 'bg-gold-400' : 'bg-gold-500'}`}></div>
    </div>
  );
};

export default SectionTitle;