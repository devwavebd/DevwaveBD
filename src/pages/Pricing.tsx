import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Building2, ShoppingCart } from 'lucide-react';
import CTA from '../components/home/CTA';

const PACKAGES = [
  {
    name: 'Starter Package',
    icon: Zap,
    price: '$499',
    description: 'Perfect for small businesses and personal brands looking to launch fast.',
    features: ['5 Page Website', 'Modern UI Design', 'Basic SEO Setup', 'Mobile Responsive', '1 Month Support', 'Free Installation'],
    highlight: false,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    name: 'Business Package',
    icon: Building2,
    price: '$999',
    description: 'Advanced solution for growing companies needing a scalable digital identity.',
    features: ['Unlimited Pages', 'Premium Custom Design', 'Advanced SEO & Schema', 'Content Loading', 'Speed Optimization', '3 Months Support', 'Training Session'],
    highlight: true,
    color: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'eCommerce Package',
    icon: ShoppingCart,
    price: '$1,499',
    description: 'Complete online store build with WooCommerce and payment integrations.',
    features: ['Full Online Store', 'WooCommerce Setup', 'Premium Product Filter', 'Payment Integration', 'Tax & Shipping Setup', 'Security Hardening', '6 Months Support'],
    highlight: false,
    color: 'from-purple-600 to-pink-600'
  }
];

export default function Pricing() {
  return (
    <div id="pricing-page">
      <PageHeader 
        title="Transparent Pricing" 
        subtitle="No hidden costs. Simple, value-driven pricing structures for every business size."
        breadcrumb="INVESTMENT"
      />

      <section className="py-16 md:py-24 bg-brand-bg relative">
        <div className="custom-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 relative ${
                  pkg.highlight 
                    ? 'border-brand-primary shadow-2xl shadow-brand-primary/20 md:scale-105 z-10 bg-white/5 backdrop-blur-xl' 
                    : 'border-white/5 bg-white/5 hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/5'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-[9px] md:text-[10px] uppercase font-black tracking-widest px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center text-white mb-6 md:mb-8 shadow-lg`}>
                  <pkg.icon size={24} className="md:size-[28px]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">{pkg.description}</p>
                
                <div className="flex items-baseline mb-6 md:mb-8">
                  <span className="text-4xl md:text-5xl font-black text-white">{pkg.price}</span>
                  <span className="text-gray-500 font-bold ml-2 italic text-sm">/project</span>
                </div>

                <div className="grow space-y-4 mb-8 md:mb-10">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 text-center">
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-gray-400 font-medium text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 md:py-5 rounded-full font-black transition-all shadow-lg text-[11px] md:text-sm uppercase tracking-widest ${
                  pkg.highlight 
                    ? 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-brand-primary/20 hover:shadow-brand-primary/40' 
                    : 'bg-white/5 text-white border border-white/10 hover:border-brand-primary hover:text-brand-primary active:scale-95'
                }`}>
                  Choose {pkg.name.split(' ')[0]}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
