import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { Link } from "react-router-dom";

interface PressRelease {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category?: string;
}

const PressReleaseSection: React.FC = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setPressReleases(response.data.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch press releases:", error);
      }
    };

    fetchPressReleases();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Press Releases"
          subtitle="Stay informed about our latest announcements, events, and initiatives."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.map((press) => {
            const isExpanded = expandedIds.has(press._id);
            return (
              <div
                key={press._id}
                className="card group hover:translate-y-[-5px]"
              >
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
                  <p className="text-gray-600 mb-4">
                    {isExpanded ? press.content : press.excerpt}
                  </p>
                  <button
                    className="inline-flex items-center font-medium text-primary-700 hover:text-primary-800"
                    onClick={() => toggleExpand(press._id)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/press"
            className="inline-block px-6 py-3 bg-primary-700 text-white font-semibold rounded hover:bg-primary-800 transition"
          >
            View All Press Releases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PressReleaseSection;
