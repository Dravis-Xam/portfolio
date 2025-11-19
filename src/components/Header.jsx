import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaRocket, FaSatellite, FaMicrochip } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', icon: <FaRocket className="text-sm" /> },
    { name: 'ABOUT', href: '#about', icon: <FaMicrochip className="text-sm" /> },
    { name: 'SKILLS', href: '#skills', icon: <FaSatellite className="text-sm" /> },
    { name: 'PROJECTS', href: '#projects', icon: <FaMicrochip className="text-sm" /> },
    { name: 'CONTACT', href: '#contact', icon: <FaSatellite className="text-sm" /> },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {isScrolled && (
          <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </>
        )}
      </div>

      <nav className="container mx-auto px-6 py-3 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo/Brand - Quantum Signature */}
          <a
            href="#home"
            className="group relative flex items-center space-x-3"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Animated Orb */}
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-lg shadow-cyan-500/50"></div>
              <div className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
            </div>
            
            {/* Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wider">
                KENNEDY_NG
              </span>
              <div className="w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </a>

          {/* Desktop Menu - Navigation Matrix */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative group px-6 py-3 transition-all duration-300 font-mono text-sm tracking-wider ${
                  activeSection === item.href.substring(1)
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Indicator */}
                {activeSection === item.href.substring(1) && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                  </>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>

                {/* Connection Line (except last item) */}
                {index < navItems.length - 1 && (
                  <div className="absolute -right-1 top-1/2 w-2 h-px bg-gradient-to-r from-cyan-500 to-purple-500 transform -translate-y-1/2 opacity-50"></div>
                )}
              </a>
            ))}
          </div>

          {/* System Status - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800/50 rounded-full border border-cyan-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-mono text-xs tracking-widest">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Button - Quantum Toggle */}
          <button
            className="md:hidden relative group p-3 rounded-xl bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation matrix"
          >
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            
            {/* Icon */}
            <div className="relative z-10 text-cyan-300">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>

        {/* Mobile Menu - Holographic Interface */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            {/* Menu Header */}
            <div className="px-6 py-3 border-b border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-mono text-sm tracking-widest">NAVIGATION_MATRIX</span>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-4 px-6 py-4 border-b border-cyan-500/10 last:border-b-0 transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Active Indicator */}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 rounded-r-full shadow-lg shadow-cyan-400/50"></div>
                  )}

                  {/* Icon */}
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300 ${
                    activeSection === item.href.substring(1) ? 'scale-110' : ''
                  }`}>
                    {item.icon}
                  </div>

                  {/* Text */}
                  <span className="font-mono text-sm tracking-wider">{item.name}</span>

                  {/* Hover Effect */}
                  <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Footer */}
            <div className="px-6 py-3 bg-slate-800/50 border-t border-cyan-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-mono text-xs">SYSTEM_ACTIVE</span>
                </div>
                <div className="text-cyan-300/60 font-mono text-xs">V2.0.4</div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;