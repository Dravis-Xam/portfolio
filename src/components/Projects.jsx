import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://empirefinal-osrw.vercel.app/',
      featured: true
    },
    {
      title: 'School Management App',
      description: 'A collaborative school management application with real-time updates, with resource tracking and scheduling features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Dravis-Xam',
      live: 'https://example.com',
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Image</span>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a target='_blank'
                    href={project.github}
                    className="bg-white text-slate-900 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a target='_blank'
                    href={project.live}
                    className="bg-white text-slate-900 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a target='_blank'
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  {index === 0 && <a target='_blank'
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a target='_blank'
            href="https://github.com/Dravis-Xam"
            className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-colors duration-300"
          >
            <FaGithub />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;