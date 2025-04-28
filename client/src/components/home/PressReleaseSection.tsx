import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

// Sample press releases data
const pressReleases = [
  {
    id: 1,
    title: "ICPAR Announces Global Prayer Initiative",
    date: "May 15, 2025",
    excerpt: "The International Council of the Prophetic Apostolic Roundtable has launched a worldwide prayer initiative focused on unity and spiritual revival across nations.",
    imageUrl: "https://images.pexels.com/photos/6699291/pexels-photo-6699291.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    id: 2,
    title: "Annual Leadership Summit to be Held in Jerusalem",
    date: "April 30, 2025",
    excerpt: "ICPAR will host its annual leadership summit in Jerusalem this fall, gathering spiritual leaders from over 50 nations to discuss prophetic guidance for global challenges.",
    imageUrl: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    id: 3,
    title: "New Regional Chapters Established in Africa and Asia",
    date: "April 12, 2025",
    excerpt: "ICPAR is proud to announce the establishment of new regional chapters in Kenya, Nigeria, India, and the Philippines to strengthen our global prophetic network.",
    imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1280"
  }
];

const PressReleaseSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle 
          title="Press Releases" 
          subtitle="Stay informed about our latest announcements, events, and initiatives."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map((press) => (
            <div key={press.id} className="card group hover:translate-y-[-5px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={press.imageUrl} 
                  alt={press.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span className="text-sm">{press.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{press.title}</h3>
                <p className="text-gray-600 mb-4">{press.excerpt}</p>
                <Link 
                  to={`/press/${press.id}`} 
                  className="inline-flex items-center font-medium text-primary-700 hover:text-primary-800"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/press" className="btn btn-primary">
            View All Press Releases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseSection;