import PageHeader from '../components/PageHeader';
import CTA from '../components/home/CTA';
import { motion } from 'motion/react';
import { ArrowRight, Code, Zap, Target } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: 'E-commerce Performance Boost',
    client: 'Luxe Arabian Scents',
    result: '140% Speed Increase',
    description: 'We optimized a heavy WooCommerce store, reducing load time from 8s to 1.5s, resulting in a significant boost in mobile conversions.',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    title: 'Custom LMS Development',
    client: 'Rifat Academy',
    result: '50k+ Active Students',
    description: 'Built a custom Learning Management System on WordPress with specialized tracking features and automated certification.',
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Global Brand Identity',
    client: 'The Nzone',
    result: 'Global Expansion',
    description: 'Created a high-converting corporate presence that establishes authority and supports their worldwide scaling efforts.',
    icon: Target,
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10'
  }
];

export default function CaseStudies() {
  return (
    <div id="case-studies-page">
      <PageHeader 
        title="Case Studies" 
        subtitle="Real results for real businesses. See how we've helped our clients scale through performance-driven WordPress development."
        breadcrumb="SUCCESS STORIES"
      />

      <section className="py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${study.bg} ${study.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <study.icon size={28} />
                </div>
                
                <div className="mb-6">
                  <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase mb-2 block">{study.client}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">{study.title}</h3>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold mb-4">
                    Result: {study.result}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {study.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <button className="flex items-center text-white font-bold text-sm tracking-widest uppercase group-hover:text-brand-primary transition-colors">
                    Read Full Story <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
