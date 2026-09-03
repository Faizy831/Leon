"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SpotlightCard from "./ui/SpotlightCard";

export default function ValueProposition() {
  const { content } = useLanguage();
  const { valueSection } = content;

  return (
    <section className="relative py-32 bg-[#071c2e] border-t border-white/10 overflow-hidden" id="value">
      {/* Decorative ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-amber-500" />
            <p className="font-mono text-sm tracking-widest uppercase text-amber-600 font-bold">
              {valueSection.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-6 font-bold">
            {valueSection.heading}
          </h2>
          <p className="text-lg text-gray-300 font-body font-medium">
            {valueSection.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-8 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {valueSection.values.map((val, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full"
            >
              <SpotlightCard className="h-full relative group bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] rounded-[24px] p-8 md:p-10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1">
                <div className="mb-8 relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-mono text-base font-bold group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {val.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-colors relative z-10">
                  {val.title}
                </h3>
                <p className="text-gray-300 font-medium leading-relaxed transition-colors relative z-10">
                  {val.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
