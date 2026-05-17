import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { motion } from 'motion/react';
import { Target, Eye, Users, Trophy, Linkedin, Twitter, Github } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page">
      <PageHeader 
        title="About Devwave BD" 
        subtitle="We are a WordPress-focused digital agency on a mission to build websites that drive growth and deliver real impact."
        breadcrumb="OUR STORY"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2340&auto=format&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-sans leading-tight">Empowering Businesses with Scalable Tech</h2>
              <p className="text-gray-400 text-sm md:text-lg mb-8 leading-relaxed">
                Founded with the vision of bridging the gap between design and high-end performance, Devwave BD has grown into a specialized WordPress agency. We don't just "install themes" — we craft unique, highly optimized digital engines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                    <Target size={20} className="md:size-[24px]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-500 text-xs md:text-sm">To provide world-class WordPress solutions that prioritize performance, security, and ROI.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner text-left">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 mb-4">
                    <Eye size={20} className="md:size-[24px]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-500 text-xs md:text-sm">To be the most trusted global partner for WordPress development and maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Team Section Placeholder */}
      <section className="py-16 md:py-24 bg-brand-bg border-t border-white/5">
        <div className="custom-container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">Meet the Experts</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">The humans behind the high-performance WordPress code.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { name: 'Ahnaf Akif', role: 'WP Security', image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-11.41.31-PM.jpeg' },
              { name: 'Rayhan Rana', role: 'Project Manager', image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Gemini_Generated_Image_7ih3af7ih3af7ih3.png' },
              { name: 'STR Robin', role: 'AI Specialist', image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/ChatGPT-Image-May-16-2026-11_58_50-PM.png' },
              { name: 'MD Ayan Alam', role: 'WooCommerce Expert', image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-8.56.04-PM.jpeg' },
              { name: 'MD Anas', role: 'Speed Optimizer', image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-10.56.27-PM.jpeg' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-default"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 shadow-2xl shadow-brand-primary/5 relative bg-white/[0.02]">
                  {/* Loading Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Social hover info */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/5">
                    <div className="flex items-center space-x-2 md:space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {[Linkedin, Twitter, Github].map((Icon, i) => (
                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-brand-bg hover:bg-brand-primary hover:text-white transition-all shadow-lg cursor-pointer">
                          <Icon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="text-sm md:text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-brand-primary font-medium text-[10px] md:text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
