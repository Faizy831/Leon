"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;

  // Highlight the last word of the second heading line in brand orange,
  // tying it back to the eyebrow/logo accent color.
  const headingWords = hero.headingPart2.split(" ");
  const headingLastWord = headingWords.pop();
  const headingRest = headingWords.join(" ");

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
          className="w-full bg-white rounded-[32px] sm:rounded-[44px] shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-white/30 p-8 sm:p-12 md:p-16 overflow-hidden relative"
        >
          {/* Subtle texture, matching the dot-grid treatment used elsewhere on the site */}
          <div className="absolute inset-0 bg-[radial-gradient(#e8ecef_1px,transparent_1px)] [background-size:22px_22px] opacity-70 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: brand + headline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-[200px] h-[84px] sm:w-[240px] sm:h-[100px] relative mb-2"
              >
                <Image
                  src="/LEON_logo_color.png"
                  alt="LÉON Logo"
                  fill
                  className="object-contain object-center md:object-left"
                  priority
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-leon-orange font-display font-semibold text-sm sm:text-base tracking-wide mb-8 sm:mb-10"
              >
                {hero.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                  <span className="hidden sm:block w-8 h-px bg-leon-orange shrink-0" />
                  <p className="text-leon-orange font-mono font-bold text-base sm:text-xl md:text-2xl uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                    {hero.eyebrow}
                  </p>
                </div>
                <h1 className="text-[#071c2e] font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.15] uppercase tracking-tight">
                  {hero.headingPart1}
                  <br />
                  {headingRest ? `${headingRest} ` : ""}
                  <span className="text-leon-orange">{headingLastWord}</span>
                </h1>
              </motion.div>
            </div>

            {/* Right: product photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative w-full aspect-[3/2] flex items-center justify-center group"
            >
              <Image
                src="/leon-trolley-45-degree.jpg"
                alt="LÉON Portable Railway Measurement Trolley"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                style={{
                  filter: "brightness(1.08) contrast(1.03)",
                  maskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                }}
                priority
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
