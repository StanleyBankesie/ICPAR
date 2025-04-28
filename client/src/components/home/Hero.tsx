import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { ArrowRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero4 from "../../heroimage/hero4.jpg";
import hero3 from "../../heroimage/hero3.jpg";
import hero2 from "../../heroimage/hero2.jpg";

const heroImages = [
  {
    src: hero3,
    title: "Uniting Spiritual Leaders Worldwide",
  },
  {
    src: hero2,
    title: "Guiding with Prophetic Wisdom",
  },
  {
    src: hero4,
    title: "Building Communities of Faith",
  },
];

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className=" relative overflow-hidden max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh]">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
        transitionTime={1000}
        emulateTouch={true}
        className=""
      >
        {heroImages.map((image, index) => (
          <div key={index} className="h-screen min-h-[600px] max-h-[600px]">
            <div
              className="absolute inset-0 bg-center bg-cover h-full w-full transition-opacity duration-1000"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.src})`,
                opacity: loaded ? 1 : 0,
              }}
            />
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight mb-6 transform transition-all duration-700 translate-y-0 opacity-100 text-white">
                {image.title}
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-8 text-gray-100">
                International Council of the Prophetic Apostolic Roundtable
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="btn bg-gold-400 hover:bg-gold-600 text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
