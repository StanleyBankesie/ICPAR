import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen || pathname !== "/"
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo
              className={`h-12 w-auto ${
                !scrolled && pathname === "/" && !isOpen
                  ? "text-white"
                  : "text-primary-800"
              }`}
            />
            <span
              className={`ml-2 font-cormorant font-bold text-lg md:text-xl ${
                !scrolled && pathname === "/" && !isOpen
                  ? "text-white"
                  : "text-primary-800"
              }`}
            >
              ICPAR
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavLinks
              isScrolled={scrolled}
              isHomePage={pathname === "/"}
              isActive={isActive}
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${
              !scrolled && pathname === "/" && !isOpen
                ? "text-white"
                : "text-primary-800"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pt-4 pb-6 animate-fadeIn">
            <NavLinks
              mobile={true}
              isScrolled={true}
              isHomePage={false}
              isActive={isActive}
              closeMenu={closeMenu}
            />
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
  isActive: (path: string) => boolean;
  closeMenu?: () => void;
}

const NavLinks = ({
  mobile = false,
  isScrolled,
  isHomePage,
  isActive,
  closeMenu,
}: NavLinksProps) => {
  const baseClassName = mobile
    ? "block py-3 px-4 font-medium border-b border-gray-100"
    : "px-4 py-2 font-medium";

  const activeClassName =
    isScrolled || !isHomePage || mobile
      ? "text-primary-700"
      : "text-white font-semibold";

  const inactiveClassName =
    isScrolled || !isHomePage || mobile
      ? "text-gray-700 hover:text-primary-700"
      : "text-white/90 hover:text-white";

  return (
    <nav className={mobile ? "flex flex-col" : "flex space-x-1"}>
      <Link
        to="/"
        className={`${baseClassName} ${
          isActive("/") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${baseClassName} ${
          isActive("/about") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        About Us
      </Link>
      <Link
        to="/executive"
        className={`${baseClassName} ${
          isActive("/executive") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        Executive
      </Link>
      <Link
        to="/structure"
        className={`${baseClassName} ${
          isActive("/structure") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        Structure
      </Link>
      <Link
        to="/press"
        className={`${baseClassName} ${
          isActive("/press") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        Press Releases
      </Link>
      <Link
        to="/gallery"
        className={`${baseClassName} ${
          isActive("/gallery") ? activeClassName : inactiveClassName
        }`}
        onClick={closeMenu}
      >
        Gallery
      </Link>
    </nav>
  );
};

export default Header;
