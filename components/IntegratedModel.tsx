
import React from 'react';

const IntegratedModel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Integrated Service Model</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">One Partner. Complete Responsibility.</h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-16">
        Our dual-service model simplifies vendor management, reduces administrative overhead, and delivers measurable business value.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <i className="fas fa-network-wired text-blue-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">IT Infrastructure Solutions</h3>
          <p className="text-slate-600">
            Complete hardware lifecycle management including rentals, sales, repairs, AMC, networking, servers, and helpdesk support.
          </p>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-600">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
            <i className="fas fa-user-tie text-indigo-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">IT & Non-IT Manpower Staffing</h3>
          <p className="text-slate-600">
            Skilled, verified professionals across technical and operational roles, available for immediate deployment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegratedModel;
