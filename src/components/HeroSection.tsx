"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      style={{ background: 'radial-gradient(120% 140% at 15% -10%, #123f66 0%, var(--color-gray-950) 55%)' }}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-leon-orange/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1180px] w-full mx-auto px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-white rounded-[32px] sm:rounded-[44px] shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-white/30 p-8 sm:p-12 md:p-14 text-center flex flex-col items-center overflow-hidden relative"
        >
          {/* Top Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-[220px] h-[92px] sm:w-[280px] sm:h-[117px] relative mb-2"
          >
            <Image
              src="/LEON_logo_color.png"
              alt="LÉON Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Subtitle / Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-leon-orange font-display font-semibold text-lg sm:text-xl tracking-wide mb-6 sm:mb-8"
          >
            {hero.tagline}
          </motion.p>

          {/* Trolley Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-[640px] sm:max-w-[760px] aspect-[3/2] mx-auto mb-8 sm:mb-10 flex items-center justify-center group"
          >
            <Image
              src="/leon-trolley-three-quarter.jpg"
              alt="LÉON Portable Railway Measurement Trolley"
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              style={{
                filter: "brightness(1.08) contrast(1.03) saturate(0.6)",
                maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              }}
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>

          {/* Bottom Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-leon-orange font-display font-bold text-lg sm:text-2xl md:text-4xl uppercase tracking-[0.1em] sm:tracking-[0.15em]">
              {hero.eyebrow}
            </p>
            <h1 className="text-gray-900 font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.15] uppercase tracking-tight">
              {hero.headingPart1}
              <br />
              {hero.headingPart2}
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
