import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const TEAM = [
  { 
    name: 'Ariful Islam', 
    role: 'Lead WordPress Architect', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop',
    bio: 'Specializing in high-performance WordPress engines and scalable architecture with over 10 years of experience.'
  },
  { 
    name: 'Sarah Ahmed', 
    role: 'Senior UI/UX Designer', 
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2344&auto=format&fit=crop',
    bio: 'Crafting premium digital experiences that blend aesthetics with technical precision.'
  },
  { 
    name: 'John Doe', 
    role: 'Speed Optimization Expert', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop',
    bio: 'Passionate about web performance, reducing latency, and delivering lightning-fast load times.'
  },
  { 
    name: 'Jane Smith', 
    role: 'Head of Support', 
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop',
    bio: 'Ensuring every client has a seamless experience through proactive maintenance and expert guidance.'
  },
  { 
    name: 'Mikail Hossain', 
    role: 'Full Stack Developer', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop',
    bio: 'Expert in bridging backend logic with seamless frontend interactions in complex ecosystems.'
  },
  { 
    name: 'Amina Khatun', 
    role: 'SEO Strategist', 
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2340&auto=format&fit=crop',
    bio: 'Helping brands dominate search results through data-driven technical SEO and content strategy.'
  }
];

export default function ExpertTeam() {
  return (
    <div id="expert-team-page">
      <PageHeader 
        title="Our Expert Team" 
        subtitle="Meet the specialized professionals dedicated to crafting your high-performance digital presence."
        breadcrumb="THE HUMANS BEHIND THE CODE"
      />

      <section className="py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group text-center lg:text-left"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {[Linkedin, Twitter, Github].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary transition-colors">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
