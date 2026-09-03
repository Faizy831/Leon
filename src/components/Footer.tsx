"use client";

import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const { content, language } = useLanguage();
  const { projectInitials, footerText } = content;
  
  return (
    <footer className="bg-[#051625] text-gray-400 py-16 text-sm">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center">
            <Image 
              src="/EMMA_symbol.png" 
              alt="EMMA Symbol" 
              width={48} 
              height={48} 
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex gap-8">
            <Link href="#" className="flex items-center gap-1 font-semibold text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Documentation' : 'Documentation'} <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="#" className="flex items-center gap-1 font-semibold text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Confidentialité' : 'Privacy'} <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link href="#" className="flex items-center gap-1 font-semibold text-gray-400 hover:text-white transition-colors">
              {language === 'fr' ? 'Conditions' : 'Terms'} <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-400 gap-4">
          <div className="font-medium">&copy; {new Date().getFullYear()} EMMA. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</div>
          <div className="text-center md:text-right font-medium">{footerText}</div>
        </div>
      </div>
    </footer>
  );
}
