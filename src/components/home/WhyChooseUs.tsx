import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STATS } from '../../constants';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-bg border-t border-white/5 overflow-hidden" id="why-choose-us">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              We Build Websites That <br /> Drive Real Results
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              We combine creativity, technology and strategy to deliver websites that not only look amazing but also perform. Our approach is focused on conversion and growth.
            </p>

            <div className="space-y-4 mb-10">
              {[
                '100% Client Satisfaction',
                'On-Time Delivery',
                'Clean & Modern Design',
                'Secure & Reliable Support'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-white font-semibold">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-all group"
            >
              More About Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-6 relative">
            {/* Decorative dot grid background */}
            <div className="absolute -top-10 -right-10 w-40 h-40 grid grid-cols-5 gap-4 opacity-5">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
              ))}
            </div>

            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-start ${i % 2 !== 0 ? 'mt-8' : ''}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider leading-snug">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
