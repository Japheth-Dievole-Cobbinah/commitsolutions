import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.excerpt}
      />

      {/* Post Progress/Back */}
      <div className="bg-slate-50 py-4 border-b border-slate-200 sticky top-20 z-40 backdrop-blur-sm bg-white/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#22c55e] transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-[#22c55e] transition-colors" title="Share">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Post Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs md:text-sm text-slate-500 mb-6 font-sans">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-[#22c55e] rounded-full font-bold uppercase tracking-wider">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
            </div>
            
            <h1 className="font-extrabold text-slate-900 leading-[1.1] mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="bg-green-100 p-3 rounded-full">
                <User className="h-6 w-6 text-[#22c55e]" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold font-sans">Written by</p>
                <p className="text-base md:text-lg font-bold text-slate-900 font-display">{post.author}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-video">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none text-slate-700 leading-relaxed font-sans blog-content-area"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-4">
                 <Link to="/contact" className="px-8 py-3 bg-[#355E3B] text-white font-bold rounded-xl hover:bg-slate-900 transition-colors font-display text-sm md:text-base">
                   Request Consultation
                 </Link>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest font-sans">Share this article</span>
                <div className="flex gap-2">
                   {/* Placeholder social share buttons */}
                   <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-[#22c55e] hover:text-white transition-all cursor-pointer"><Share2 className="h-5 w-5" /></div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Read Next Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-slate-900 mb-12">Related Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#22c55e]/50 hover:shadow-xl transition-all"
              >
                <p className="text-[#22c55e] font-bold text-xs md:text-sm uppercase tracking-widest mb-4 font-sans">{post.category}</p>
                <h3 className="font-bold text-slate-900 mb-4 group-hover:text-[#22c55e] transition-colors">{post.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{post.excerpt}</p>
                <span className="text-[#22c55e] font-bold text-xs md:text-sm flex items-center gap-1 uppercase tracking-wider font-display">
                  Read Full Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostDetail;
