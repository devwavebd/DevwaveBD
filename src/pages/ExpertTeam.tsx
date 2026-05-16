import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';
import { motion } from 'motion/react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const TEAM = [
  { 
    name: 'Ahnaf Akif', 
    role: 'WP Security', 
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-11.41.31-PM.jpeg',
    bio: 'Specializing in WordPress security hardening, malware removal, and proactive threat prevention.'
  },
  { 
    name: 'Rayhan Rana', 
    role: 'Project Manager', 
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/Gemini_Generated_Image_7ih3af7ih3af7ih3.png',
    bio: 'Ensuring seamless project delivery and coordination between our technical team and stakeholders.'
  },
  { 
    name: 'STR Robin', 
    role: 'AI Specialist', 
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/ChatGPT-Image-May-16-2026-11_58_50-PM.png',
    bio: 'Leveraging cutting-edge AI technologies to automate workflows and enhance digital capabilities.'
  },
  { 
    name: 'MD Ayan Alam', 
    role: 'WooCommerce Expert', 
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-8.56.04-PM.jpeg',
    bio: 'Crafting powerful, scalable eCommerce experiences with high-performance WooCommerce solutions.'
  },
  { 
    name: 'MD Anas', 
    role: 'Speed Optimizer', 
    image: 'https://dev-devwavebdmedialibrary.pantheonsite.io/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-16-at-10.56.27-PM.jpeg',
    bio: 'Passionate about web performance, reducing latency, and delivering lightning-fast load times.'
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
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Social Overlay - Shows on Hover without color change to main image */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8 bg-black/0 transition-colors duration-500 group-hover:bg-black/5">
                    <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      {[Linkedin, Twitter, Github].map((Icon, i) => (
                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white backdrop-blur-md flex items-center justify-center text-brand-bg hover:bg-brand-primary hover:text-white transition-all shadow-lg">
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
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
