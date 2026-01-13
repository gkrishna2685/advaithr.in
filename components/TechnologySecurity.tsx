
import React from 'react';

const TechnologySecurity: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-12 lg:p-20">
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Tech & Security</h4>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">Secure & Future-Ready IT Environments</h2>
          
          <div className="space-y-6">
            {[
              { title: "Endpoint Security", desc: "Comprehensive device protection", icon: "shield-halved" },
              { title: "Asset Tracking", desc: "Inventory management & monitoring", icon: "box" },
              { title: "Disaster Recovery", desc: "Reliable data backup solutions", icon: "cloud-upload-alt" },
              { title: "Network Control", desc: "Secure access management", icon: "lock" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                  <i className={`fas fa-${item.icon} text-xl`}></i>
                </div>
                <div>
                  <h5 className="font-bold text-slate-800">{item.title}</h5>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-600 font-medium border-t pt-8">
            We help protect your infrastructure from operational and cyber risks.
          </p>
        </div>
        <div className="lg:w-1/2 bg-slate-900 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" 
            alt="Cyber Security" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-600 rounded-full mb-6">
                <i className="fas fa-fingerprint text-white text-5xl"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Compliance Ready</h3>
              <p className="text-slate-300">Standardized & Secure IT Processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySecurity;
