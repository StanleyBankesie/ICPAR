import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import VideoSection from "../components/home/VideoSection";
import PressReleaseSection from "../components/home/PressReleaseSection";
import Chapter from "../components/home/Chapter";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Chapter />
      <VideoSection />
      <PressReleaseSection />
    </div>
  );
};

export default HomePage;
