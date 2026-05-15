import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navbarBg}`} id="navbar">
      <div className="custom-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img 
              src="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Artboard-1-e1778821694516.png" 
              alt="Devwave BD" 
              className="w-[140px] md:w-[160px] h-auto object-contain brightness-0 invert"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-brand-bg/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-50 p-6"
          >
            <div className="space-y-2">
              {NAV_LINKS.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-bold transition-all ${
                      isActive 
                        ? 'bg-brand-primary text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
                  <div className="pt-6">
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center px-6 py-5 rounded-2xl bg-brand-primary text-white font-bold shadow-lg"
                    >
                      <Calendar size={20} className="mr-3" />
                      Book a Strategy Session
                    </Link>
                  </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
