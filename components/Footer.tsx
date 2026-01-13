
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let’s Build Your Success Together</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg">
              Ready to transform your IT infrastructure and workforce management? Get in touch with our experts today.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="font-bold">Delhi, India</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="font-bold">+91 9899979044</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="font-bold">connect@advaithr.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>IT Infrastructure Rental</option>
                  <option>Manpower Staffing</option>
                  <option>Repair & AMC</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors uppercase tracking-widest">
                Contact Us Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-400">ADVAIT</span>
            <span className="text-xl font-light ml-1 text-slate-400">Infotech</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Advait Infotech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-linkedin-in text-lg"></i></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-twitter text-lg"></i></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><i className="fab fa-facebook-f text-lg"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
