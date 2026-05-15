import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div id={`blog-post-${post.id}`}>
      <PageHeader 
        title={post.title}
        subtitle={`${post.date} • By ${post.author}`}
        breadcrumb={post.category.toUpperCase()}
      />

      <section className="py-24 bg-brand-bg relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

        <div className="custom-container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors mb-12 group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Keep Reading
            </Link>

            {/* Featured Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-white/10"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent" />
            </motion.div>

            {/* Post Metadata Row */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-10 mb-10 border-b border-white/5">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Author</p>
                    <p className="text-sm font-bold text-white">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Published</p>
                    <p className="text-sm font-bold text-white">{post.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Read Time</p>
                    <p className="text-sm font-bold text-white">5 Min Read</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-all">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-primary transition-all">
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>

            {/* Post Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 font-medium leading-relaxed mb-8 italic border-l-4 border-brand-primary pl-8 py-2 bg-brand-primary/5 rounded-r-2xl">
                {post.excerpt}
              </p>
              
              <div className="text-gray-400 leading-[1.8] space-y-6">
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>

              <div className="mt-16 p-10 rounded-[2rem] bg-white/5 border border-brand-primary/20 relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Share2 size={80} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Did you find this helpful?</h4>
                <p className="text-gray-400 mb-8 max-w-md">Our agency specializes in WordPress development and optimization. If you need help scaling your digital presence, we're here.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 rounded-full bg-brand-primary text-white font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">
                    Work With Us
                  </Link>
                  <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all">
                    Get Free Audit
                  </button>
                </div>
              </div>
            </div>

            {/* Related Posts Simple Hook */}
            <div className="mt-24 pt-16 border-t border-white/5">
              <h3 className="text-3xl font-bold text-white mb-12">More to Read</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.filter(p => p.id !== id).slice(0, 2).map((p, i) => (
                  <Link key={i} to={`/blog/${p.id}`} className="group block">
                    <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-white/10">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">{p.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
