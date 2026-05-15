import PageHeader from '../components/PageHeader';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, User, Search, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/home/CTA';

export default function Blog() {
  return (
    <div id="blog-page">
      <PageHeader 
        title="Agency Insights" 
        subtitle="Stay updated with the latest WordPress trends, best practices, and expert tips to grow your business."
        breadcrumb="OUR ARTICLES"
      />

      <section className="py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="flex-1 space-y-12">
              {BLOG_POSTS.map((post, i) => (
                <motion.article 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group flex flex-col md:flex-row gap-8 md:items-stretch hover:bg-white/5 p-6 rounded-[2.5rem] transition-all border border-transparent hover:border-white/5"
                >
                  <div className="w-full md:w-80 aspect-[16/10] md:aspect-auto shrink-0 rounded-3xl overflow-hidden shadow-lg border border-white/5">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="grow py-4 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4 text-[10px] font-black uppercase tracking-widest text-brand-primary">
                      <span className="px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20">{post.category}</span>
                      <div className="flex items-center text-gray-500">
                        <Calendar size={14} className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold text-white group-hover:text-brand-primary transition-colors">
                      Read Article <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-96 space-y-10">
              {/* Search */}
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5">
                <h4 className="text-xl font-bold text-white mb-6">Search Blog</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-primary p-2">
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5">
                <h4 className="text-xl font-bold text-white mb-6">Categories</h4>
                <div className="flex flex-wrap gap-3">
                  {['WordPress Hints', 'SEO Focus', 'eCommerce', 'Performance', 'Security', 'Themes'].map((cat, i) => (
                    <Link key={i} to="#" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 hover:border-brand-primary hover:text-brand-primary transition-all">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-primary to-purple-800 text-white relative overflow-hidden shadow-2xl shadow-brand-primary/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h4 className="text-2xl font-bold mb-4 relative z-10">Get Expert Tips</h4>
                <p className="text-white/80 text-sm mb-8 relative z-10">Subscribe to our newsletter for exclusive WordPress growth insights.</p>
                <div className="space-y-4 relative z-10">
                  <input type="email" placeholder="Your email address" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-white/40 focus:outline-none" />
                  <button className="w-full py-4 rounded-2xl bg-white text-brand-primary font-bold hover:bg-gray-100 transition-all shadow-lg">Sign Up Now</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
