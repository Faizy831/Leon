"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Download } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

export default function CallToAction() {
  const { content } = useLanguage();
  const { ctaSection } = content;
  
  return (
    <section className="relative py-32 bg-[#071c2e] overflow-hidden" id="contact">
      <div className="max-w-[1180px] mx-auto px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SpotlightCard className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl p-8 md:p-16 lg:p-24 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-amber-500/10 to-transparent pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display uppercase leading-[1.1] text-white tracking-tight break-words hyphens-auto">
            {ctaSection.headlinePart1} <span className="text-amber-500">{ctaSection.highlightWord}</span>
            {ctaSection.headlinePart2 && (
              <>
                <br />
                {ctaSection.headlinePart2}
              </>
            )}
          </h2>
          
          <p className="relative z-10 text-gray-300 font-medium max-w-[480px] mx-auto mb-12 text-lg leading-relaxed font-body">
            {ctaSection.description}
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={ctaSection.primaryButton.href} 
              className="group relative inline-flex items-center gap-3 bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(248,175,65,0.2)]"
            >
              <span className="relative z-10">{ctaSection.primaryButton.label}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href={ctaSection.secondaryButton.href} 
              className="inline-flex items-center gap-3 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:border-white/40 hover:bg-white/10 shadow-sm bg-white/5 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              {ctaSection.secondaryButton.label}
            </Link>
          </div>
        </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
