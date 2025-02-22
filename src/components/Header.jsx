import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
  import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Offerings", id: "offerings" },
  { name: "Partners", id: "partners" },
  { name: "Releases", id: "releases" },
  { name: "Contact Us", id: "contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 px-6 py-2 transition-all ${isScrolled ? "bg-gradient-to-r from-[#5CCFD5] to-white shadow-md" : "bg-transparent"}`}>
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12" />

        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ name, id }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-64}
              className="cursor-pointer hover:text-blue-500"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 text-lg z-40">
          {navItems.map(({ name, id }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
