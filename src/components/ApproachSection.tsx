"use client";

import { motion } from "framer-motion";
import { MapPin, Smartphone, Target } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import SpotlightCard from "./ui/SpotlightCard";

const convictionIcons = [MapPin, Smartphone, Target];

export default function ApproachSection() {
  const { content } = useLanguage();
  const { approach } = content.aboutPage;

  return (
    <section id="about" className="relative py-32 bg-[#051625] overflow-hidden scroll-mt-10">
      <div className="max-w-[1180px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-leon-orange" />
            <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
              {approach.eyebrow}
            </p>
            <div className="w-12 h-px bg-leon-orange" />
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-[34px] uppercase tracking-tight text-white font-bold mb-8 flex items-center justify-center flex-wrap gap-x-3.5 gap-y-2">
            <Image
              src="/ALIXRAIL_logo_white.png"
              alt="ALIXRAIL"
              width={150}
              height={34}
              className="h-6 sm:h-7 md:h-8 w-auto object-contain shrink-0"
            />
            <span>{approach.heading}</span>
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {approach.story.title}
              </h3>
              <p className="text-lg text-gray-300 font-body font-normal leading-relaxed">
                {approach.story.text}
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {approach.fieldAgent.title}
              </h3>
              <p className="text-lg text-gray-300 font-body font-normal leading-relaxed">
                {approach.fieldAgent.text}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approach.convictions.map((conviction, index) => {
            const Icon = convictionIcons[index];
            return (
              <motion.div
                key={conviction.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard
                  spotlightColor="rgba(236, 99, 77, 0.15)"
                  className="h-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] rounded-[24px] p-8"
                >
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-leon-orange/10 border border-leon-orange/30 text-leon-orange mb-6 shadow-sm">
                    {Icon && <Icon className="w-[22px] h-[22px]" strokeWidth={2} />}
                  </div>
                  <h3 className="relative z-10 font-display text-lg font-bold text-white mb-3">
                    {conviction.title}
                  </h3>
                  <p className="relative z-10 font-body text-[15px] leading-relaxed text-gray-400">
                    {conviction.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
