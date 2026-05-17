import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
      } else {
        setFormState('error');
        setErrorMessage(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <div id="contact-page">
      <SEO 
        title="Contact Us" 
        description="Ready to start your WordPress project? Contact DevWave BD for expert development, speed optimization, and premium support. We're here to help."
      />
      <PageHeader 
        title="Get in Touch" 
        subtitle="Ready to start your project? Fill out the form and our expert team will get back to you within 24 hours."
        breadcrumb="CONTACT US"
      />

      <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2" />

        <div className="custom-container">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
            {/* Contact Info */}
            <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">We'd Love to Hear From You</h2>
              <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0">Whether you're starting a new brand or optimizing an existing one, we're here to help.</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 text-left">
                {[
                  { icon: Mail, label: 'Email Us', val: 'devwavebd@gmail.com', color: 'bg-blue-500/10 text-blue-400' },
                  { icon: Phone, label: 'Call Us', val: '+880 1351-984261', color: 'bg-green-500/10 text-green-400' },
                  { icon: MapPin, label: 'Visit Us', val: 'Dhaka, Bangladesh', color: 'bg-purple-500/10 text-purple-400' },
                  { icon: Clock, label: 'Hours', val: '9 AM - 6 PM (Mon-Sat)', color: 'bg-orange-500/10 text-orange-400' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${item.color} border border-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon size={20} className="md:size-[24px]" />
                    </div>
                    <div className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-gray-500 mb-1">{item.label}</div>
                    <div className="text-sm md:text-lg font-bold text-white break-words">{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Social Connect */}
              <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row items-center gap-4 md:space-x-6">
                <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Connect:</span>
                <div className="flex space-x-4">
                  <a href="https://wa.me/8801351984261" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <MessageCircle size={18} className="md:size-[20px]" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573635059456" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all">
                    <Send size={18} className="md:size-[20px]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1 w-full max-w-2xl mx-auto lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white/10 relative backdrop-blur-xl"
              >
                {formState === 'success' ? (
                  <div className="py-12 md:py-20 text-center space-y-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 animate-bounce">
                      <CheckCircle2 size={32} className="md:size-[40px]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm md:text-base text-gray-400">Thank you for reaching out. Our team will contact you very soon.</p>
                    <button onClick={() => setFormState('idle')} className="text-brand-primary font-bold underline text-sm">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6 text-left">
                    {formState === 'error' && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold">
                        {errorMessage}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 ml-1">Full Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-sm md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-brand-primary transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-bold text-gray-400 ml-1">Email Address</label>
                        <input name="email" required type="email" placeholder="john@example.com" className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-sm md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-brand-primary transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-400 ml-1">Project Type</label>
                      <select name="projectType" required className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-sm md:text-base text-white focus:outline-none focus:bg-brand-bg focus:ring-2 focus:ring-brand-primary transition-all appearance-none cursor-pointer">
                        <option className="bg-brand-bg">WordPress Development</option>
                        <option className="bg-brand-bg">WooCommerce Store</option>
                        <option className="bg-brand-bg">Design & UI/UX</option>
                        <option className="bg-brand-bg">Optimization & SEO</option>
                        <option className="bg-brand-bg">Maintenance & Support</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-gray-400 ml-1">Your Message</label>
                      <textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-sm md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:bg-white/10 focus:ring-2 focus:ring-brand-primary transition-all"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={formState === 'sending'}
                      className="w-full py-4 md:py-5 rounded-full bg-brand-primary text-white font-black shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 group"
                    >
                      {formState === 'sending' ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="text-xs md:text-sm uppercase tracking-widest">Submit Message</span>
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Helpline Section */}
      <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden border-t border-white/5">
        <div className="custom-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter italic">
              Emergency <span className="text-brand-primary">Helpline</span>
            </h2>
            <p className="text-gray-400 font-bold max-w-xl mx-auto">Instant support across these locations. We're here when you need us most.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { city: 'Dhaka', icon: MapPin, phone: '+8801537-274668', color: 'from-blue-500/20' },
              { city: 'Barishal', icon: MapPin, phone: '+880 1731-389828', color: 'from-green-500/20' },
              { city: 'Faridpur', icon: MapPin, phone: '+880 1309-880436', color: 'from-purple-500/20' },
              { city: 'Dinajpur', icon: MapPin, phone: '+880 1351-984261', color: 'from-orange-500/20' }
            ].map((item, i) => (
              <div key={i} className={`group bg-gradient-to-br ${item.color} to-transparent border border-white/5 p-8 rounded-[2rem] hover:border-brand-primary/30 transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-xl font-black text-white tracking-tight italic uppercase">{item.city}</h4>
                </div>
                <a 
                  href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`} 
                  className="block text-lg font-bold text-gray-300 group-hover:text-brand-primary transition-colors"
                >
                  {item.phone}
                </a>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-2 group-hover:text-gray-400 transition-colors">Call Representative</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section Placement */}
      <section className="h-[300px] md:h-[400px] bg-brand-bg relative grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-1000 opacity-50 hover:opacity-100">
        <iframe 
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.8318788448!2d90.33728800473!3d23.78088745674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-brand-bg border-t border-white/5">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-gray-400 text-sm md:text-base">Everything you need to know about working with us.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'How do I get a free quote?', a: 'Simply fill out the form above or call us directly. We provide custom quotes based on project complexity.' },
              { q: 'What is your working process?', a: 'We follow a systematic 4-step process: Strategy, Design, Development, and Launch.' },
              { q: 'Do you offer white-label services?', a: 'Yes, we partner with agencies worldwide to provide expert WordPress development support.' }
            ].map((faq, i) => (
              <div key={i} className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 shadow-sm">
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
