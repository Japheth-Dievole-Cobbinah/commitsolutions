import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { itServices, communicationServices } from '../data/services';
import { CONTACT_INFO } from '../constants/config';

const Footer = () => {
  return (
    <footer className="bg-[#355E3B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt="CommIT Solutions Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-green-50 mb-6">
              Bridging IT & Communications for smarter, connected businesses. We unify technology and storytelling to drive your growth.
            </p>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-green-50 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-3 text-[#22c55e]" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-green-50 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-3 text-[#22c55e]" />
                {CONTACT_INFO.phone}
              </a>
              <div className="flex items-start text-green-50">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-[#22c55e] flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#22c55e] pl-3">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-green-50 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-green-50 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-green-50 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/blog" className="text-green-50 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-green-50 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#22c55e] pl-3">IT Services</h3>
            <ul className="space-y-4">
              {itServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-green-50 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              {itServices.length > 5 && (
                <li><Link to="/services" className="text-[#22c55e] hover:underline">View All</Link></li>
              )}
            </ul>
          </div>

          {/* Communication Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-[#22c55e] pl-3">Communications</h3>
            <ul className="space-y-4">
              {communicationServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-green-50 hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              {communicationServices.length > 5 && (
                <li><Link to="/services" className="text-[#22c55e] hover:underline">View All</Link></li>
              )}
            </ul>
          </div>
        </div>

      </div>
      
      <div className="bg-[#1a1a1a] mt-12 py-8 border-t border-white/5 relative overflow-hidden">
        {/* Subtle texture to act as a "background image" effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative z-10">
          <p className="text-white text-[14px] font-sans">
            © {new Date().getFullYear()} CommIT Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22c55e] transition-colors" title="LinkedIn">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22c55e] transition-colors" title="Twitter">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22c55e] transition-colors" title="Facebook">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
