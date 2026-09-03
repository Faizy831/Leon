"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section 
      className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden pt-24 pb-20 md:pb-12"
      style={{ background: 'radial-gradient(120% 140% at 15% -10%, #123f66 0%, var(--color-gray-950) 55%)' }}
    >

      <div className="max-w-[1180px] w-full mx-auto px-8 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/LEON_logo_white.png"
            alt="LÉON Logo"
            width={180}
            height={75}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] mb-8"
        >
          <Image
            src="/symbol_white_LEON.png"
            alt=""
            width={15}
            height={20}
            className="object-contain shrink-0"
          />
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-white font-bold text-center">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[clamp(28px,5vw,64px)] font-bold uppercase font-display leading-[1.08] tracking-tight mb-12 text-white text-balance max-w-[900px] mx-auto"
        >
          <span className="text-leon-orange">
            {hero.headlinePart1}
          </span>{" "}
          <span className="text-white">
            {hero.headlinePart2}
          </span>{" "}
          <span className="text-white">
            {hero.highlightWord}
          </span>
        </motion.h1>


        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto mb-12 rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10 bg-[#051625] relative"
        >
          {/* Subtle reflection/glow on the video edge */}
          <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none z-10" />
          <video 
            src="/video-leon-web.mp4" 
            controls
            playsInline
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href={hero.primaryButton.href}
            className="group relative inline-flex items-center gap-3 bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(248,175,65,0.3)] hover:shadow-[0_15px_40px_rgba(248,175,65,0.4)]"
          >
            <span className="relative z-10">{hero.primaryButton.label}</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
          <Link
            href={hero.secondaryButton.href}
            className="inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:border-white/40 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 shadow-sm backdrop-blur-md"
          >
            {hero.secondaryButton.label}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:flex flex-col items-center gap-2 text-gray-400 mt-24"
        >
          <span className="font-mono text-xs uppercase tracking-widest font-bold">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
