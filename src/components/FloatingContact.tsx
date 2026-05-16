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
    <div className="fixed right-0 top-[25%] z-[9999] transition-all duration-300 md:top-[15%]" id="floating-contact-widget">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-primary text-white p-3 md:p-4 rounded-l-2xl shadow-2xl hover:bg-brand-primary/90 transition-all flex items-center justify-center group"
        aria-label="Contact Us"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />}
      </button>

      {/* Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.9 }}
            className="absolute right-full top-0 mr-4 bg-brand-bg/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-[320px] md:w-[380px] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-white/5">
              <h3 className="text-xl font-bold text-white mb-1">Quick Contact</h3>
              <p className="text-gray-400 text-sm">Fill the form or reach out via social media.</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {formState === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-400 text-sm">We'll get back to you shortly.</p>
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input 
                        name="email" 
                        type="email" 
                        placeholder="Email" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                      />
                      <input 
                        name="phone" 
                        type="tel" 
                        placeholder="Phone Number" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all"
                      />
                    </div>
                    <textarea 
                      name="message" 
                      rows={3} 
                      placeholder="Your Message..." 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-primary transition-all resize-none"
                    ></textarea>
                    <button 
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {formState === 'sending' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase text-center">Connect Instantly</p>
                    <div className="grid grid-cols-3 gap-3">
                      <a 
                        href="https://wa.me/8801351984261" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                      >
                        <WhatsApp size={20} className="mb-1" />
                        <span className="text-[10px] font-bold">WhatsApp</span>
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61573635059456" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 group"
                      >
                        <Facebook size={20} className="mb-1" />
                        <span className="text-[10px] font-bold">Facebook</span>
                      </a>
                      <a 
                        href="https://www.instagram.com/devwavebd" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 group"
                      >
                        <Instagram size={20} className="mb-1" />
                        <span className="text-[10px] font-bold">Instagram</span>
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
  );
}
