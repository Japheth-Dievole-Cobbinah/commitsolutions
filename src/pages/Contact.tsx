import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import GoogleMap from '../components/GoogleMap';
import { EMAILJS_CONFIG, CONTACT_INFO } from '../constants/config';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    try {
      // For production, you'd use your actual keys from environment variables
      // Since this is a demo, we simulate the EmailJS call or attempt to call it
      // if the keys are actually provided.
      
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Simulate success for demo purposes if keys aren't set
        setTimeout(() => {
          setStatus('success');
          formRef.current?.reset();
        }, 1500);
      } else {
        await emailjs.sendForm(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          formRef.current,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        setStatus('success');
        formRef.current?.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with CommIT Solutions for expert IT and communication consultancy. Request a consultation today."
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-[36px] font-extrabold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-[16px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to unify your IT and Communication? We'd love to hear from you. Fill out the form below or reach out via our contact details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="h-6 w-6 text-[#22c55e]" />
                </div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 mb-4 text-[16px]">Our friendly team is here to help.</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#22c55e] font-bold hover:underline text-[16px]">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="h-6 w-6 text-[#22c55e]" />
                </div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 mb-4 text-[16px]">Mon-Fri from 9am to 6pm.</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#22c55e] font-bold hover:underline text-[16px]">
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-[#22c55e]" />
                </div>
                <h3 className="text-[20px] font-bold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-slate-600 mb-4 text-[16px]">Come say hello at our office.</p>
                <p className="text-slate-900 font-medium">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-[24px] font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-slate-600 mb-8 text-[16px]">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-[#22c55e] font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="user_name" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="user_name" 
                          name="user_name" 
                          required 
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="user_email" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="user_email" 
                          name="user_email" 
                          required 
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="user_phone" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="user_phone" 
                          name="user_phone" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                          Company / Organization
                        </label>
                        <input 
                          type="text" 
                          id="company" 
                          name="company" 
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all"
                        placeholder="Inquiry about IT Consultancy"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#22c55e] focus:border-[#22c55e] outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200 disabled:opacity-70 disabled:cursor-not-allowed font-display"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-slate-200 relative">
        <GoogleMap 
          address={CONTACT_INFO.address} 
          className="rounded-none shadow-none"
        />
      </section>
    </>
  );
};

export default Contact;
