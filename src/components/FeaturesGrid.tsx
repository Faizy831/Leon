"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Clock, MapPin, Download, Ruler, Smartphone, Box, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

export default function FeaturesGrid() {
  const { content } = useLanguage();
  const { featuresSection, hero } = content;
  const icons = [Clock, MapPin, Download, Ruler, Smartphone, Box];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + hero.gallery.length) % hero.gallery.length);
  }, [lightboxIndex, hero.gallery.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % hero.gallery.length);
  }, [lightboxIndex, hero.gallery.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

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

        {/* Feature Cards */}
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
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(236,99,77,0.15)] group-hover:scale-110 transition-all duration-500" style={{ color: '#ec634d', backgroundColor: 'rgba(236,99,77,0.10)' }}>
                    <Icon className="w-6 h-6" />
                  </div>
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

        {/* Gallery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20"
        >
          <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-6 font-bold text-center">
            LÉON in the field
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {hero.gallery.map((shot, index) => (
              <motion.button
                key={shot.src}
                onClick={() => openLightbox(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ec634d]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 30vw"
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#051625]/0 group-hover:bg-[#051625]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[90vw] max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={hero.gallery[lightboxIndex].src}
                alt={hero.gallery[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain p-6"
                priority
              />
            </motion.div>

            {/* Caption + dots */}
            <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-3 z-10">
              <p className="text-white/70 text-sm font-medium text-center px-8 max-w-lg">
                {hero.gallery[lightboxIndex].alt}
              </p>
              <div className="flex gap-2">
                {hero.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
