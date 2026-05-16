import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
        setMessage('Subscribed successfully!');
      } else {
        setStatus('error');
        setMessage(result.error || 'Subscription failed.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('A network error occurred.');
    }
  };

  return (
    <footer className="bg-brand-bg relative pt-16 pb-10 border-t border-white/5" id="footer">
      {/* Top Banner (Scrolling Support Marquee) */}
      <div className="absolute top-0 right-0 left-0 lg:left-1/3 z-20">
        <div className="h-12 md:h-16 bg-brand-primary flex items-center overflow-hidden relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap items-center px-12"
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center mx-8">
                <span className="text-white font-bold text-xs md:text-base tracking-wide">
                  We provide 24/7 dedicated support — 7 days a week, 24 hours a day
                </span>
                <div className="w-2 h-2 rounded-full bg-white mx-12 opacity-50" />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Tail element (Folded style) */}
        <div className="absolute top-full left-0 w-0 h-0 border-t-[12px] md:border-t-[16px] border-t-brand-primary border-l-[12px] md:border-l-[16px] border-l-transparent brightness-50 hidden lg:block" />
      </div>

      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 items-center">
          {/* Logo Section */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start lg:border-r lg:border-white/10 lg:pr-16 py-12 md:py-20">
            <Link to="/" className="inline-block mb-6 md:mb-8">
              <img 
                src="https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Artboard-1-e1778821694516.png" 
                alt="Devwave BD Logo" 
                className="w-[180px] md:w-[220px] h-auto brightness-0 invert opacity-90"
              />
            </Link>
            {/* Small Map */}
            <div className="w-full max-w-[320px] h-32 md:h-40 rounded-2xl overflow-hidden opacity-40 hover:opacity-100 transition-opacity border border-white/10 shadow-2xl grayscale hover:grayscale-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.953388867!2d90.3371962382433!3d23.7806206512683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa569fd2a1158ee!2sDhaka!5e0!3m2!1sen!2sbd!4v1715750000000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-16 py-20">
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 font-sans">Services</h4>
              <ul className="space-y-3">
                {['WordPress Dev', 'WooCommerce', 'Speed Optimization', 'SEO & Marketing'].map((link) => (
                  <li key={link} className="whitespace-nowrap">
                    <Link to="/services" className="text-gray-500 hover:text-brand-primary transition-colors text-base font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 font-sans">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Pricing', 'Our Portfolio', 'Contact Us'].map((link) => (
                  <li key={link} className="whitespace-nowrap">
                    <Link to={link === 'About Us' ? '/about' : link === 'Our Pricing' ? '/pricing' : link === 'Our Portfolio' ? '/portfolio' : '/contact'} className="text-gray-500 hover:text-brand-primary transition-colors text-base font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 font-sans">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Latest Blogs', path: '/blog' },
                  { label: 'Case Studies', path: '/case-studies' },
                  { label: 'Expert Team', path: '/team' },
                  { label: 'Privacy Policy', path: '/privacy' }
                ].map((item) => (
                  <li key={item.label} className="whitespace-nowrap">
                    <Link to={item.path} className="text-gray-500 hover:text-brand-primary transition-colors text-base font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 font-sans">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative group">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all pr-14"
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-primary transition-colors hover:text-brand-primary disabled:opacity-50"
                >
                  {status === 'loading' ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </form>
              {message && (
                <p className={`mt-3 text-xs font-bold ${status === 'success' ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                  {status === 'success' && <CheckCircle2 size={14} className="mr-1" />}
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Socials */}
          <div className="flex items-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=61573635059456" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-primary transition-all duration-300 transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/devwavebd" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-primary transition-all duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/8801351984261" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-brand-primary transition-all duration-300 transform hover:scale-110">
              <MessageCircle size={24} />
            </a>
            <a href="mailto:devwavebd@gmail.com" className="text-gray-500 hover:text-brand-primary transition-all duration-300 transform hover:scale-110">
              <Send size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm font-medium tracking-tight text-center md:text-right pb-[100px] md:pb-0">
            © {new Date().getFullYear()} Devwarebd. All Rights Reserved. <span className="text-gray-600 ml-1">Designed & Developed by RARA Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
