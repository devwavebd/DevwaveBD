import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-brand-bg text-white overflow-hidden relative border-t border-white/5" id="testimonials">
      {/* Decorative Glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-0" />

      <div className="custom-container relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">What Our Clients Say</h2>
          <div className="mt-6 flex justify-center text-white/5">
            <Quote size={80} fill="currentColor" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm relative"
              >
                <p className="text-xl text-gray-300 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[activeIndex].content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-14 h-14 rounded-full border-2 border-brand-primary object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                    <p className="text-brand-primary text-sm">{TESTIMONIALS[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center lg:justify-start space-x-3 mt-12">
              {TESTIMONIALS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-white/10 hover:bg-white/30'}`} 
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              { platform: 'Fiverr', rating: '5.0', stars: 5, bg: 'bg-green-500/5', color: 'text-green-500', logo: 'fi' },
              { platform: 'Upwork', rating: '5.0', stars: 5, bg: 'bg-emerald-500/5', color: 'text-emerald-500', logo: 'up' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl ${item.bg} border border-white/5 backdrop-blur-md gap-6 shadow-xl`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center font-black text-xl italic ${item.color}`}>
                    {item.logo}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 text-2xl font-bold">
                      <span className="text-white">{item.rating}</span>
                      <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Rated on {item.platform}</div>
                  </div>
                </div>
                <div className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/40">Verified</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
