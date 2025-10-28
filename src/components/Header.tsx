import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },

    { path: '/events', label: 'Events' },
    { path: '/publications', label: 'Publications' },
    { path: '/impact', label: 'Impact' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://page.gensparksite.com/v1/base64_upload/a63515f570a86d334364d817050630fe"
              alt="Natural Nagas Conservation Initiative Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">Natural Nagas</span>
              <span className="text-xs text-emerald-600 font-medium">Conservation Initiative</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 ${
                  isActive(item.path) ? 'text-emerald-600 font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Donate Button */}
            <Link
              to="/get-involved"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Donate Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`block text-gray-700 hover:text-emerald-600 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-emerald-600 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/get-involved"
                className="block bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;