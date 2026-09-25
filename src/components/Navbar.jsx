import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Company", href: "#company" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3.5 md:py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-pink-500 bg-pink-50 text-pink-600 font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            p
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            ro<span className="text-green-500">Service</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="hover:text-pink-600 cursor-pointer transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => alert("Clicked!")}
            className="px-6 py-2.5 rounded-2xl bg-gray-900 text-white font-medium hover:bg-pink-600 transition-all shadow-md shadow-gray-900/10 flex items-center gap-2 group cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100 px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navItems.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50/50 py-2.5 px-4 rounded-xl transition-colors"
              >
                {name}
              </a>
            ))}
            <div className="pt-2">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  alert("Clicked!");
                }}
                className="w-full py-3 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors shadow-lg shadow-pink-600/20 text-center flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;