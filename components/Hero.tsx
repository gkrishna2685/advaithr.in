
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/30 rounded-full">
            IT Rentals | Repairs | AMC | Staffing
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Complete IT Infrastructure & <span className="text-blue-400">Manpower Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Your trusted technology and workforce partner delivering reliable, scalable, and cost-effective IT and manpower solutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-center transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/20"
            >
              Get a Free Consultation
            </a>
            <a 
              href="#infrastructure" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold text-center backdrop-blur-sm transition-all transform hover:-translate-y-1"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Stats/Badge area */}
      <div className="absolute bottom-0 left-0 w-full bg-slate-900/40 backdrop-blur-md border-t border-white/10 py-6 hidden lg:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <i className="fas fa-microchip text-blue-400 text-2xl"></i>
            <div>
              <p className="text-white font-bold">Latest Tech</p>
              <p className="text-slate-400 text-xs">Modern Hardware</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-users text-blue-400 text-2xl"></i>
            <div>
              <p className="text-white font-bold">Verified Talent</p>
              <p className="text-slate-400 text-xs">Ready Deployment</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-shield-alt text-blue-400 text-2xl"></i>
            <div>
              <p className="text-white font-bold">SLA Support</p>
              <p className="text-slate-400 text-xs">Guaranteed Uptime</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <i className="fas fa-map-marker-alt text-blue-400 text-2xl"></i>
            <div>
              <p className="text-white font-bold">Pan-India</p>
              <p className="text-slate-400 text-xs">Nationwide Reach</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
