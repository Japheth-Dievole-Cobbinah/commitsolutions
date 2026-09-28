import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'We believe in transparent, honest partnerships with every client we serve.',
      icon: <Heart className="h-8 w-8 text-red-500" />
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve to provide you with the latest technical and creative solutions.',
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />
    },
    {
      title: 'Impact',
      description: 'We measure our success by the tangible results and growth our clients achieve.',
      icon: <Target className="h-8 w-8 text-[#22c55e]" />
    }
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about CommIT Solutions, our mission to unify IT and Communication, and our human-centric approach to business technology."
      />

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
              <h1 className="font-extrabold text-slate-900 mb-6">
                Empowering Businesses Through <span className="text-[#355E3B]">Unified Solutions</span>
              </h1>
            <p className="text-slate-600 leading-relaxed">
              CommIT Solutions was founded on a simple realization: in the modern world, IT and Communication are inseparable. We bridge the gap between technical infrastructure and strategic messaging to help SMEs and corporate organizations thrive in a digital-first economy.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#355E3B] p-10 rounded-3xl text-white">
              <div className="bg-[#2a4a2f] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-200" />
              </div>
              <h2 className="font-bold mb-4">Our Vision</h2>
              <p className="text-green-50 leading-relaxed">
                To be the global leader in integrated business solutions, where every organization has access to seamless technology and powerful communication strategies that drive human progress.
              </p>
            </div>
            <div className="bg-slate-900 p-10 rounded-3xl text-white">
              <div className="bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#22c55e]" />
              </div>
              <h2 className="font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                To simplify the complex landscape of IT and Communication for our clients, providing reliable, secure, and impactful solutions that allow them to focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Our Team Planning" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
              <h2 className="font-bold text-slate-900 mb-6">Our Approach</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We don't believe in one-size-fits-all. Our process is designed to ensure that we understand your unique needs before we write a single line of code or draft a single press release.
              </p>
              <ul className="space-y-4">
                {[
                  'Discovery: Deep dive into your business and challenges.',
                  'Strategy: Developing a custom-tailored roadmap.',
                  'Implementation: Agile and efficient execution.',
                  'Support: Ongoing maintenance and optimization.'
                ].map((step, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-[#22c55e] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-[#355E3B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold mb-4">The CommIT Difference</h2>
            <p className="text-[16px] text-green-100 max-w-2xl mx-auto">
              What sets us apart from typical agencies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl">
              <h4 className="text-[20px] font-bold mb-4">Holistic Strategy</h4>
              <p className="text-green-50 text-[16px]">
                While most firms focus on either tech or comms, we understand how they influence each other. A great website (Tech) is useless without a great story (Comms).
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl">
              <h4 className="text-[20px] font-bold mb-4">Human-First Communication</h4>
              <p className="text-green-50 text-[16px]">
                We strip away the jargon. Whether we're discussing cybersecurity or PR strategy, we communicate in plain language that helps you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
