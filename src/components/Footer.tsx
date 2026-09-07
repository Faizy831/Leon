"use client";

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { content, language } = useLanguage();
  const { footerText } = content;

  return (
    <footer className="bg-[#051625] text-gray-400 py-16 text-sm">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="font-medium flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} ALIXRAIL {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
            <span className="text-gray-600">&middot;</span>
            <Link href="/terms" className="font-semibold hover:text-white transition-colors">
              {language === 'fr' ? 'Conditions' : 'Terms'}
            </Link>
          </div>
          <div className="text-center md:text-right font-medium">{footerText}</div>
        </div>
      </div>
    </footer>
  );
}
