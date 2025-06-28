import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Home, FolderOpen, Settings, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Skills', href: '/skills', icon: Settings },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
                <div className="w-full py-2 px-4 bg-gradient-to-r from-green-600 hover:from-white hover:to-green-600 cursor-pointer rounded-lg flex items-center justify-center shadow-sm hover:shadow-md">
                    <span className="text-emerald-600  font-bold text-sm flex justify-center items-center gap-2">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="lucide lucide-laptop-minimal-check-icon lucide-laptop-minimal-check">
                              <path d="M2 20h20"/>
                              <path d="m9 10 2 2 4-4"/>
                              <rect x="3" y="4" width="18" height="12" rx="2"/>
                            </svg>
                            <Link to="/" className="flex  text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-white">
                                <span className='text-gray-100'>Qai</span>
                                <span className='text-gray-600'>ser</span>
                            </Link>
                        </span>
                </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  rel={item.href === '/' ? undefined : 'noopener noreferrer'}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-50 text-green-600 shadow-sm'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-green-200">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    target={item.href === '/' ? '_self' : '_blank'}
                    rel={item.href === '/' ? undefined : 'noopener noreferrer'}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;