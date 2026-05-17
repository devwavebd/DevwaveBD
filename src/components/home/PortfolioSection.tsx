import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../../constants';

export default function PortfolioSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg" id="portfolio">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Our Portfolio</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-sans tracking-tight">
              Some of Our Recent Work
            </h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center justify-center text-brand-primary font-bold hover:translate-x-2 transition-transform">
            View All Projects <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PORTFOLIO.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative h-[380px] md:h-[480px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl flex flex-col">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-5 md:px-6 py-3 md:py-4 bg-white/5 border-b border-white/5 relative z-20">
                  <div className="flex space-x-1.5 md:space-x-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/20" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex-1 mx-4 md:mx-6">
                    <div className="w-full max-w-sm md:max-w-md mx-auto h-6 md:h-7 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden">
                      <span className="text-[8px] md:text-[10px] text-gray-500 font-mono tracking-tight uppercase truncate px-2">devwavebd.com/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="text-gray-500 group-hover:text-brand-primary transition-colors cursor-pointer" />
                  </a>
                </div>

                {/* Vertical Scrolling Image Container */}
                <div className="relative flex-1 overflow-hidden group/img bg-white/[0.02]">
                  {/* Loading Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto absolute top-0 left-0 transition-transform duration-[8000ms] ease-in-out group-hover:translate-y-[calc(-100%+416px)] will-change-transform"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* View Demo Button Overlay */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <div className="px-8 py-3.5 rounded-full glass border-white/20 text-white font-bold text-sm tracking-widest uppercase shadow-2xl backdrop-blur-xl hover:scale-110 active:scale-95 transition-all cursor-pointer">
                        View Demo
                      </div>
                    </div>
                  </a>

                  {/* Subtle Grain Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-gray-500 rounded-full">
                      Full Case Study
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold tracking-tighter text-gray-600">Client Project</p>
                  <p className="text-sm font-bold text-gray-400">2024 Release</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
