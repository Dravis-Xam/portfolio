import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaRocket, FaSatellite, FaTransmitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [state, handleSubmit] = useForm("mblwkdjb");

  // Show toast notifications based on form state
  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('📡 Transmission successful! Message received. Responding shortly...');
    }
    if (state.errors && state.errors.length > 0) {
      toast.error('🚨 Transmission failed! Signal lost. Retrying...');
    }
  }, [state.succeeded, state.errors]);

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Quantum Mail',
      value: 'kennedyngo1234@gmail.com',
      href: 'mailto:kennedyngo1234@gmail.com',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Neural Comms',
      value: '+2547 54 234 198',
      href: 'tel:+254754234198',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: 'Coordinates',
      value: "Murang'a, KE",
      href: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/Dravis-Xam', 
      label: 'GitHub',
      gradient: 'from-gray-500 to-gray-700'
    },
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/ken-ng-42916539a', 
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Scanning Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(0,255,255,0.05)_50%,transparent_100%)] bg-[length:100%_8px] animate-scan"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="bg-slate-800/90 backdrop-blur-xl border border-cyan-500/30"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-4">
            <FaSatellite className="text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-400 text-sm font-mono tracking-widest">QUANTUM COMMUNICATIONS</span>
            <FaTransmitter className="text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Initiate Contact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full shadow-lg shadow-cyan-500/25"></div>
          <p className="text-cyan-300/80 mt-6 max-w-2xl mx-auto font-mono text-lg">
            READY FOR TRANSMISSION • ENCRYPTION: ACTIVE • AWAITING INPUT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information - Holographic Panel */}
          <div className="relative group">
            {/* Holographic Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Communication Channels
                </h3>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Direct neural interface established. All transmission channels are encrypted and secure. 
                Ready to receive your quantum message across any dimension.
              </p>

              {/* Contact Details - Futuristic Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/60 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300 group hover:transform hover:-translate-y-1"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-cyan-300 font-mono text-sm tracking-wide">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:bg-green-400 transition-colors"></div>
                  </a>
                ))}
              </div>

              {/* Social Links - Network Nodes */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-purple-300">Network Nodes</h4>
                </div>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl bg-gradient-to-br ${social.gradient} hover:scale-110 transition-all duration-300 transform hover:rotate-12 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden group`}
                      aria-label={social.label}
                    >
                      {social.icon}
                      {/* Pulsing ring effect */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Quantum Message Terminal */}
          <div className="relative group">
            {/* Terminal Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-cyan-300 font-mono text-sm">QUANTUM_MESSAGE_TERMINAL.exe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-cyan-300 font-mono text-sm mb-2 tracking-wide">
                      IDENTIFICATION
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono text-white placeholder-cyan-300/50"
                      placeholder="ENTER_NAME"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1 font-mono"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-cyan-300 font-mono text-sm mb-2 tracking-wide">
                      QUANTUM_ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono text-white placeholder-cyan-300/50"
                      placeholder="USER@DOMAIN.QUANTUM"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1 font-mono"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="block text-cyan-300 font-mono text-sm mb-2 tracking-wide">
                    TRANSMISSION_SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono text-white placeholder-cyan-300/50"
                    placeholder="MESSAGE_PRIORITY"
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1 font-mono"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-cyan-300 font-mono text-sm mb-2 tracking-wide">
                    QUANTUM_MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono text-white placeholder-cyan-300/50 resize-none"
                    placeholder="INITIATE_MESSAGE_TRANSMISSION..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 disabled:from-slate-600 disabled:to-slate-600 text-white py-4 px-6 rounded-lg font-mono font-bold tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 disabled:scale-100 disabled:cursor-not-allowed disabled:shadow-none group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <FaRocket className={`${state.submitting ? 'animate-pulse' : ''}`} />
                    <span>
                      {state.submitting ? 'ENCRYPTING_TRANSMISSION...' : 'INITIATE_QUANTUM_SEND'}
                    </span>
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Transmission Status */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-slate-800/40 backdrop-blur-sm rounded-full border border-cyan-500/20">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
            </div>
            <span className="text-cyan-300 font-mono text-sm tracking-widest">
              TRANSMISSION_PROTOCOL: ACTIVE • ENCRYPTION: QUANTUM_LEVEL
            </span>
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1deg); }
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;