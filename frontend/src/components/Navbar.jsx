import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Contact Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-secondary text-white/90 py-2 text-xs font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:12px_12px] opacity-30 pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
          <div className="flex gap-6">
            <a href="tel:+918249329033" className="flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 8249329033
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Kharavela Nagar, Bhubaneswar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Mon - Sat : 10:00 AM - 8:00 PM
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/90 backdrop-blur-lg shadow-md py-2' : 'bg-surface shadow-sm py-4'}`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <img src="/images/logo.png" alt="Smile Planet Logo" className="h-16 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" />
                <div>
                  <span className="block font-black text-2xl text-secondary leading-none tracking-tight">Smile Planet</span>
                  <span className="block text-xs font-bold text-primary uppercase tracking-widest mt-0.5">Dental Care</span>
                </div>
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`group relative px-4 py-2 font-bold text-sm transition-all duration-300 group-hover:text-primary ${isActive ? 'text-primary' : 'text-text-primary hover:text-primary'}`}
                  >
                    {link.name}
                    {/* Premium Active Indicator */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(14,165,164,0.8)]"></span>
                    )}
                    {/* Hover Indicator */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/0 rounded-full transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-primary/50"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-secondary p-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-surface border-t border-border shadow-2xl py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={`p-4 rounded-xl font-bold ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-text-primary hover:bg-background'}`}
              >
                {link.name}
              </Link>
            ))}
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
