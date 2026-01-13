
import React from 'react';

const WorkingApproach: React.FC = () => {
  const steps = [
    { num: "01", title: "Understand", desc: "Business needs and challenges analysis" },
    { num: "02", title: "Strategise", desc: "Tailored IT & manpower solutions design" },
    { num: "03", title: "Deploy", desc: "Fast, disruption-free implementation" },
    { num: "04", title: "Support", desc: "Continuous monitoring and optimization" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h4 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Our Methodology</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple. Structured. Reliable.</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-0 relative">
        {/* Connection Line (desktop) */}
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-blue-500/30 -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center px-6 mb-12 md:mb-0">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-8 border-4 border-slate-900 shadow-xl shadow-blue-600/20">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-slate-400 text-center">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingApproach;
