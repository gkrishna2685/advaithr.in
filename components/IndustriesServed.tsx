
import React from 'react';

const IndustriesServed: React.FC = () => {
  const industries = [
    { name: "Corporate Offices", icon: "building" },
    { name: "IT Companies", icon: "laptop-code" },
    { name: "Startups & MSMEs", icon: "rocket" },
    { name: "Manufacturing", icon: "industry" },
    { name: "Education", icon: "graduation-cap" },
    { name: "Logistics", icon: "truck" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Industries We Serve</h4>
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Tailored Solutions for Every Sector</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((ind, idx) => (
          <div key={idx} className="flex flex-col items-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">
              <i className={`fas fa-${ind.icon}`}></i>
            </div>
            <p className="font-semibold text-slate-800 text-center text-sm">{ind.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;
