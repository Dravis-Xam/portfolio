import React from 'react';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Technologies' },
  ];

  const features = [
    {
      icon: <FaCode className="text-2xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: 'Fast Delivery',
      description: 'Efficient development process with quick turnaround times'
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* About Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">
              Crafting Digital Experiences That Matter
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate full-stack developer with over 2 years of experience 
              creating web applications that solve real-world problems. I love turning 
              complex ideas into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              technical writing and mentoring.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;