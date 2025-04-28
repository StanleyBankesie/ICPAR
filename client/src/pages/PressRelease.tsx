import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Search } from "lucide-react";
import PageBanner from "../components/common/PageBanner";
//import SectionTitle from '../components/common/SectionTitle';

// Sample press releases data - in a real application, this would come from an API or CMS
const pressReleases = [
  {
    id: 1,
    title: "ICPAR Announces Global Prayer Initiative",
    date: "May 15, 2025",
    category: "Initiative",
    excerpt:
      "The International Council of the Prophetic Apostolic Roundtable has launched a worldwide prayer initiative focused on unity and spiritual revival across nations.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/6699291/pexels-photo-6699291.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    id: 2,
    title: "Annual Leadership Summit to be Held in Jerusalem",
    date: "April 30, 2025",
    category: "Event",
    excerpt:
      "ICPAR will host its annual leadership summit in Jerusalem this fall, gathering spiritual leaders from over 50 nations to discuss prophetic guidance for global challenges.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    id: 3,
    title: "New Regional Chapters Established in Africa and Asia",
    date: "April 12, 2025",
    category: "Expansion",
    excerpt:
      "ICPAR is proud to announce the establishment of new regional chapters in Kenya, Nigeria, India, and the Philippines to strengthen our global prophetic network.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    id: 4,
    title: "ICPAR Releases Prophetic Outlook for 2025-2026",
    date: "March 20, 2025",
    category: "Publication",
    excerpt:
      "The council has published its annual prophetic outlook document, highlighting key spiritual trends, warnings, and promises for the coming year.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    id: 5,
    title: "Statement on Recent Global Conflicts",
    date: "March 5, 2025",
    category: "Statement",
    excerpt:
      "The ICPAR executive council releases an official statement addressing recent global conflicts and calling for prayer, reconciliation, and prophetic intervention.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    id: 6,
    title: "New Prophetic Training Curriculum Released",
    date: "February 15, 2025",
    category: "Education",
    excerpt:
      "ICPAR unveils its updated prophetic training curriculum, now available in 15 languages, designed to develop accurate and accountable prophetic ministry.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    imageUrl:
      "https://images.pexels.com/photos/5905900/pexels-photo-5905900.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
];

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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

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
                    key={release.id}
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
                            <Calendar size={14} className="mr-1" />{" "}
                            {release.date}
                          </span>
                        </div>

                        <h2 className="text-2xl font-bold mb-3">
                          {release.title}
                        </h2>
                        <p className="text-gray-700 mb-4">{release.excerpt}</p>

                        <Link
                          to={`/press/${release.id}`}
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
