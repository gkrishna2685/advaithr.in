
import React from 'react';

const SLASection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">SLA Commitments</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Predictable Support You Can Trust</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { label: "Defined Response", icon: "clock" },
          { label: "Priority Handling", icon: "bolt" },
          { label: "Dedicated Account", icon: "user-check" },
          { label: "Escalation Matrix", icon: "sitemap" },
          { label: "Performance Reviews", icon: "chart-line" }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-50 p-6 rounded-xl text-center border border-slate-100 hover:border-blue-400 transition-colors">
            <div className="text-blue-600 text-3xl mb-4">
              <i className={`fas fa-${item.icon}`}></i>
            </div>
            <p className="font-bold text-slate-800 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SLASection;
