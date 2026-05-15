import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../constants';

export default function BlogSection() {
  return (
    <section className="py-24 bg-brand-bg pb-12" id="home-blog">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Our Blog</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Latest Articles & Insights
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center text-brand-primary font-bold hover:translate-x-2 transition-transform">
            View All Posts <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all duration-300"
            >
              <Link to={`/blog/${post.id}`} className="relative block overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-brand-bg/80 backdrop-blur shadow-sm text-brand-primary text-[10px] uppercase tracking-widest font-black border border-brand-primary/20">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-8 grow flex flex-col">
                <div className="flex items-center space-x-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                  <div className="flex items-center space-x-1.5">
                    <Calendar size={14} className="text-brand-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-brand-primary/30" />
                  <div className="flex items-center space-x-1.5">
                    <User size={14} className="text-brand-primary" />
                    <span>By {post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 leading-tight group-hover:text-brand-primary transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="mt-auto">
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-gray-400 group-hover:text-brand-primary transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
