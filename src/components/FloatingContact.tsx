import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Facebook, Instagram, Phone as WhatsApp, Loader2, CheckCircle2 } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      projectType: 'Floating Widget',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        setTimeout(() => {
          setFormState('idle');
          setIsOpen(false);
        }, 3000);
      } else {
        setFormState('error');
        setErrorMessage(result.error || 'Something went wrong.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <>
      {/* Backdrop for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] md:hidden"
          />
        )}
      </AnimatePresence>

      <div className="fixed right-0 top-[25%] z-[9999] transition-all duration-300 md:top-[15%]" id="floating-contact-widget">
        {/* Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-brand-primary text-white p-3 md:p-4 rounded-l-2xl shadow-2xl hover:bg-brand-primary/90 transition-all flex items-center justify-center group relative z-[51]"
          aria-label="Contact Us"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />}
        </button>

        {/* Popup Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
              }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:absolute md:inset-auto md:right-full md:top-0 md:mr-4 md:translate-y-0 bg-brand-bg/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-auto md:w-[380px] overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 bg-white/5 sticky top-0 z-10 backdrop-blur-md">
                <h3 className="text-xl font-black text-white mb-1 uppercase italic tracking-tighter">Quick Contact</h3>
                <p className="text-gray-400 text-xs font-bold">Reach out to our experts instantly.</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {formState === 'success' ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-black text-white uppercase italic">Message Sent!</h4>
                    <p className="text-gray-400 text-sm font-bold">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                      {formState === 'error' && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold">
                          {errorMessage}
                        </div>
                      )}
                      <input 
                        name="name" 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-bold"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input 
                          name="email" 
                          type="email" 
                          placeholder="Email" 
                          required 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-bold"
                        />
                        <input 
                          name="phone" 
                          type="tel" 
                          placeholder="Phone Number" 
                          required 
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all font-bold"
                        />
                      </div>
                      <textarea 
                        name="message" 
                        rows={3} 
                        placeholder="How can we help?" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all resize-none font-bold"
                      ></textarea>
                      <button 
                        type="submit"
                        disabled={formState === 'sending'}
                        className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-black uppercase text-sm italic py-4 rounded-xl transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center space-x-2 disabled:opacity-50"
                      >
                        {formState === 'sending' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Submit Request</span>
                          </>
                        )}
                      </button>
                    </form>

                    {/* Social Links */}
                    <div className="space-y-4">
                      <p className="text-gray-600 text-[10px] font-black tracking-[0.2em] uppercase text-center mb-4">Connect Instantly</p>
                      <div className="grid grid-cols-3 gap-3">
                        <a 
                          href="https://wa.me/8801351984261" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#25D366]/5 text-[#25D366] border border-[#25D366]/10 hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                        >
                          <WhatsApp size={22} className="mb-2" />
                          <span className="text-[10px] font-black uppercase">WhatsApp</span>
                        </a>
                        <a 
                          href="https://www.facebook.com/profile.php?id=61573635059456" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#1877F2]/5 text-[#1877F2] border border-[#1877F2]/10 hover:bg-[#1877F2] hover:text-white transition-all duration-300 group"
                        >
                          <Facebook size={22} className="mb-2" />
                          <span className="text-[10px] font-black uppercase">Facebook</span>
                        </a>
                        <a 
                          href="https://www.instagram.com/devwavebd" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#E4405F]/5 text-[#E4405F] border border-[#E4405F]/10 hover:bg-[#E4405F] hover:text-white transition-all duration-300 group"
                        >
                          <Instagram size={22} className="mb-2" />
                          <span className="text-[10px] font-black uppercase">Instagram</span>
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
