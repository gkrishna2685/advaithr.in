
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-2xl -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
            alt="Team working" 
            className="rounded-2xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-2xl shadow-xl z-20 text-white max-w-[250px]">
            <p className="text-3xl font-bold mb-1">Professionally</p>
            <p className="text-lg opacity-90">Managed Organization</p>
          </div>
        </div>
        <div>
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Powering Business Growth Through Technology & Talent
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Advait Infotech is a professionally managed organization delivering <strong>end-to-end IT infrastructure services</strong> combined with <strong>strategic IT and Non-IT manpower staffing solutions</strong>.
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We help businesses reduce operational costs, improve efficiency, and maintain uninterrupted operations through a reliable and responsive service delivery model.
          </p>
          <div className="bg-slate-50 border-l-4 border-blue-600 p-6 italic text-slate-700">
            "Our integrated approach eliminates the complexity of managing multiple vendors while ensuring consistent quality across all technology and workforce touchpoints."
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
