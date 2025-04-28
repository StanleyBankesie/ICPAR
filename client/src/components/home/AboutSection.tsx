import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle 
              title="About ICPAR" 
              subtitle="Uniting prophetic and apostolic leaders worldwide"
              centered={false}
            />
            <p className="text-lg text-gray-700 mb-6">
              The International Council of the Prophetic Apostolic Roundtable (ICPAR) exists to unite prophetic and apostolic leaders from around the world, creating a global network of spiritual guidance, mentorship, and collaboration.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to restore the authentic prophetic and apostolic foundations in the global church, providing sound doctrine, spiritual insight, and godly leadership for the body of Christ worldwide.
            </p>
            <Link 
              to="/about" 
              className="btn btn-primary inline-flex items-center"
            >
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7708823/pexels-photo-7708823.jpeg?auto=compress&cs=tinysrgb&w=1280" 
              alt="Leaders in prayer" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-800 text-white p-6 rounded-lg shadow-lg">
              <p className="font-cormorant italic text-xl">"Unity in divine purpose, diversity in divine expression."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;