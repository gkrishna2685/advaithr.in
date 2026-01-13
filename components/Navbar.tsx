
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#infrastructure' },
    { name: 'Staffing', href: '#staffing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-glass shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-700' : 'text-white'}`}>ADVAIT</span>
            <span className={`text-2xl font-light ml-1 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>Infotech</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-slate-100'}`}
            >
              Request Quote
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-900' : 'text-white'}`}>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-fade-in-down">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-slate-800 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block w-full text-center mt-4 bg-blue-600 text-white py-4 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact Us Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
