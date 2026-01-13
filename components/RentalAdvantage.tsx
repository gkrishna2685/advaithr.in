
import React from 'react';

const RentalAdvantage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h4 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">IT Rental & AMC Advantage</h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Flexible. Reliable. <span className="text-blue-400">Cost-Controlled.</span></h2>
          
          <ul className="space-y-6">
            {[
              { icon: "check-circle", text: "Zero Capital Expenditure (CapEx to OpEx model)" },
              { icon: "check-circle", text: "Access to latest hardware technology" },
              { icon: "check-circle", text: "Preventive & corrective maintenance" },
              { icon: "check-circle", text: "SLA-based support with defined response times" },
              { icon: "check-circle", text: "Maximum uptime assurance for critical systems" }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <i className={`fas fa-${item.icon} text-blue-400 text-xl mt-1`}></i>
                <span className="text-lg text-slate-300">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="bg-blue-600 rounded-3xl p-1 overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Data Center" 
              className="rounded-3xl opacity-80"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
            <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20">
              <p className="text-5xl font-bold text-white mb-2">100%</p>
              <p className="text-blue-400 font-bold uppercase tracking-wider text-sm">Focus on Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalAdvantage;
