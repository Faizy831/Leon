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
    eyebrow: "Get Started",
    title: "Request a Demo",
    subtitle: "Tell us a bit about your project and our team will get back to you shortly.",
    firstName: "First Name",
    lastName: "Last Name",
    company: "Company",
    contactMethod: "Preferred Contact Method",
    email: "Email",
    phone: "Phone",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    message: "Message (optional)",
    messagePlaceholder: "Tell us about your track measurement needs...",
    contactMethodHint: "Select at least one option",
    submit: "Contact Me",
    submitting: "Sending...",
    successTitle: "Request Sent!",
    successSubtitle: "We've received your request and will reach out on your preferred contact method shortly.",
    backHome: "Back to Home",
  },
  fr: {
    back: "Retour à l'accueil",
    eyebrow: "Commencer",
    title: "Demander une Démo",
    subtitle: "Parlez-nous un peu de votre projet et notre équipe vous répondra rapidement.",
    firstName: "Prénom",
    lastName: "Nom",
    company: "Entreprise",
    contactMethod: "Méthode de contact préférée",
    email: "Email",
    phone: "Téléphone",
    emailAddress: "Adresse Email",
    phoneNumber: "Numéro de Téléphone",
    message: "Message (facultatif)",
    messagePlaceholder: "Parlez-nous de vos besoins en mesure de voie...",
    contactMethodHint: "Sélectionnez au moins une option",
    submit: "Contactez-moi",
    submitting: "Envoi...",
    successTitle: "Demande envoyée !",
    successSubtitle: "Nous avons bien reçu votre demande et vous recontacterons rapidement via le moyen choisi.",
    backHome: "Retour à l'accueil",
  },
};

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-leon-orange/60 focus:bg-white/[0.07] transition-colors";

export default function DemoPage() {
  const { language } = useLanguage();
  const l = labels[language];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [wantsEmail, setWantsEmail] = useState(true);
  const [wantsPhone, setWantsPhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const canSubmit = wantsEmail || wantsPhone;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 1200);
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
                      {l.company}
                    </label>
                    <input
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-3">
                      {l.contactMethod}
                    </label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2.5 text-gray-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={wantsEmail}
                          onChange={(e) => setWantsEmail(e.target.checked)}
                          className="w-4 h-4 rounded accent-leon-orange"
                        />
                        {l.email}
                      </label>
                      <label className="flex items-center gap-2.5 text-gray-300 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={wantsPhone}
                          onChange={(e) => setWantsPhone(e.target.checked)}
                          className="w-4 h-4 rounded accent-leon-orange"
                        />
                        {l.phone}
                      </label>
                    </div>
                    {!canSubmit && (
                      <p className="text-xs text-leon-orange/80 mt-2">{l.contactMethodHint}</p>
                    )}
                  </div>

                  <AnimatePresence>
                    {wantsEmail && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                          {l.emailAddress}
                        </label>
                        <input
                          type="email"
                          required={wantsEmail}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={inputClass}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {wantsPhone && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                          {l.phoneNumber}
                        </label>
                        <input
                          type="tel"
                          required={wantsPhone}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={inputClass}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="block text-xs font-mono tracking-widest uppercase text-gray-500 font-bold mb-2">
                      {l.message}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={l.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
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
