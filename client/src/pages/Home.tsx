import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import VideoSection from "../components/home/VideoSection";
import PressReleaseSection from "../components/home/PressReleaseSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <VideoSection />
      <PressReleaseSection />
    </div>
  );
};

export default HomePage;
