import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Search } from "lucide-react";
import PageBanner from "../components/common/PageBanner";
import axios from "axios";

interface PressRelease {
  _id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

const categories = [
  "All",
  "Initiative",
  "Event",
  "Expansion",
  "Publication",
  "Statement",
  "Education",
];

const PressReleasePage: React.FC = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchPressReleases = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setPressReleases(response.data);
      } catch (error) {
        console.error("Failed to fetch press releases:", error);
      }
    };

    fetchPressReleases();
  }, []);

  const filteredReleases = pressReleases.filter((release) => {
    const matchesSearch =
      release.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      release.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || release.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <PageBanner
        title="Press Releases"
        subtitle="Stay informed about our latest announcements, events, and initiatives"
        bgImage="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search press releases..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search
                      className="absolute left-4 top-3.5 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-1 rounded-full text-sm ${
                      selectedCategory === category
                        ? "bg-primary-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredReleases.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  No press releases found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria
                </p>
              </div>
            ) : (
              <div className="space-y-10">
                {filteredReleases.map((release) => (
                  <div
                    key={release._id}
                    className="border-b border-gray-200 pb-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-1">
                        <img
                          src={release.imageUrl}
                          alt={release.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {release.category}
                          </span>
                          <span className="inline-flex items-center text-gray-500 text-sm">
                            <Calendar size={14} className="mr-1" />
                            {release.date}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold mb-3">
                          {release.title}
                        </h2>
                        <p className="text-gray-700 mb-4">{release.excerpt}</p>

                        <Link
                          to={`/press/${release._id}`}
                          className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800"
                        >
                          Read Full Release{" "}
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressReleasePage;
