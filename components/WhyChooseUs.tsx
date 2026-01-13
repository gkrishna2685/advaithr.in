
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const perks = [
    { title: "One-stop Solution", desc: "Infrastructure and staffing in one place." },
    { title: "Cost Reduction", desc: "Significant operational savings." },
    { title: "Rapid Deployment", desc: "Quick setup and immediate support." },
    { title: "Expert Teams", desc: "Experienced technical and HR pros." },
    { title: "Customizable", desc: "Scalable solutions for your needs." },
    { title: "Transparent", desc: "Honest and reliable service delivery." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h4>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">The Advait Advantage</h2>
          <p className="text-slate-600 mb-8">
            Choosing the right partner is critical. We combine technical expertise with human talent to drive your success.
          </p>
          <a href="#contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors">
            Get Started Today
          </a>
        </div>
        <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
          {perks.map((p, idx) => (
            <div key={idx} className="flex gap-4 p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center">
                <i className="fas fa-check"></i>
              </div>
              <div>
                <h5 className="font-bold text-slate-900 mb-1">{p.title}</h5>
                <p className="text-slate-500 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
