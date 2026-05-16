import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg" id="services-grid">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Complete WordPress Solutions for Your Business
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center justify-center text-brand-primary font-bold hover:translate-x-2 transition-transform">
            Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-white/5 bg-white/5 hover:border-brand-primary/50 hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 relative z-10">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 relative z-10 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-sm font-bold text-brand-primary hover:translate-x-1 transition-transform relative z-10"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
