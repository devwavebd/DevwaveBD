import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, HelpCircle, Clock, Zap, Shield, Search, Layers } from 'lucide-react';
import CTA from '../components/home/CTA';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICES.find(s => s.id === serviceId) as any;

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <Link to="/services" className="text-indigo-600 mt-4 block underline">Back to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div id={`service-${service.id}`}>
      <PageHeader 
        title={service.title} 
        subtitle={service.description}
        breadcrumb="SERVICE DETAILS"
      />

      {/* Overview Section with Benefits */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

        <div className="custom-container">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10 group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -right-8 p-8 rounded-3xl bg-brand-primary shadow-2xl border border-white/20 hidden md:block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Zap className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 uppercase font-black">Performance</p>
                      <p className="text-2xl font-black text-white leading-none">A+ Grade</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 lg:order-1">
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                Crafting Excellence <br />
                <span className="text-gray-500">In {service.title}</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 mt-1 group-hover:bg-brand-primary transition-colors">
                      <CheckCircle className="text-brand-primary w-4 h-4 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-300 font-bold leading-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 bg-white/5 border-t border-b border-white/5">
        <div className="custom-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter">Key Technology Features</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature: string, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{feature}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We implement {feature.toLowerCase()} using industry standard protocols to ensure your site remains scalable and secure.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Process Section */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="custom-container">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 block">Workflow</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">Our Systematic Roadmap</h2>
            </div>
            <p className="text-gray-500 lg:max-w-sm font-medium">Transparent and milestone-driven execution for every single project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {service.processSteps.map((step: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-white/10 -z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-primary transition-all group-hover:bg-brand-primary/10 backdrop-blur-sm">
                    <span className="text-3xl font-black text-gray-700 group-hover:text-brand-primary transition-colors">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white/5 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-4 block">Clear Answers</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter">Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'How long does this take?', a: 'Typical timelines range from 2 to 6 weeks depending on requirements.' },
              { q: 'Will I be able to edit content?', a: 'Yes! We build with ease of use in mind, so you can manage your site easily.' },
              { q: 'Is support included?', a: 'We offer 24/7 technical support and maintenance packages for peace of mind.' }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[2.5rem] bg-brand-bg border border-white/5 group hover:border-brand-primary/30 transition-all"
              >
                <div className="flex items-center space-x-5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <HelpCircle size={22} />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{faq.q}</h4>
                </div>
                <p className="text-gray-400 leading-relaxed pl-15 font-medium">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
