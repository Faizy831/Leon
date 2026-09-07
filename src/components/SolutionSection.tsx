"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, FileDown, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SpotlightCard from "./ui/SpotlightCard";

export default function SolutionSection() {
  const { content } = useLanguage();
  const { solutionSection } = content;

  return (
    <section className="relative py-32 bg-[#071c2e] overflow-hidden" id="solution">
      <div className="max-w-[900px] mx-auto px-8 relative z-10">
        <SpotlightCard
          spotlightColor="rgba(236, 99, 77, 0.12)"
          className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl p-8 md:p-16 text-center"
        >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-leon-orange" />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-leon-orange font-bold">
              {solutionSection.eyebrow}
            </p>
            <span className="w-8 h-px bg-leon-orange" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-12">
            {solutionSection.heading}
          </h2>

          <ul className="inline-flex flex-col items-start gap-4 mb-14 text-left">
            {solutionSection.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex items-start gap-3 text-gray-300 font-body text-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-leon-orange shrink-0 mt-0.5" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              href={solutionSection.downloadButton.href}
              className="inline-flex items-center gap-3 border border-white/20 text-white hover:text-leon-orange font-semibold px-8 py-4 rounded-xl transition-all hover:border-leon-orange/40 hover:bg-white/10 shadow-sm bg-white/5 backdrop-blur-sm"
            >
              <FileDown className="w-4 h-4" />
              {solutionSection.downloadButton.label}
            </Link>
          </div>

          <div className="pt-14 border-t border-white/10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              {solutionSection.ctaHeading}
            </h3>
            <Link
              href={solutionSection.ctaButton.href}
              className="group inline-flex items-center gap-3 bg-leon-orange text-white font-bold px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              {solutionSection.ctaButton.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
        </SpotlightCard>
      </div>
    </section>
  );
}
