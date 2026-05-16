import PageHeader from '../components/PageHeader';
import { PORTFOLIO } from '../constants';
import { motion } from 'motion/react';
import { LayoutGrid, ShoppingBag, Home, User, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import CTA from '../components/home/CTA';

const CATEGORIES = ['All', 'Business Website', 'WooCommerce', 'Listing Portal', 'Personal Brand', 'Creative Portfolio'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPortfolio = activeCategory === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === activeCategory);

  return (
    <div id="portfolio-page">
      <PageHeader 
        title="Our Creative Portfolio" 
        subtitle="Explore our recent projects and see how we help businesses stand out with modern WordPress design."
        breadcrumb="OUR WORK"
      />

      <section className="py-12 md:py-20 bg-brand-bg">
        <div className="custom-container">
          {/* Filters */}
          <div className="flex flex-nowrap md:flex-wrap items-center md:justify-center gap-3 md:gap-4 mb-12 md:mb-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {filteredPortfolio.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="relative h-[320px] sm:h-[400px] md:h-[520px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl flex flex-col">
                  {/* Browser Top Bar */}
                  <div className="flex items-center justify-between px-5 md:px-8 py-3 md:py-5 bg-white/5 border-b border-white/5 relative z-20">
                    <div className="flex space-x-1.5 md:space-x-2">
                      <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-red-500/20" />
                      <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-yellow-500/20" />
                      <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 rounded-full bg-green-500/20" />
                    </div>
                    <div className="flex-1 mx-4 md:mx-8">
                      <div className="w-full max-w-sm md:max-w-lg mx-auto h-6 md:h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden px-2">
                        <span className="text-[9px] md:text-[11px] text-gray-500 font-mono tracking-tight uppercase truncate">devwavebd.com/showcase/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                      </div>
                    </div>
                    <ExternalLink size={14} className="text-gray-500 group-hover:text-brand-primary transition-colors cursor-pointer" />
                  </div>

                  {/* Vertical Scrolling Image Container */}
                  <div className="relative flex-1 overflow-hidden group/img">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto absolute top-0 left-0 transition-transform duration-[8000ms] ease-in-out group-hover:translate-y-[calc(-100%+250px)] sm:group-hover:translate-y-[calc(-100%+350px)] md:group-hover:translate-y-[calc(-100%+450px)]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* View Demo Button Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <div className="px-8 py-3 rounded-full glass border-white/20 text-white font-black text-[10px] tracking-[0.2em] uppercase shadow-2xl backdrop-blur-xl hover:scale-110 active:scale-95 transition-all cursor-pointer">
                          View Demo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 md:mt-8 flex justify-between items-start px-2 md:px-4">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full">
                        {project.category}
                      </span>
                      <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 bg-white/5 text-gray-500 rounded-full border border-white/5">
                        Case Study 0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
