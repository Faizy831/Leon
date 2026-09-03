"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, Globe, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = ({ id, isScrolled = true }: { id: string, isScrolled?: boolean }) => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={`flex items-center gap-2 font-mono text-xs font-bold tracking-widest ml-2 md:ml-4 pl-2 md:pl-4 md:border-l ${isScrolled ? 'border-gray-200/60' : 'border-white/20'}`}>
      <Globe className={`w-4 h-4 mr-1 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
      <button 
        onClick={() => setLanguage('en')}
        className={`relative px-1.5 py-1 transition-colors ${
          language === 'en' 
            ? (isScrolled ? 'text-gray-900' : 'text-white') 
            : (isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white')
        }`}
      >
        EN
        {language === 'en' && (
          <motion.div layoutId={`active-lang-${id}`} className={`absolute bottom-0 left-0 right-0 h-[2px] ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
        )}
      </button>
      <button 
        onClick={() => setLanguage('fr')}
        className={`relative px-1.5 py-1 transition-colors ${
          language === 'fr' 
            ? (isScrolled ? 'text-gray-900' : 'text-white') 
            : (isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white')
        }`}
      >
        FR
        {language === 'fr' && (
          <motion.div layoutId={`active-lang-${id}`} className={`absolute bottom-0 left-0 right-0 h-[2px] ${isScrolled ? 'bg-gray-900' : 'bg-white'}`} />
        )}
      </button>
    </div>
  );
};

export default function Navbar() {
  const { content } = useLanguage();
  const { navLinks, navCta } = content;
  
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    // Plain (non-animated) wrapper owns the fixed positioning and scrollbar
    // compensation, so it snaps instantly. The `transition-all` below on the
    // header animates its own scroll-driven styling — putting the --sbw
    // compensation on that element too would make it visibly slide instead
    // of snapping when the scrollbar appears/disappears.
    <div style={{ paddingRight: "var(--sbw, 0px)" }} className="fixed inset-x-0 z-50">
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex justify-center transition-all duration-500 ${
        isScrolled ? "top-4 px-4 md:top-6" : "top-0 px-0"
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 ${
          isScrolled 
            ? "max-w-[1024px] bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] border border-gray-200/60 rounded-full px-6 md:px-8" 
            : "max-w-[1180px] bg-transparent border border-transparent px-8"
        }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "h-14 md:h-16" : "h-20 md:h-24"
        }`}>
          <Link href="/" className="flex items-center relative group">
            <Image 
              src={isScrolled ? "/ALIXRAIL_logo.png" : "/ALIXRAIL_logo_white.png"}
              alt="ALIX RAIL Logo" 
              width={160} 
              height={40} 
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>
          
          <nav 
            className={`hidden md:flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-3 lg:px-5 py-2 transition-colors z-10 whitespace-nowrap ${isScrolled ? 'hover:text-gray-900' : 'hover:text-white'}`}
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full -z-10 ${isScrolled ? 'bg-gray-100/80' : 'bg-white/10 backdrop-blur-sm'}`}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
            
            <LanguageToggle id="desktop" isScrolled={isScrolled} />
          </nav>
          
          <div className="flex items-center gap-4">
            <Link 
              href="#contact" 
              className={`hidden md:inline-flex text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md whitespace-nowrap ${
                isScrolled ? 'bg-gray-900 hover:bg-black text-white shadow-gray-300' : 'bg-white text-gray-900 hover:bg-gray-100 shadow-black/20'
              }`}
            >
              {navCta}
            </Link>
            <div className="md:hidden flex items-center gap-4">
              <LanguageToggle id="mobile" isScrolled={isScrolled} />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 transition-colors ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-3xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] md:hidden flex flex-col gap-2 origin-top"
          >
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-900 font-bold text-lg py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-amber-500 text-gray-900 font-bold text-center py-4 rounded-xl shadow-md active:scale-95 transition-transform"
            >
              {navCta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </div>
  );
}
