import { Link, useLocation } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../common/Logo";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.includes("/admin")) {
    return null;
  }
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto text-white" />
              <span className="ml-2 font-cormorant font-bold text-xl">
                ICPAR
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              The International Council of the Prophetic Apostolic Roundtable is
              committed to uniting spiritual leaders worldwide to foster a
              community of faith, guidance, and divine purpose.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold-400"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/executive"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Executive Team
                </Link>
              </li>
              <li></li>
              <li>
                <Link
                  to="/structure"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Structure
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Press Releases
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-gold-400" />
                <p className="text-gray-300">P.O.BOX TS 70 Teshie-Accra</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-gold-400 " />
                <div>
                  <p className="text-gray-300 mb-0"> +1(612)481-9333</p>
                  <p className="text-gray-300">+233539956235</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-gold-400" />
                <p className="text-gray-300 mb-0">12icpar7@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} International Council of the Prophetic
              Apostolic Roundtable. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
