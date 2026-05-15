import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-20 bg-brand-bg md:pb-24" id="cta">
      <div className="custom-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-brand-primary via-brand-primary to-purple-800 p-8 lg:p-14 text-white shadow-2xl shadow-brand-primary/20 border border-white/5"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 opacity-30" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-6 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span>Available for new projects</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tighter leading-[1.1]">
                Ready to scale your <br className="hidden md:block" />
                <span className="text-white/70">digital presence?</span>
              </h2>
              <p className="text-base lg:text-lg text-white/70 max-w-xl font-medium leading-relaxed">
                Build a high-performance WordPress website that converts visitors into customers. Get your free strategy call today.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-brand-primary font-black shadow-2xl hover:bg-gray-50 hover:scale-[1.03] active:scale-95 transition-all text-sm uppercase tracking-widest group"
              >
                Book a Free Call
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
