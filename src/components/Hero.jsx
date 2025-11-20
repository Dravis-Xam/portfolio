import React from 'react';
import { FaGithub, FaEnvelope, FaDownload, FaLinkedin, FaRocket, FaCode, FaBrain } from 'react-icons/fa';
import TypingEffect from './TypingEffect';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content - Quantum Terminal */}
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {/* Status Indicator */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-mono text-sm tracking-widest">SYSTEM_ACTIVE</span>
                </div>
                <div className="text-cyan-400 font-mono text-sm">READY_FOR_MISSION</div>
              </div>

              {/* Headlines */}
              <div className="space-y-4">
                <p className="text-cyan-400 font-mono text-lg tracking-widest">QUANTUM_OPERATOR:</p>
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  KENNEDY
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    NGOVI
                  </span>
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl text-cyan-300 font-mono tracking-widest">
                    <TypeAnimation
                      sequence={["FULL_STACK_ARCHITECT", 1000]}
                      speed={250}
                      repeat={0}
                    />
                  </h2>
                </div>
              </div>

              {/* Mission Statement */}
              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
                Engineering <span className="text-cyan-400">next-generation digital experiences</span> through 
                cutting-edge technology and innovative design. Specializing in quantum-ready architectures 
                and AI-enhanced development.
              </p>

              {/* CTA Buttons - Quantum Interface */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-mono font-bold tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <FaRocket className="animate-pulse" />
                    <span>INITIATE_CONTACT</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </a>
                <a
                  href="/resume.pdf"
                  className="group relative border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white px-8 py-4 rounded-xl font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-cyan-500/10"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  <span>DOWNLOAD_CV</span>
                </a>
              </div>

              {/* Social Links - Network Nodes */}
              <div className="flex space-x-6 pt-8">
                {[
                  { icon: <FaGithub />, href: 'https://github.com/Dravis-Xam', label: 'GitHub' },
                  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/ken-ng-42916539a', label: 'LinkedIn' },
                  { icon: <FaEnvelope />, href: 'mailto:kennedyngo1234@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group relative p-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/25"
                    aria-label={social.label}
                  >
                    {social.icon}
                    {/* Connection Dot */}
                    <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image - Futuristic Trapezoidal Frame */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Trapezoidal Container */}
              <div className="relative bg-slate-900/80 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl p-8 transform perspective-1000">
                {/* Trapezoid Shape */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl overflow-hidden transform skew-x-3 skew-y-3 group-hover:skew-x-0 group-hover:skew-y-0 transition-transform duration-500">
                  
                  {/* Image Container */}
                  <div className="absolute inset-4 bg-slate-800 rounded-xl overflow-hidden transform -skew-x-3 -skew-y-3 group-hover:skew-x-0 group-hover:skew-y-0 transition-transform duration-500">
                    <img 
                      src='/newme.png' 
                      alt="Kennedy Ngovi - Full Stack Architect" 
                      className="w-full h-full object-cover object-center transform scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-purple-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80 animate-float shadow-lg shadow-cyan-400/50">
                  <FaCode className="text-white text-sm m-2" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-80 animate-float delay-1000 shadow-lg shadow-purple-400/50">
                  <FaBrain className="text-white text-sm m-2" />
                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-float delay-500 shadow-lg shadow-blue-400/50"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-float delay-1500 shadow-lg shadow-green-400/50"></div>

                {/* Data Stream Lines */}
                <div className="absolute -inset-2 border-2 border-cyan-400/20 rounded-2xl animate-pulse group-hover:border-cyan-400/40 transition-all duration-500"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-cyan-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 font-mono text-xs tracking-widest">NEURAL_INTERFACE_ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-cyan-300 font-mono text-sm tracking-widest">SCROLL_TO_ENGAGE</span>
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(1deg) scale(1.02); }
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;