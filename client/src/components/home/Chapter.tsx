// components/GlobalPresence.jsx
import { MapPin } from "lucide-react";

const locations = [
  { country: "Ghana", city: "Accra", flag: "/flags/ghana.png" },
  { country: "Liberia", city: "Monrovia", flag: "/flags/liberia.png" },
  {
    country: "Sierra Leone",
    city: "Freetown",
    flag: "/flags/sierra-leone.png",
  },
  { country: "USA", city: "New York", flag: "/flags/usa.png" },
];

export default function GlobalPresence() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Our Global Presence
      </h2>
      <p className="text-gray-600 mb-10">
        We are united in faith across nations, bringing light and hope to
        communities around the world.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition-all"
          >
            <img
              src={location.flag}
              alt={`${location.country} flag`}
              className="h-12 w-auto mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">
              {location.country}
            </h3>
            <p className="text-gray-500 flex items-center justify-center mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              {location.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
