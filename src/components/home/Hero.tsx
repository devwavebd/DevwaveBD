import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle, Smartphone, Globe, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[180px] pb-20 lg:pb-32 overflow-hidden bg-brand-bg" id="hero">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none" />
      
      {/* Structural Background */}
      <div className="absolute inset-0 bg-dashed opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />
      
      <div className="custom-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border-white/10 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary/40 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span>WordPress Innovation Lab</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
            >
              NEXT GEN <br />
              <span className="text-gradient">SOLUTIONS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light"
            >
              We craft high-performance WordPress ecosystems that don't just look good—they dominate competition and scale infinitely.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-brand-primary text-white font-bold shadow-2xl shadow-brand-primary/30 hover:scale-[1.03] active:scale-95 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform relative z-10" />
              </Link>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center space-x-3 text-white font-semibold hover:text-brand-primary transition-colors group px-6 py-4"
              >
                <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-all">
                  <Play size={16} fill="currentColor" />
                </span>
                <span>View Showreel</span>
              </Link>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-8"
            >
              <div>
                <p className="text-2xl font-bold text-white tracking-tighter">99.9%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Reliability</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tighter">5.0</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Client Rating</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl font-bold text-white tracking-tighter">100+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Projects Done</p>
              </div>
            </motion.div>
          </div>          {/* Right Visual Composition */}
          <div className="relative lg:block hidden h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative p-6 rounded-[2.5rem] border-glass bg-white/5 backdrop-blur-sm shadow-2xl h-[580px] w-full max-w-[500px] ml-auto"
            >
              {/* Mock UI Preview */}
              <div className="absolute inset-4 glass rounded-[2rem] overflow-hidden shadow-2xl border-white/5">
                <div className="flex items-center justify-between p-4 bg-white/10 border-b border-white/10 relative z-20">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] text-gray-500 font-mono tracking-tighter">devwave.bd/insights</div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="WordPress Performance Dashboard" 
                  className="w-full h-full object-cover object-center opacity-60 mix-blend-screen"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />
              </div>

              {/* Floating Element 1 - Mobile (Now contained safely) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-44 h-72 glass rounded-[2rem] p-4 shadow-2xl border-white/20 z-30 flex flex-col justify-between"
              >
                <div className="w-10 h-1 bg-white/20 rounded-full mx-auto" />
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Smartphone size={16} />
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded" />
                  <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                </div>
                <div className="h-8 w-full bg-brand-primary/80 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/40" />
                </div>
              </motion.div>

              {/* Floating Element 2 - Speed Indicator */}
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-12 glass p-5 rounded-2xl shadow-2xl border-white/20 flex items-center space-x-4 pr-8 z-30"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.25)]">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">Speed Score</p>
                  <p className="text-xl font-bold text-white tracking-tighter">100/100</p>
                </div>
              </motion.div>

              {/* Floating Element 3 - Global Reach */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 -translate-y-1/2 glass px-6 py-4 rounded-full shadow-2xl border-white/20 flex items-center space-x-3 whitespace-nowrap backdrop-blur-xl z-40"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe size={14} />
                </div>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Enterprise Scale</span>
              </motion.div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-white/5 rounded-full pointer-events-none -z-10 animate-[spin_60s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}
