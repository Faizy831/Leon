"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Handshake,
  HardHat,
  Tag,
  Wrench,
  Layers,
  ArrowRight,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApproachSection from "@/components/ApproachSection";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

const whyIcons = [Handshake, Smartphone, HardHat, Tag, Wrench, Layers];

export default function AboutPage() {
  const { content } = useLanguage();
  const { aboutPage } = content;

  return (
    <>
      <Navbar />
      <main className="relative bg-black">
        {/* Hero */}
        <section
          className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-40 pb-24"
          style={{ background: "radial-gradient(120% 140% at 15% -10%, #123f66 0%, var(--color-gray-950) 55%)" }}
        >
          <div className="max-w-[900px] mx-auto px-8 relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold mb-6"
            >
              {aboutPage.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight italic"
            >
              {aboutPage.headline}
              <br />
              <span className="text-leon-orange">{aboutPage.headlineHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 max-w-2xl text-lg sm:text-xl text-gray-300 font-medium leading-relaxed"
            >
              {aboutPage.lede}
            </motion.p>
          </div>
        </section>

        <ApproachSection />

        {/* Products */}
        <section className="relative py-32 bg-black overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto mb-16 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-leon-orange" />
                <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
                  {aboutPage.products.eyebrow}
                </p>
                <div className="w-12 h-px bg-leon-orange" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white font-bold">
                {aboutPage.products.heading}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {aboutPage.products.items.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpotlightCard
                    spotlightColor={`${product.color}26`}
                    className="bg-white/[0.03] border border-white/10 rounded-[28px] p-6 md:p-10 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-center"
                  >
                    <div className="relative z-10 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={`${product.name} — ${product.role}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 280px"
                          className="object-contain p-4"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 text-center px-6">
                          <span
                            className="font-display font-extrabold text-3xl tracking-tight"
                            style={{ color: product.color }}
                          >
                            {product.name}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                            {aboutPage.products.comingSoon}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-baseline gap-3 flex-wrap mb-1">
                        <h3
                          className="font-display font-extrabold text-2xl md:text-3xl tracking-tight"
                          style={{ color: product.color }}
                        >
                          {product.name}
                        </h3>
                        <span className="text-sm italic text-gray-400 font-medium">{product.tagline}</span>
                      </div>
                      <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-5">
                        {product.role}
                      </p>
                      <p className="text-white font-semibold mb-2">{product.highlight}</p>
                      <p className="text-gray-400 font-body leading-relaxed mb-5">{product.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed"
            >
              {aboutPage.products.formatsNote}
            </motion.p>
          </div>
        </section>

        {/* Why ALIXRAIL */}
        <section className="relative py-32 bg-[#051625] border-t border-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leon-orange/50 to-transparent pointer-events-none" />
          <div className="max-w-[1180px] mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto mb-16 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-px bg-leon-orange" />
                <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
                  {aboutPage.why.eyebrow}
                </p>
                <div className="w-12 h-px bg-leon-orange" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white font-bold">
                {aboutPage.why.heading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {aboutPage.why.items.map((item, index) => {
                const Icon = whyIcons[index];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full"
                  >
                    <SpotlightCard
                      spotlightColor="rgba(236, 99, 77, 0.15)"
                      className="group h-full flex items-start gap-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] rounded-[24px] p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20"
                    >
                      <div className="relative z-10 shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-leon-orange/10 border border-leon-orange/30 text-leon-orange group-hover:scale-110 group-hover:bg-leon-orange group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                        {Icon && <Icon className="w-[22px] h-[22px]" strokeWidth={2} />}
                      </div>
                      <div className="relative z-10 min-w-0">
                        <h3 className="font-display text-[17px] font-bold text-white leading-snug mb-1.5">
                          {item.title}
                        </h3>
                        <p className="font-body text-[14.5px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 bg-[#071c2e] overflow-hidden">
          <div className="max-w-[1180px] mx-auto px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SpotlightCard className="bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-3xl p-8 md:p-16 lg:p-24 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-leon-orange/10 to-transparent pointer-events-none opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-display uppercase leading-[1.1] text-white tracking-tight">
                  {aboutPage.cta.heading}
                </h2>
                <p className="relative z-10 text-gray-300 font-medium max-w-[480px] mx-auto mb-12 text-lg leading-relaxed font-body">
                  {aboutPage.cta.description}
                </p>

                <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href={aboutPage.cta.primaryButton.href}
                    className="group relative inline-flex items-center gap-3 bg-leon-orange text-white font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)]"
                  >
                    <span className="relative z-10">{aboutPage.cta.primaryButton.label}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={aboutPage.cta.secondaryButton.href}
                    className="inline-flex items-center gap-3 border border-white/20 text-white hover:text-leon-orange font-semibold px-8 py-4 rounded-xl transition-all hover:border-leon-orange/40 hover:bg-white/10 shadow-sm bg-white/5 backdrop-blur-sm"
                  >
                    <Mail className="w-4 h-4" />
                    {aboutPage.cta.secondaryButton.label}
                  </Link>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
