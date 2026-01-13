
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import IntegratedModel from './components/IntegratedModel';
import InfrastructureServices from './components/InfrastructureServices';
import RentalAdvantage from './components/RentalAdvantage';
import StaffingSolutions from './components/StaffingSolutions';
import TechnologySecurity from './components/TechnologySecurity';
import SLASection from './components/SLASection';
import WorkingApproach from './components/WorkingApproach';
import IndustriesServed from './components/IndustriesServed';
import WhyChooseUs from './components/WhyChooseUs';
import BusinessBenefits from './components/BusinessBenefits';
import MissionVision from './components/MissionVision';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrolled={scrolled} />
      <main>
        <section id="home"><Hero /></section>
        <section id="about" className="py-20 bg-white"><About /></section>
        <section id="model" className="py-20 bg-slate-50"><IntegratedModel /></section>
        <section id="infrastructure" className="py-20 bg-white"><InfrastructureServices /></section>
        <section className="py-20 bg-slate-900 text-white"><RentalAdvantage /></section>
        <section id="staffing" className="py-20 bg-white"><StaffingSolutions /></section>
        <section className="py-20 bg-slate-50"><TechnologySecurity /></section>
        <section className="py-20 bg-white"><SLASection /></section>
        <section className="py-20 bg-slate-900 text-white"><WorkingApproach /></section>
        <section className="py-20 bg-white"><IndustriesServed /></section>
        <section className="py-20 bg-slate-50"><WhyChooseUs /></section>
        <section className="py-20 bg-blue-600 text-white"><BusinessBenefits /></section>
        <section className="py-20 bg-white"><MissionVision /></section>
      </main>
      <section id="contact"><Footer /></section>
    </div>
  );
};

export default App;
