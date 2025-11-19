import React from 'react';
import { FaBrain, FaServer, FaTools, FaMicrochip, FaCode, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      category: 'NEURAL_INTERFACE',
      icon: <FaBrain className="text-xl" />,
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'REACT', level: 90, icon: '⚛️' },
        { name: 'JAVASCRIPT', level: 85, icon: '🟨' },
        { name: 'TYPESCRIPT', level: 80, icon: '🔷' },
        { name: 'TAILWIND', level: 95, icon: '🎨' },
        { name: 'HTML/CSS', level: 90, icon: '🌐' },
      ]
    },
    {
      category: 'QUANTUM_SERVER',
      icon: <FaServer className="text-xl" />,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'NODE_JS', level: 85, icon: '🟢' },
        { name: 'EXPRESS', level: 80, icon: '⚡' },
        { name: 'PYTHON', level: 75, icon: '🐍' },
        { name: 'MONGODB', level: 80, icon: '🍃' },
        { name: 'POSTGRESQL', level: 75, icon: '🐘' },
      ]
    },
    {
      category: 'SYSTEM_TOOLS',
      icon: <FaTools className="text-xl" />,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'GIT', level: 85, icon: '📚' },
        { name: 'DOCKER', level: 70, icon: '🐳' },
        { name: 'AWS', level: 65, icon: '☁️' },
        { name: 'FIGMA', level: 75, icon: '🎯' },
        { name: 'AGILE', level: 80, icon: '🔄' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,255,255,0.02)_50%,transparent_100%)] bg-[size:100px_100%] animate-circuit"></div>
        
        {/* Floating Nodes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Data Flow Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(0,255,255,0.01)_50%,transparent_100%)] bg-[size:200%_200%] animate-dataflow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <FaMicrochip className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-mono tracking-widest">SYSTEM_CAPABILITIES</span>
            <FaRobot className="text-purple-400 animate-pulse delay-500" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Neural Matrix
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/25"></div>
          <p className="text-cyan-300/80 mt-6 max-w-2xl mx-auto font-mono text-lg tracking-wide">
            QUANTUM_PROFICIENCY • NEURAL_SYNC • SYSTEM_INTEGRATION
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
            >
              {/* Holographic Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Skill Category Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 group-hover:transform group-hover:-translate-y-2">
                
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-widest">
                      {category.category}
                    </h3>
                  </div>
                  
                  {/* Connection Status */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 font-mono text-xs tracking-widest">SYNCED</span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-cyan-300 font-mono text-sm tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-mono text-sm font-bold">
                            {skill.level}%
                          </span>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover/skill:bg-green-400 transition-colors duration-300"></div>
                        </div>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="relative">
                        {/* Background Track */}
                        <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden border border-cyan-500/20">
                          {/* Animated Fill */}
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-cyan-500/25 relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            {/* Scanning Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-scan"></div>
                            
                            {/* Pulse Effect */}
                            <div className="absolute right-0 top-0 w-2 h-3 bg-white/50 rounded-r-full animate-pulse"></div>
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <div 
                          className="absolute -top-6 transform -translate-x-1/2 text-cyan-300 font-mono text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          style={{ left: `${skill.level}%` }}
                        >
                          ▴
                        </div>
                      </div>

                      {/* Data Flow Line */}
                      <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent group-hover/skill:w-full transition-all duration-500 delay-300 mt-2 rounded-full"></div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-8 pt-4 border-t border-cyan-500/10">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-300/60 font-mono text-xs tracking-widest">
                      {category.skills.length} MODULES
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Node */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* System Integration Status */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 px-8 py-6 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
            {/* Overall Proficiency */}
            <div className="flex items-center space-x-4">
              <FaCode className="text-cyan-400 text-2xl" />
              <div className="text-left">
                <div className="text-cyan-300 font-mono text-sm tracking-widest">OVERALL_SYNC</div>
                <div className="text-white font-mono text-2xl font-bold">82%</div>
              </div>
            </div>

            {/* System Status */}
            <div className="flex items-center space-x-4">
              <FaDatabase className="text-purple-400 text-2xl" />
              <div className="text-left">
                <div className="text-purple-300 font-mono text-sm tracking-widest">NEURAL_LINKS</div>
                <div className="text-white font-mono text-2xl font-bold">15</div>
              </div>
            </div>

            {/* Integration Level */}
            <div className="flex items-center space-x-4">
              <FaCloud className="text-blue-400 text-2xl" />
              <div className="text-left">
                <div className="text-blue-300 font-mono text-sm tracking-widest">QUANTUM_LEVEL</div>
                <div className="text-white font-mono text-2xl font-bold">MAX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-slate-800/40 backdrop-blur-sm rounded-full border border-cyan-500/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-cyan-300 font-mono text-sm tracking-widest">
              MATRIX_OPERATIONAL • ALL_SYSTEMS_NOMINAL
            </span>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes circuit {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100px); }
        }
        .animate-circuit {
          animation: circuit 15s linear infinite;
        }
        
        @keyframes dataflow {
          0% { transform: translateX(-100%) translateY(-100%); }
          100% { transform: translateX(100%) translateY(100%); }
        }
        .animate-dataflow {
          animation: dataflow 20s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(0.3deg) scale(1.01); }
        }
        .animate-tilt {
          animation: tilt 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;