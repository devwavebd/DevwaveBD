import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { motion } from 'motion/react';
import { Target, Eye, Users, Trophy } from 'lucide-react';

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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'Ariful Islam', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop' },
              { name: 'Sarah Ahmed', role: 'UI/UX Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2344&auto=format&fit=crop' },
              { name: 'John Doe', role: 'Full Stack Dev', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop' },
              { name: 'Jane Smith', role: 'Support Manager', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 shadow-2xl shadow-brand-primary/5">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <h4 className="text-sm md:text-xl font-bold text-white">{member.name}</h4>
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
