"use client";

import { motion } from "framer-motion";
import { termsContent } from "../data/termsContent";
import { Language } from "../data/content";

export default function TermsContent({ lang }: { lang: Language }) {
  const sections = termsContent[lang];

  return (
    <div className="font-body">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`py-12 ${index !== sections.length - 1 ? "border-b border-white/10" : ""}`}
        >
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-6">
            {section.heading}
          </h2>

          {Array.isArray(section.paragraphs) && (
            <div className="space-y-5 max-w-3xl">
              {section.paragraphs.map((para, paraIndex) => {
                if (typeof para === "object" && "tips" in para) {
                  return (
                    <ul key={paraIndex} className="space-y-2 pt-1">
                      {para.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-baseline gap-3 text-gray-300">
                          <span className="w-1 h-1 rounded-full bg-leon-orange shrink-0 relative top-[-2px]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={paraIndex} className="text-[15.5px] text-gray-400 font-light leading-relaxed">
                    {para}
                  </p>
                );
              })}
            </div>
          )}

          {Array.isArray(section.points) && (
            <div className="mt-2 space-y-6 max-w-3xl">
              {section.points.map((item, pointIndex) => (
                <div key={pointIndex}>
                  <p className="text-[15.5px] font-semibold text-white mb-1.5">{item.point}</p>
                  <p className="text-[15.5px] text-gray-400 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
