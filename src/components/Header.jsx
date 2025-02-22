import { useState } from "react";
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

  return (
    <header className="flex items-center justify-between px-6 py-2 fixed w-full z-50">
      <div>
        <img src={logo} alt="Logo" className="h-12" />
      </div>

      <nav className="hidden md:flex space-x-6">
        {navItems.map(({ name, id }) => (
          <Link
            key={id}
            to={id}
            smooth={true}
            duration={500}
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
              onClick={() => setIsOpen(false)} // Closes menu on click
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
