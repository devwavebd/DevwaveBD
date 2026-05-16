import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-brand-bg border-b border-white/5 relative overflow-hidden" id="page-header">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[120px] -z-0" />
      
      <div className="custom-container relative z-10 text-center">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 md:mb-6"
          >
            {breadcrumb}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-5"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
    </section>
  );
}
