import React from "react";
import logoImage from "../common/logo.png"; // Adjust the path as needed

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return <img src={logoImage} alt="Logo" className={className} />;
};

export default Logo;
