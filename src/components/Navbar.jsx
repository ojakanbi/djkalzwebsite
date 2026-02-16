import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bio', path: '/bio' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Music', path: '/music' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg shadow-primary/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="assets/logos/djkaluGlobe-logo.png" 
              alt="DJ Kalz Logo" 
              className="h-12 w-auto"
              style={{ filter: 'drop-shadow(0 0 10px rgba(255, 0, 128, 0.6))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary neon-text'
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-full text-sm font-semibold transition-all hover:scale-105 neon-glow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-lighter transition-colors text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-primary/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary text-white neon-glow'
                      : 'text-gray-300 hover:bg-dark-lighter hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full px-4 py-3 bg-primary hover:bg-primary-dark rounded-lg text-center font-semibold transition-colors neon-glow"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
