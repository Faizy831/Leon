"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Clock, MapPin, Download, Ruler, Smartphone, Box } from "lucide-react";

export default function FeaturesGrid() {
  const { content } = useLanguage();
  const { featuresSection } = content;
  const icons = [Clock, MapPin, Download, Ruler, Smartphone, Box];

  return (
    <section className="pt-16 pb-24 md:py-32 relative bg-transparent overflow-hidden" id="features">
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-mono text-sm tracking-widest text-amber-600 uppercase mb-4 font-bold">
              {featuresSection.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-display uppercase tracking-tight text-gray-900 mb-6">
              {featuresSection.heading}
            </h2>
            <p className="text-lg text-gray-600 font-body font-medium">
              {featuresSection.subheading}
            </p>
          </motion.div>
        </div>

        {/* Premium Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresSection.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-3xl p-10 flex flex-col h-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 hover:bg-white"
              >
                {/* Premium Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex items-start justify-between mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-[20px] flex items-center justify-center bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border border-gray-100 text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full bg-[#051625]/5 text-gray-500 uppercase border border-gray-200/50 group-hover:bg-[#051625] group-hover:text-amber-500 group-hover:border-transparent transition-colors duration-300">
                    {feature.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 leading-tight relative z-10 min-h-[64px]">
                  {feature.title}
                </h3>
                
                <p className="font-body text-[15.5px] leading-relaxed text-gray-600 flex-1 relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
