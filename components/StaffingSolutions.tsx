
import React from 'react';

const StaffingSolutions: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Manpower Staffing</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Expert Talent for Your Success</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We provide skilled, verified, and professionally trained workforce for technical and operational excellence.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* IT Staffing */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center">
              <i className="fas fa-code"></i>
            </span>
            IT Manpower Staffing
          </h3>
          <p className="text-slate-600 mb-6">Skilled IT Professionals, Ready to Deploy</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["IT Support Engineers", "Desktop Engineers", "Network Engineers", "System Administrators", "Helpdesk Executives"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-slate-100">
                <i className="fas fa-check text-green-500"></i>
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-blue-100 rounded text-blue-700 font-bold text-sm text-center uppercase tracking-wider">
            Contract • Temporary • Long-term
          </div>
        </div>

        {/* Non-IT Staffing */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-indigo-600 text-white rounded flex items-center justify-center">
              <i className="fas fa-briefcase"></i>
            </span>
            Non-IT Manpower Staffing
          </h3>
          <p className="text-slate-600 mb-6">Trained & Verified Operational Workforce</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Office Administrators", "Data Entry Operators", "Back-Office Executives", "Field & Operations Staff", "Coordinators"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-slate-100">
                <i className="fas fa-check text-green-500"></i>
                <span className="text-slate-700 font-medium text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-indigo-100 rounded text-indigo-700 font-bold text-sm text-center uppercase tracking-wider">
            Professionally Trained & Verified
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffingSolutions;
