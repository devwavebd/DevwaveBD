import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, Phone, MapPin, MessageCircle, ChevronRight, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = scrolled 
    ? 'bg-brand-bg/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' 
    : 'bg-transparent py-6 border-b border-white/0';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navbarBg}`} id="navbar">
      <div className="custom-container">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img 
              src="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Artboard-1-e1778821694516.png" 
              alt="Devwave BD" 
              className="w-[140px] md:w-[160px] h-auto object-contain brightness-0 invert"
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Desktop Navigation Pill */}
          <div className="hidden lg:flex items-center px-1.5 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2.5 px-7 py-3 rounded-full text-[13px] font-black tracking-tight transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/40' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={16} strokeWidth={2.5} className={isActive ? 'opacity-100' : 'opacity-60'} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-brand-primary text-white text-sm font-black shadow-2xl shadow-brand-primary/20 hover:scale-[1.03] active:scale-95 hover:bg-brand-primary/90 transition-all group"
            >
              Book a Call
              <Calendar className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-brand-primary focus:outline-none transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] lg:hidden"
          />
          
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-brand-bg border-l border-white/10 z-[70] p-6 flex flex-col shadow-2xl overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <img 
                  src="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Artboard-1-e1778821694516.png" 
                  alt="Devwave BD" 
                  className="w-[100px] h-auto brightness-0 invert"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Quick Access Menu */}
                  <div className="pb-4 border-b border-white/5">
                    <Link 
                      to="/blog" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-brand-primary transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          <MessageCircle size={16} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest">Our Blog</span>
                      </div>
                      <ChevronRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>

                  <div>
                    <span className="text-brand-primary text-[9px] font-black uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
                    <div className="space-y-4">
                      <a href="mailto:hello@devwavebd.com" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase font-bold">Email Us</p>
                          <p className="text-white text-sm font-bold">hello@devwavebd.com</p>
                        </div>
                      </a>

                      <a href="tel:+880123456789" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase font-bold">Call Anytime</p>
                          <p className="text-white text-sm font-bold">+880 1234 56789</p>
                        </div>
                      </a>

                      <div className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-[9px] text-gray-500 uppercase font-bold">Visit Us</p>
                          <p className="text-white text-sm font-bold">Uttara, Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <span className="text-brand-primary text-[9px] font-black uppercase tracking-[0.3em] mb-4 block">Direct Chat</span>
                    <a 
                      href="https://wa.me/880123456789" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-500 group hover:bg-green-500 hover:text-white transition-all duration-500"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <MessageCircle size={18} />
                        </div>
                        <span className="text-sm font-bold">WhatsApp Expert</span>
                      </div>
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pt-6 border-t border-white/5"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-6 py-4 rounded-2xl bg-brand-primary text-white text-xs font-black shadow-xl shadow-brand-primary/30 uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Calendar size={16} className="mr-3" />
                  Free Consulting
                </Link>
              </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}
