import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaServer, FaCogs } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-COMMERCE_PLATFORM',
      description: 'Quantum-commerce solution with neural payment processing, AI-driven inventory management, and multi-dimensional user authentication systems.',
      image: '/api/placeholder/600/400',
      technologies: ['REACT', 'NODE_JS', 'MONGODB', 'STRIPE_API'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://empirefinal-osrw.vercel.app/',
      featured: true,
      status: 'ACTIVE',
      icon: <FaServer className="text-lg" />
    },
    {
      title: 'SCHOOL_MANAGEMENT_OS',
      description: 'Educational operating system with real-time neural updates, quantum resource allocation, and holographic scheduling interfaces.',
      image: '/api/placeholder/600/400',
      technologies: ['REACT', 'FIREBASE', 'TAILWIND', 'PWA'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://example.com',
      featured: true,
      status: 'DEPLOYED',
      icon: <FaCogs className="text-lg" />
    },
    {
      title: 'QUANTUM_PORTFOLIO',
      description: 'Neural interface portfolio with quantum animations, AI-powered content delivery, and multi-reality responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['REACT', 'TAILWIND', 'FRAMER_MOTION', 'WEBGL'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://example.com',
      featured: false,
      status: 'ONLINE',
      icon: <FaCode className="text-lg" />
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Data Streams */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,255,0.02)_50%,transparent_100%)] bg-[length:200%_100%] animate-stream"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <FaRocket className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-mono tracking-widest">QUANTUM_PROJECTS</span>
            <FaCode className="text-purple-400 animate-pulse delay-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mission Control
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/25"></div>
          <p className="text-cyan-300/80 mt-6 max-w-2xl mx-auto font-mono text-lg tracking-wide">
            ACTIVE_DEPLOYMENTS • QUANTUM_ARCHITECTURES • NEURAL_INTERFACES
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Holographic Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Project Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                
                {/* Project Header */}
                <div className="relative p-6 border-b border-cyan-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono tracking-wide">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${
                            project.status === 'ACTIVE' ? 'bg-green-400' : 
                            project.status === 'DEPLOYED' ? 'bg-blue-400' : 'bg-cyan-400'
                          } animate-pulse`}></div>
                          <span className="text-cyan-300 font-mono text-xs tracking-widest">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                        <span className="text-slate-900 font-mono text-xs font-bold tracking-widest">
                          QUANTUM
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Project Visualization */}
                <div className="relative h-48 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Project Preview */}
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🚀</div>
                      <span className="text-cyan-300 font-mono text-sm tracking-widest">PROJECT_{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6">
                    <a
                      target='_blank'
                      href={project.github}
                      className="p-3 bg-slate-800/90 backdrop-blur-sm border border-cyan-500/50 rounded-xl hover:bg-cyan-500 hover:scale-110 transition-all duration-300 transform hover:rotate-12"
                    >
                      <FaGithub className="text-cyan-300 hover:text-white text-xl" />
                    </a>
                    {index == 0 && <a
                      target='_blank'
                      href={project.live}
                      className="p-3 bg-slate-800/90 backdrop-blur-sm border border-purple-500/50 rounded-xl hover:bg-purple-500 hover:scale-110 transition-all duration-300 transform hover:-rotate-12"
                    >
                      <FaExternalLinkAlt className="text-purple-300 hover:text-white text-xl" />
                    </a>}
                  </div>
                  
                  {/* Scanning Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                </div>

                {/* Technologies */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-xs tracking-wide hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-6 border-t border-cyan-500/10 pt-4">
                    <a
                      target='_blank'
                      href={project.github}
                      className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-400 font-mono text-sm tracking-wide group/link transition-all duration-300"
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span>SOURCE_CODE</span>
                    </a>
                    {index === 0 && (
                      <a
                        target='_blank'
                        href={project.live}
                        className="flex items-center space-x-2 text-purple-300 hover:text-purple-400 font-mono text-sm tracking-wide group/link transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform duration-300" />
                        <span>LIVE_DEMO</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Connection Node */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <a
            target='_blank'
            href="https://github.com/Dravis-Xam"
            className="group relative inline-flex items-center space-x-3 bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <FaGithub className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <span className="text-cyan-300 font-mono tracking-widest group-hover:text-white transition-colors duration-300">
              ACCESS_ALL_PROJECTS
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:bg-green-400 transition-colors duration-300"></div>
          </a>
        </div>

        {/* System Status */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 px-6 py-3 bg-slate-800/40 backdrop-blur-sm rounded-full border border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 font-mono text-xs tracking-widest">ALL_SYSTEMS_NOMINAL</span>
            </div>
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            <div className="text-cyan-300 font-mono text-xs tracking-widest">
              {projects.length} ACTIVE_DEPLOYMENTS
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes stream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-stream {
          animation: stream 8s linear infinite;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(0.5deg) scale(1.01); }
        }
        .animate-tilt {
          animation: tilt 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;