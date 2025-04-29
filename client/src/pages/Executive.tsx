import React from "react";
import PageBanner from "../components/common/PageBanner";
import SectionTitle from "../components/common/SectionTitle";
import president from "../asset/president.jpg";
import vice from "../asset/vice_president.jpg";
import helena from "../asset/apostle_helena.jpg";
import mark from "../asset/mark.jpg";
import hubert from "../asset/hubert.jpg";

// Sample executive members data
const executives = [
  {
    id: 1,
    name: "Apostle Prophet Amos Walter Zor",
    title: "President and General Overseer",

    bio: "lorem250 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: president,
    country: "Liberia",
  },
  {
    id: 2,
    name: "Rev (Wo 1 rtd) Dzorvakpor Joseph",
    title: "Director/ In-charge of Security and Sierra Leone chapter of ICPAR",
    bio: "lorem25 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: vice,
    country: "Ghana",
  },
  {
    id: 3,
    name: " Apostle ( Dr.) Helena Sarpai--Nunoo",
    title: "Secretary General, (In-charge of USA Chapter of ICPAR)",
    bio: "lorem25 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: helena,
    country: "Ghana",
  },
  {
    id: 4,
    name: "Rev. Mark Brobbey",
    title: "Director of finance. (In-charge of Liberia Chapter of ICPAR)",
    bio: "lorem25 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: mark,
    country: "Ghana",
  },
  {
    id: 5,
    name: "Apostle Edward Addison",
    title: "Director of Programme, (In-charge of Ghana Chapter of ICPAR)",
    bio: "lorem25 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=800",
    country: "Ghana",
  },
  {
    id: 6,
    name: "Pastor (Dr.)Hubert Adane",
    title: "Director of Medical Affairs, ICPAR",
    bio: "lorem25 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: hubert,
    country: "Canada",
  },
];

const ExecutivePage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Executive Council"
        subtitle="Meet our global leadership team"
        bgImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Our Leadership"
            subtitle="The International Council of the Prophetic Apostolic Roundtable is led by seasoned ministers with proven track records in prophetic and apostolic ministry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive) => (
              <div key={executive.id} className="card group overflow-hidden">
                <div className="h-72 overflow-hidden">
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gold-600 mb-1">
                    {executive.country}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{executive.name}</h3>
                  <div className="text-primary-700 font-medium mb-3">
                    {executive.title}
                  </div>
                  <p className="text-gray-600 mb-4">{executive.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">
              Leadership Statement
            </h2>
            <p className="text-xl italic font-cormorant mb-8">
              "We are committed to modeling authentic prophetic and apostolic
              leadership that serves the global church with integrity, humility,
              and divine authority. Our council exists not to build our own
              kingdoms but to advance God's Kingdom in every nation."
            </p>
            <div className="mx-auto h-1 w-20 bg-gold-400 mb-6"></div>
            <p className="text-lg">The Executive Council, ICPAR</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutivePage;
