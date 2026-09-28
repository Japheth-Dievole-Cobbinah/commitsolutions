import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, MessageSquare, Shield } from 'lucide-react';
import SEO from '../components/SEO';
import { itServices, communicationServices } from '../data/services';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore the comprehensive IT and Communication services offered by CommIT Solutions, from cybersecurity to digital marketing."
      />

      {/* Services Header */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold mb-6">Our Services</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to unify your technical infrastructure and strategic communications.
          </p>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-white" id="it-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-[#355E3B] p-3 rounded-xl mr-6">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">IT Services</h2>
              <p className="text-slate-600">Building and securing your technical foundation.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <motion.div 
                key={service.id}
                className="group border border-slate-200 p-8 rounded-2xl hover:border-[#22c55e]/50 hover:shadow-xl hover:shadow-green-50 transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-[#22c55e] font-bold flex items-center group-hover:underline">
                  View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Services Section */}
      <section className="py-20 bg-slate-50" id="communication-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="bg-[#355E3B] p-3 rounded-xl mr-6">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900">Communication Services</h2>
              <p className="text-slate-600">Strategic storytelling and brand engagement.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communicationServices.map((service) => (
              <motion.div 
                key={service.id}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-[#22c55e] font-bold flex items-center group-hover:underline">
                  View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Detailed) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-slate-900 mb-4">Why Choose CommIT Solutions?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We provide more than just services; we provide a partnership focused on your long-term success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Integrated Expertise', desc: 'IT and Communication under one roof for seamless execution.' },
              { title: 'Strategic Support', desc: 'We don\'t just fix problems; we help you plan for the future.' },
              { title: 'Security & Compliance', desc: 'Every solution is built with a security-first mindset.' },
              { title: 'Custom Solutions', desc: 'No cookie-cutter approaches. Every project is tailored to you.' },
              { title: 'Transparent Process', desc: 'Clear communication and regular updates throughout our work.' },
              { title: 'Proven Experience', desc: 'A team of seasoned professionals with decades of combined experience.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                  <Shield className="h-5 w-5 text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4">Our Simple 5-Step Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { step: '01', title: 'Discover', desc: 'Listen & Understand' },
              { step: '02', title: 'Plan', desc: 'Strategic Roadmap' },
              { step: '03', title: 'Implement', desc: 'Execution & Build' },
              { step: '04', title: 'Optimize', desc: 'Refine & Enhance' },
              { step: '05', title: 'Support', desc: 'Ongoing Care' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="text-4xl font-extrabold text-[#22c55e]/30 mb-2">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
            {/* Connection line for desktop */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-800 -z-0 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#22c55e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-8">Ready to take the next step?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-lg font-bold rounded-xl hover:bg-white hover:text-[#22c55e] transition-all">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
