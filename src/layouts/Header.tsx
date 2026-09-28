import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { itServices, communicationServices } from '../data/services';
import { cn } from '../utils/cn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'IT Services',
      dropdown: itServices.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    },
    {
      name: 'Communication Services',
      dropdown: communicationServices.map(s => ({ name: s.title, href: `/services/${s.slug}` }))
    },
    { name: 'Our Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="CommIT Solutions Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 font-display">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    className="flex items-center text-[16px] font-medium text-gray-700 hover:text-[#22c55e] transition-colors"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href!}
                    className={cn(
                      "text-[16px] font-medium transition-colors",
                      location.pathname === link.href 
                        ? "text-[#22c55e]" 
                        : "text-gray-700 hover:text-[#355E3B]"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && activeDropdown === link.name && (
                  <div
                    className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none py-1 overflow-hidden"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="max-h-[70vh] overflow-y-auto">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#22c55e]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#22c55e] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 font-display">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#22c55e] hover:bg-gray-50"
                    >
                      {link.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-[#22c55e] hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href!}
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium",
                      location.pathname === link.href ? "text-[#22c55e] bg-green-50" : "text-gray-700 hover:text-[#22c55e] hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
