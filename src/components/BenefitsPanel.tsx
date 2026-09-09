"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Package,
  Bluetooth,
  Clock,
  ShieldCheck,
  Tag,
  Smartphone,
  HardHat,
  Handshake,
  Wrench,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SpotlightCard from "./ui/SpotlightCard";

const icons = [
  Layers,
  Package,
  Bluetooth,
  Clock,
  ShieldCheck,
  Tag,
  Smartphone,
  HardHat,
  Handshake,
  Wrench,
];

export default function BenefitsPanel() {
  const { content } = useLanguage();
  const { benefitsSection } = content;

  return (
    <section
      className="relative py-32 bg-[#051625] border-t border-white/10 overflow-hidden"
      id="benefits"
    >
      {/* Crisp brand hairline along the top edge — no blur */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leon-orange/50 to-transparent pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-leon-orange" />
            <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
              {benefitsSection.eyebrow}
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white font-bold">
            {benefitsSection.heading}
          </h2>
        </motion.div>

        {/* Benefit rows — two columns of wide cards so every title fits one line */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {benefitsSection.benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(236, 99, 77, 0.15)"
                  className="group h-full flex items-start gap-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] rounded-[24px] p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1"
                >
                  <div className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-leon-orange/10 border border-leon-orange/30 text-leon-orange group-hover:scale-110 group-hover:bg-leon-orange group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                    <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
                  </div>

                  <div className="relative z-10 min-w-0">
                    <h3 className="font-display text-[19px] font-bold text-white leading-snug mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-[14.5px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
