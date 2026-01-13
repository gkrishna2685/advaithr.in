
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200 text-center">
          <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-6">
            <i className="fas fa-eye text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            To become the most trusted partner for IT infrastructure and manpower solutions across India.
          </p>
        </div>
        <div className="bg-blue-600 p-12 rounded-3xl text-center text-white">
          <div className="inline-block p-4 bg-white/20 rounded-full mb-6">
            <i className="fas fa-bullseye text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-blue-50 text-lg leading-relaxed">
            To deliver reliable, scalable, and cost-efficient IT and staffing services that enable sustainable business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
