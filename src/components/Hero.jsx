import React from 'react';
import { FaGithub, FaEnvelope, FaDownload, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="space-y-6">
              <p className="text-blue-400 font-semibold">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                Kennedy <span className="text-blue-400">Ngovi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
                Full Stack Developer
              </h2>
              <p className="text-gray-400 text-lg max-w-lg">
                I create beautiful and functional web applications using modern technologies. 
                Passionate about clean code and user experience.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="/resume.pdf"
                  className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-6">
                <a
                  href="https://github.com/Dravis-Xam"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ken-ng-42916539a"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:kennedyngo1234@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-float relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src='/newme.png' 
                    alt="Kennedy Ngovi" 
                    className="w-full h-full object-cover object-center rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;