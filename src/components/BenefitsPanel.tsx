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
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
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
          className="max-w-2xl mx-auto mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-leon-orange" />
            <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
              {benefitsSection.eyebrow}
            </p>
            <div className="w-12 h-px bg-leon-orange" />
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

        {/* Video Player at the end of Why choose LÉON? section */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20 w-full max-w-4xl mx-auto rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 bg-[#071c2e] relative"
        >
          <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none z-10" />
          <video
            src="/video-leon-web.mp4"
            controls
            playsInline
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Action Buttons below Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Link
            href={content.hero.primaryButton.href}
            className="group relative inline-flex items-center gap-3 bg-leon-orange text-white font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)]"
          >
            <span className="relative z-10">{content.hero.primaryButton.label}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          <Link
            href={content.hero.secondaryButton.href}
            className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-sm backdrop-blur-md"
          >
            {content.hero.secondaryButton.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
