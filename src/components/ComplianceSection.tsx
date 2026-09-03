"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SpotlightCard from "./ui/SpotlightCard";

export default function ComplianceSection() {
  const { content } = useLanguage();
  const { complianceSection } = content;

  return (
    <section className="py-32 bg-transparent relative overflow-hidden" id="standard">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SpotlightCard className="relative group rounded-3xl bg-white/70 backdrop-blur-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.05)] p-12 md:p-16 overflow-hidden transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-12 justify-between relative z-10">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-amber-500" />
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-amber-600 font-bold">
                  {complianceSection.eyebrow}
                </p>
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase leading-[1.1] text-gray-900 font-bold mb-6">
                {complianceSection.heading}
              </h3>
              <p className="text-gray-600 font-medium text-lg leading-relaxed">
                {complianceSection.description}
              </p>
            </div>
            
            {/* Pristine White Badge */}
            <div className="relative shrink-0 transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-amber-500 blur-[30px] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative w-40 h-40 rounded-full border border-gray-200 bg-white flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.05),inset_0_-4px_10px_rgba(0,0,0,0.02)] group-hover:border-amber-300 transition-colors duration-500">
                <b className="text-4xl font-display text-gray-900">
                  {complianceSection.badgeTop}
                </b>
                <span className="text-xs tracking-widest text-gray-500 mt-1 font-mono font-bold">
                  {complianceSection.badgeBottom}
                </span>
              </div>
            </div>
          </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
