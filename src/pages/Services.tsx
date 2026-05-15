import PageHeader from '../components/PageHeader';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import CTA from '../components/home/CTA';

export default function Services() {
  return (
    <div id="services-page">
      <PageHeader 
        title="Our Specialized Services" 
        subtitle="Comprehensive WordPress solutions tailored to your unique business needs. From development to digital growth."
        breadcrumb="WHAT WE DO"
      />

      <section className="py-24 bg-brand-bg">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row gap-8 p-10 rounded-[3rem] bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all duration-500"
                >
                  <div className="w-20 h-20 rounded-3xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
                    <Icon size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {service.description} We use the latest technologies and best practices to ensure your website is modern, secure, and infinitely scalable.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {['Fast Delivery', 'Modern Design', 'SEO Ready', '24/7 Support'].map((item, i) => (
                        <li key={i} className="flex items-center text-sm font-bold text-gray-500">
                          <Check size={14} className="mr-2 text-brand-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.link}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-brand-primary hover:border-brand-primary transition-all group"
                    >
                      Detailed Service Info
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
