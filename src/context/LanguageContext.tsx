"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language, siteConfig } from "../data/content";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: typeof siteConfig.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: siteConfig[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
