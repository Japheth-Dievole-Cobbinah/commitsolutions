import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { teamMembers } from '../data/team';

const Team = () => {
  return (
    <>
      <SEO 
        title="Our Team" 
        description="Meet the experts behind CommIT Solutions. Our team of IT professionals and communication strategists are dedicated to your success."
      />

      {/* Team Intro */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-extrabold text-slate-900 mb-6">
              The People Behind <span className="text-[#22c55e]">CommIT Solutions</span>
            </h1>
            <p className="text-slate-600 leading-relaxed">
              We are a diverse team of technologists, storytellers, and problem-solvers. We believe that by combining our expertise, we can deliver solutions that are not only technically sound but also strategically impactful.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Short */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#355E3B] rounded-3xl p-10 lg:p-16 text-white overflow-hidden relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-bold mb-6">Our Profile</h2>
                <p className="text-green-50 mb-6 leading-relaxed">
                  CommIT Solutions has served clients across multiple sectors including finance, healthcare, manufacturing, and non-profits. Our integrated IT + Communication positioning allows us to serve as a single point of contact for complex digital transformation projects.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                    <div className="text-[#22c55e] text-xs md:text-sm uppercase tracking-wider font-bold">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
                    <div className="text-[#22c55e] text-xs md:text-sm uppercase tracking-wider font-bold">Projects Delivered</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400" 
                   alt="CommIT Team" 
                   className="rounded-2xl shadow-2xl rotate-2"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-slate-900 mb-4">Meet Our Experts</h2>
            <div className="w-20 h-1.5 bg-[#22c55e] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-[#22c55e] font-medium text-xs md:text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bold text-slate-900 mb-6">Our Culture</h2>
            <p className="text-slate-600 leading-relaxed">
              We foster an environment of continuous learning and collaboration. At CommIT Solutions, we're not just colleagues; we're a community of professionals passionate about using our skills to make a difference for our clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
