"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsContent from "@/components/TermsContent";
import { useLanguage } from "@/context/LanguageContext";

const email = "contact@gexiarail.com";
const emailSubject = "Demande d'information";

const labels = {
  en: {
    eyebrow: "Legal",
    back: "Back to Home",
    title: "General Conditions",
    subtitle: "LÉON, by Alix Smart Rail, operated by GEXIA Rail",
    registration: "Registration",
    locations: "Location",
    getInTouch: "Get in touch",
  },
  fr: {
    eyebrow: "Mentions légales",
    back: "Retour à l'accueil",
    title: "Conditions Générales",
    subtitle: "LÉON, par Alix Smart Rail, exploité par GEXIA Rail",
    registration: "Enregistrement",
    locations: "Emplacement",
    getInTouch: "Contactez-nous",
  },
};

export default function TermsPage() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const l = labels[language];

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Navbar />
      <main className="relative bg-[#051625] pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-16"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              {l.back}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-leon-orange font-bold mb-4">
              {l.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
              {l.title}
            </h1>
            <p className="text-lg text-gray-400 font-medium">{l.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 border-y border-white/10 mb-16"
          >
            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-3">
                {l.registration}
              </h3>
              <div className="space-y-1 text-gray-300">
                <p>Toulouse SIRET: 817 909 500 00016</p>
                <p>{language === "fr" ? "Hébergement" : "Hosting"}: Firebase (Google Cloud)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-3">
                {l.locations}
              </h3>
              <div className="text-gray-300">
                <p className="text-white font-medium">ALIX / GEXIARAIL</p>
                <p>209 rue Jean Bart, Bâtiment Agora 1B, 31670 Labège, France</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-4 text-gray-400"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>{l.getInTouch}:</span>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}`}
              className="font-semibold text-leon-orange hover:text-white transition-colors"
            >
              {email}
            </a>
          </motion.div>

          <TermsContent lang={language} />
        </div>

        {isVisible && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-leon-orange hover:border-transparent transition-colors z-50"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}
