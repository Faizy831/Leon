"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  en: {
    back: "Back to Home",
    eyebrow: "Resources",
    title: "Technical Sheet",
    subtitle: "Please provide your details to download LÉON's technical sheet.",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    company: "Company Name",
    submit: "Download PDF",
    submitting: "Preparing...",
    successTitle: "Download Started!",
    successSubtitle: "Thank you for your interest in LÉON.",
    backHome: "Back to Home",
    file: "/leon-technical-sheet-en.pdf",
    fileName: "leon-technical-sheet-en.pdf",
  },
  fr: {
    back: "Retour à l'accueil",
    eyebrow: "Ressources",
    title: "Fiche Technique",
    subtitle: "Veuillez renseigner vos informations pour télécharger la fiche technique de LÉON.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse Email",
    company: "Entreprise",
    submit: "Télécharger le PDF",
    submitting: "Préparation...",
    successTitle: "Téléchargement lancé !",
    successSubtitle: "Merci de votre intérêt pour LÉON.",
    backHome: "Retour à l'accueil",
    file: "/leon-technical-sheet-fr.pdf",
    fileName: "leon-technical-sheet-fr.pdf",
  },
};

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-leon-orange/60 focus:bg-white/[0.07] transition-colors";

export default function TechnicalSheetPage() {
  const { language } = useLanguage();
  const l = labels[language];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = l.file;
      link.download = l.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitting(false);
      setIsDone(true);
    }, 800);
  };

  return (
    <>
      <Navbar />
      <main className="relative bg-[#071c2e] pt-40 pb-32 min-h-screen">
        <div className="max-w-xl mx-auto px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-16"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              {l.back}
            </Link>
          </motion.div>

          <AnimatePresence mode="wait">
            {isDone ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h1 className="text-3xl font-display font-bold text-white tracking-tight mb-4">
                  {l.successTitle}
                </h1>
                <p className="text-gray-400 max-w-sm mx-auto mb-10 leading-relaxed">
                  {l.successSubtitle}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-leon-orange text-white font-bold px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  {l.backHome}
                </Link>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
                <div className="mb-12">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-leon-orange font-bold mb-4">
                    {l.eyebrow}
                  </p>
                  <h1 className="text-4xl font-display font-bold text-white tracking-tight mb-4">
                    {l.title}
                  </h1>
                  <p className="text-lg text-gray-400 font-medium leading-relaxed">{l.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                        {l.firstName}
                      </label>
                      <input
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                        {l.lastName}
                      </label>
                      <input
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                      {l.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                      {l.company}
                    </label>
                    <input
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-leon-orange text-white font-bold px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(236,99,77,0.3)] hover:shadow-[0_15px_40px_rgba(236,99,77,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {l.submitting}
                      </>
                    ) : (
                      l.submit
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
