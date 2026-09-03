"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
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
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white font-bold mb-6">
            {benefitsSection.heading}
          </h2>
          <p className="text-lg text-gray-300 font-body font-medium">
            {benefitsSection.tagline}
          </p>
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
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-[19px] font-bold text-white leading-snug">
                        {benefit.title}
                      </h3>
                      <span className="ml-auto shrink-0 font-mono text-[11px] font-bold tracking-widest text-white/25 group-hover:text-leon-orange/70 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="font-body text-[14.5px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA band */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-[28px] border border-white/10 bg-gradient-to-r from-leon-orange/[0.12] via-white/[0.04] to-transparent p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <p className="max-w-2xl font-body text-lg font-medium text-white leading-relaxed">
            {benefitsSection.footerMessagePart1}
            <span className="font-bold text-leon-orange">
              {benefitsSection.footerMessageHighlight}
            </span>
            {benefitsSection.footerMessagePart2}
          </p>

          <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
            <Link
              href={benefitsSection.footerButton.href}
              className="group inline-flex items-center gap-3 rounded-xl bg-leon-orange text-white font-bold px-8 py-4 shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              {benefitsSection.footerButton.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="font-body text-sm text-gray-400">
              {benefitsSection.footerButtonNote}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
