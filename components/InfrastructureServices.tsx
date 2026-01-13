
import React from 'react';

const services = [
  { title: "Hardware Rentals", desc: "Laptop & Desktop Rentals with latest configurations", icon: "laptop" },
  { title: "Hardware Sales", desc: "IT Hardware Sales with warranty support", icon: "desktop" },
  { title: "Repair & Break-Fix", desc: "Support with quick turnaround for all IT assets", icon: "tools" },
  { title: "AMC Services", desc: "Annual Maintenance Contracts for piece of mind", icon: "file-contract" },
  { title: "Network & Servers", desc: "Infrastructure, printer, and critical server support", icon: "server" },
  { title: "IT Helpdesk", desc: "On-site & Remote IT Helpdesk Services", icon: "headset" }
];

const InfrastructureServices: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">IT Infrastructure Services</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive IT Lifecycle Management</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our services are designed to keep your business running securely, smoothly, and efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="group p-8 bg-white border border-slate-200 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
              <i className={`fas fa-${s.icon} text-blue-600 group-hover:text-white text-xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{s.title}</h3>
            <p className="text-slate-600 group-hover:text-blue-50 transition-colors">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureServices;
