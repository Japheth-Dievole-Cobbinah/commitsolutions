import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { allServices } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = allServices.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = allServices
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={`${service.title} | IT & Communication Experts`} 
        description={service.description}
      />

      {/* Breadcrumbs / Back button */}
      <div className="bg-slate-50 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#22c55e]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider bg-green-100 text-[#22c55e] mb-6">
                {service.category} Solutions
              </span>
              <h1 className="font-extrabold text-slate-900 mb-6">
                {service.title} <span className="text-[#22c55e]">for Business</span>
              </h1>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                  Talk to our team about {service.title}
                </Link>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-slate-100 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-50"></div>
                <h3 className="font-bold text-slate-900 mb-8 relative z-10">Key Benefits</h3>
                <ul className="space-y-6 relative z-10">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-slate-900 mb-4">Our {service.title} Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              How we deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-green-100 mb-4">0{idx + 1}</div>
                <h4 className="font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#355E3B] rounded-3xl p-10 lg:p-16 text-white overflow-hidden relative">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
                <div>
                  <h2 className="font-bold mb-6">Is this for you?</h2>
                  <p className="text-green-50 mb-8 leading-relaxed">
                    We work with a diverse range of clients, but our {service.title} services are particularly effective for:
                  </p>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#22c55e] mr-3 flex-shrink-0" />
                        <span className="text-green-50">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 lg:mt-0 text-center">
                  <p className="text-2xl font-bold mb-8">Ready to get started?</p>
                  <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#355E3B] font-bold rounded-xl hover:bg-green-50 transition-colors shadow-2xl">
                    Book a Consultation
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Other {service.category} Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((s) => (
              <Link 
                key={s.id} 
                to={`/services/${s.slug}`}
                className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-[#22c55e]/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#22c55e] transition-colors">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{s.description}</p>
                <span className="text-[#22c55e] font-bold text-sm flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
