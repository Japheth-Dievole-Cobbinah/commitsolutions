import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Insights, trends, and expert advice on IT and Communication from the CommIT Solutions team."
      />

      {/* Blog Header */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-extrabold mb-6">Our Blog</h1>
          <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights on navigating the intersection of technology and communication.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-64">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500 mb-4 font-sans">
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4 text-[#22c55e]" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-[#22c55e]" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 mb-4 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#22c55e] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-1.5 rounded-full">
                        <User className="h-4 w-4 text-[#22c55e]" />
                      </div>
                      <span className="text-xs md:text-sm font-bold text-slate-900 font-sans">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-[#22c55e] font-bold flex items-center gap-1 group font-display text-xs md:text-sm uppercase tracking-wider">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-6 text-[#355E3B]">Stay Informed</h2>
          <p className="text-[#355E3B]/80 mb-10 leading-relaxed">
            Subscribe to our newsletter to receive the <span className="text-emerald-600 font-semibold">latest tech trends</span> and communication strategies directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-xl border-2 border-[#22c55e] focus:ring-2 focus:ring-[#22c55e] outline-none text-slate-900"
              required
            />
            <button className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded-xl hover:bg-[#16a34a] transition-colors font-display">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Blog;
