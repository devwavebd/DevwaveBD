import { motion } from 'motion/react';
import { TRUSTED_LOGOS } from '../../constants';

export default function TrustedBy() {
  return (
    <section className="py-8 md:py-12 border-y border-white/5 bg-brand-bg/50" id="trusted-by">
      <div className="custom-container">
        <p className="text-center text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] mb-8 md:mb-10">
          Trusted by 50+ businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-20 opacity-30 md:opacity-40 hover:opacity-100 transition-all duration-700">
          {TRUSTED_LOGOS.map((logo, index) => (
            <div key={index} className="text-lg md:text-2xl font-black text-white font-sans tracking-tighter">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
