
import React from 'react';

const BusinessBenefits: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Clients Gain</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {[
          { label: "Lower Costs", icon: "hand-holding-usd" },
          { label: "Better Efficiency", icon: "chart-bar" },
          { label: "Fast Resolution", icon: "history" },
          { label: "Simple Vendors", icon: "link" },
          { label: "Scalable Growth", icon: "expand-alt" },
          { label: "Strategic Partner", icon: "handshake" }
        ].map((item, idx) => (
          <div key={idx} className="group">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-blue-600 transition-all text-white">
              <i className={`fas fa-${item.icon} text-2xl`}></i>
            </div>
            <p className="font-semibold text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessBenefits;
