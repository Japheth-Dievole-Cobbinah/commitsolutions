import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { itServices, communicationServices } from '../data/services';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <SEO 
        title="CommIT Solutions || Bridging IT & Communications" 
        description="CommIT Solutions unifies IT and Communication services to empower SMEs and Corporates with smarter, connected business solutions."
      />

      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
          <div className="w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-extrabold text-slate-900 leading-[1.1] mb-6">
                Bridging <span className="text-[#22c55e]">IT & Communications</span> for Smarter Businesses
              </h1>
              <p className="text-slate-600 mb-8 max-w-lg leading-relaxed">
                We empower SMEs and corporate organizations by unifying technical excellence and strategic storytelling under one roof.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 font-display">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-[#22c55e] hover:bg-[#16a34a] transition-colors shadow-lg shadow-green-100">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-base font-bold rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-16 lg:mt-0 relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="IT and Communication Integration"
                  className="w-full h-auto grayscale-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#22c55e]/10 to-transparent"></div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Integrated Solutions</p>
                    <p className="text-xs text-slate-500">Unifying Tech & Strategy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrated Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-slate-900 mb-4">Unified Expertise</h2>
            <div className="w-20 h-1.5 bg-[#22c55e] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#355E3B] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-white h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-4">IT Services</h3>
              <p className="text-slate-600 mb-6">
                From cybersecurity to network installation and bespoke software development, we provide robust technical foundations for your business.
              </p>
              <Link to="/services" className="text-[#22c55e] font-semibold inline-flex items-center hover:underline">
                View IT Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="bg-[#355E3B] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-white h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-4">Communication Services</h3>
              <p className="text-slate-600 mb-6">
                Elevate your brand with strategic PR, content creation, and digital communications designed to engage and convert.
              </p>
              <Link to="/services" className="text-[#22c55e] font-semibold inline-flex items-center hover:underline">
                View Communications <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-bold text-slate-900 mb-4">Featured Solutions</h2>
              <p className="text-slate-600 max-w-xl">
                Discover our most sought-after services tailored for modern business challenges.
              </p>
            </div>
            <Link to="/services" className="mt-4 md:mt-0 text-[#22c55e] font-semibold flex items-center hover:underline">
              All Services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...itServices.slice(0, 3), ...communicationServices.slice(4, 7)].map((service) => (
              <motion.div 
                key={service.id}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="text-green-600 text-sm font-bold uppercase tracking-wider flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="font-bold text-slate-900 mb-6">Why Partner with CommIT?</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We believe that technology and communication are two sides of the same coin. By integrating them, we create more value for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Measurable Results</h4>
                    <p className="text-slate-600">We focus on outcomes that impact your bottom line.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Human-Centric Approach</h4>
                    <p className="text-slate-600">We speak your language, not just technical jargon.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Security-First Mindset</h4>
                    <p className="text-slate-600">Protection is built into every solution we deliver.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/services" className="mt-10 inline-flex items-center text-[#22c55e] font-bold hover:underline font-display">
                Full "Why Choose Us" section <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=500" alt="Team Work" className="rounded-2xl shadow-lg mt-8" />
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=500" alt="Technology" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#355E3B] rounded-3xl p-12 text-center text-white">
            <h2 className="text-[36px] font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-[16px] text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a free consultation with our experts and discover how integrated IT & Communication can drive your success.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-xl text-[#355E3B] bg-white hover:bg-green-50 transition-colors shadow-xl font-display">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
