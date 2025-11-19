import React from 'react';
import { FaCode, FaPalette, FaRocket, FaBrain, FaAtom, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience', suffix: 'yr' },
    { number: '50+', label: 'Projects Completed', suffix: '+' },
    { number: '30+', label: 'Happy Clients', suffix: '+' },
    { number: '15+', label: 'Technologies', suffix: '+' },
  ];

  const features = [
    {
      icon: <FaBrain className="text-2xl" />,
      title: 'AI-Enhanced Development',
      description: 'Leveraging cutting-edge AI tools to write smarter, more efficient code and solve complex problems',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaAtom className="text-2xl" />,
      title: 'Quantum-Ready Architecture',
      description: 'Building scalable systems with future-proof architecture that adapts to emerging technologies',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Cybersecurity First',
      description: 'Implementing robust security protocols and blockchain-inspired integrity measures',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-mono tracking-widest">ABOUT THE DEVELOPER</span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-300"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Architect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full shadow-lg shadow-cyan-500/25"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* About Text with Holographic Card */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Holographic Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Visionary Development
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  I architect <span className="text-cyan-400 font-semibold">next-generation digital experiences</span> that blend cutting-edge technology with intuitive design. With expertise in full-stack development and emerging tech stacks, I transform complex challenges into elegant, scalable solutions.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  My passion lies at the intersection of <span className="text-purple-400 font-semibold">AI-driven development</span> and human-centered design, creating systems that not only perform exceptionally but also anticipate user needs through intelligent interfaces.
                </p>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center group hover:transform hover:scale-110 transition-all duration-300"
                    >
                      <div className="relative">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 flex items-center justify-center">
                          {stat.number}
                          <span className="text-sm ml-1 text-cyan-300">{stat.suffix}</span>
                        </div>
                        <div className="text-cyan-300/80 text-sm font-mono tracking-wide">{stat.label}</div>
                        {/* Animated underline */}
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 mt-2 mx-auto"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Futuristic Features */}
          <div className="lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                {/* Animated border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    {/* Animated Icon Container */}
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${feature.gradient.split(' ')[1]}/25`}>
                      {feature.icon}
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Animated progress bar */}
                      <div className="mt-4 w-full bg-slate-700 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform origin-left transition-transform duration-1000 group-hover:scale-x-100 scale-x-90`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-slate-800/40 backdrop-blur-sm rounded-full border border-slate-700/50">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-cyan-300 font-mono text-sm tracking-widest">
              SYSTEMS: ONLINE • READY FOR MISSION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;