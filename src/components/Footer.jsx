import React from 'react';
import { FaHeart, FaArrowUp, FaRocket, FaSatellite, FaMicrochip, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-slate-900 to-slate-800/80 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"></div>
        
        {/* Scanning Beam */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left Section - Copyright & Status */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* System Status */}
            <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full border border-cyan-500/30">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-xs tracking-widest">SYSTEM ONLINE</span>
              </div>
              <FaShieldAlt className="text-cyan-400 text-sm" />
            </div>

            {/* Copyright */}
            <div className="text-cyan-300/80 flex items-center space-x-3 font-mono text-sm">
              <span>© {currentYear} KENNEDY_NGOVI</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              <span className="flex items-center space-x-2">
                <span>CODED_WITH</span>
                <FaHeart className="text-red-400 animate-pulse" />
                <span>USING</span>
              </span>
              <div className="flex items-center space-x-1">
                <FaMicrochip className="text-purple-400" />
                <span>REACT</span>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <FaSatellite className="text-blue-400" />
                <span>TAILWIND</span>
              </div>
            </div>
          </div>

          {/* Center Section - Mission Statement */}
          <div className="hidden xl:block">
            <div className="text-center px-6 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full border border-purple-500/20">
              <p className="text-purple-300 font-mono text-xs tracking-widest">
                MISSION: CREATE_DIGITAL_EXPERIENCES
              </p>
            </div>
          </div>

          {/* Right Section - Navigation & Back to Top */}
          <div className="flex items-center space-x-6">
            {/* Quick Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#home"
                className="text-cyan-300/70 hover:text-cyan-400 font-mono text-xs tracking-wide transition-all duration-300 hover:scale-105"
              >
                HOME
              </a>
              <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
              <a
                href="#projects"
                className="text-cyan-300/70 hover:text-cyan-400 font-mono text-xs tracking-wide transition-all duration-300 hover:scale-105"
              >
                PROJECTS
              </a>
              <div className="w-1 h-1 bg-cyan-400/50 rounded-full"></div>
              <a
                href="#contact"
                className="text-cyan-300/70 hover:text-cyan-400 font-mono text-xs tracking-wide transition-all duration-300 hover:scale-105"
              >
                CONTACT
              </a>
            </div>

            {/* Back to Top - Quantum Lift */}
            <button
              onClick={scrollToTop}
              className="group relative bg-gradient-to-br from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 p-4 rounded-xl transition-all duration-500 transform hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-cyan-500/25"
              aria-label="Initiate quantum lift to top"
            >
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-xl animate-ping group-hover:animate-none"></div>
              <div className="absolute inset-1 border border-cyan-400/20 rounded-xl group-hover:border-cyan-400/40 transition-colors duration-300"></div>
              
              {/* Icon */}
              <div className="relative z-10">
                <FaRocket className="text-white group-hover:text-cyan-200 transition-colors duration-300 group-hover:animate-bounce" />
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-8 pt-4 border-t border-cyan-500/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            {/* System Metrics */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 font-mono text-xs">SERVER: ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-blue-300 font-mono text-xs">NETWORK: STABLE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                <span className="text-purple-300 font-mono text-xs">ENCRYPTION: QUANTUM</span>
              </div>
            </div>

            {/* Version Info */}
            <div className="text-cyan-300/60 font-mono text-xs tracking-widest">
              V2.0.4 • BUILD_127 • QUANTUM_READY
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;