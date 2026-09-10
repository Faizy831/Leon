"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import BenefitsPanel from '@/components/BenefitsPanel';
import SolutionSection from '@/components/SolutionSection';
import ApproachSection from '@/components/ApproachSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

type ProductConfig = {
  id: string;
  name: string;
  logo: string;
  image: string | null;
  link: string;
  bgColor: string;
  fallbackRole: string;
};

const products: ProductConfig[] = [
  {
    id: 'emma',
    name: 'EMMA',
    logo: '/EMMA_logo.png',
    image: '/emma-trolley.jpg',
    link: '#',
    bgColor: 'bg-[#FDF4E7]',
    fallbackRole: 'Track Twist & Geometry Measurement Trolley',
  },
  {
    id: 'kat',
    name: 'KAT',
    logo: '/KAT_logo.png',
    image: null,
    link: '#',
    bgColor: 'bg-[#C6E9FA]',
    fallbackRole: 'Catenary Contact Wire Height & Stagger Measurement',
  },
  {
    id: 'halo',
    name: 'HALO',
    logo: '/HALO_logo.png',
    image: '/halo-odometer.jpg',
    link: '#',
    bgColor: 'bg-[#EBF5FB]',
    fallbackRole: 'Autonomous Optical Odometry Smart Tool',
  },
  {
    id: 'tom',
    name: 'TOM',
    logo: '/TOM_logo.png',
    image: '/tom-tool.jpg',
    link: '#',
    bgColor: 'bg-[#F6CC9A]',
    fallbackRole: 'Rail Chainage & Field Event Tracking Tool',
  }
];

export default function Home() {
  const { content, language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductConfig | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProduct]);

  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeaturesGrid />
        <BenefitsPanel />
        <SolutionSection />
        <ApproachSection />
        <CallToAction />
        
        {/* Our Products Section */}
        <section className="bg-[#051625] py-24 border-t border-white/5">
          <div className="max-w-[1180px] mx-auto px-8">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-leon-orange" />
                <p className="font-mono text-sm tracking-widest uppercase text-leon-orange font-bold">
                  {content.aboutPage?.products?.eyebrow || "Our Products"}
                </p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white font-bold">
                {content.aboutPage?.products?.heading || "A product range built for modern rail challenges"}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => {
                const item = content.aboutPage?.products?.items?.find((p) => p.id === product.id);
                const role = item?.role || product.fallbackRole;

                return (
                  <div
                    key={product.id}
                    onClick={() => {
                      if (product.image) setSelectedProduct(product);
                    }}
                    className={`group block w-full text-left bg-white rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col ${
                      product.image ? 'cursor-pointer' : ''
                    }`}
                  >
                    {/* Visual box with logo & hover image */}
                    <div className={`h-60 sm:h-64 relative flex items-center justify-center p-8 ${product.bgColor} overflow-hidden`}>
                      {/* Logo layer (default) */}
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={product.logo}
                          alt={`${product.name} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Photo layer (reveals on hover if available) */}
                      {product.image && (
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <Image
                              src={product.image}
                              alt={`${product.name} Photo`}
                              fill
                              className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      )}

                      {/* Expand Badge on hover if image exists */}
                      {product.image && (
                        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none z-10">
                          <ZoomIn className="w-3.5 h-3.5 text-leon-orange" />
                          <span className="text-[11px] font-mono">View</span>
                        </div>
                      )}
                    </div>

                    {/* Card Footer with Role */}
                    <div className="p-4 sm:p-5 border-t border-gray-100 flex flex-col items-center justify-center text-center bg-white flex-1 min-h-[84px] gap-2 group-hover:bg-gray-50 transition-colors">
                      <p className="text-gray-900 font-display font-semibold text-xs sm:text-[13px] md:text-sm leading-snug">
                        {role}
                      </p>
                      <a
                        href="mailto:contact@alixrail.com"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wide uppercase hover:underline"
                        style={{ color: item?.color || '#ec634d' }}
                      >
                        {language === 'fr' ? "Plus d'infos ? Contactez-nous" : 'More Info? Contact Us'}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Image Lightbox Modal (Pure Image View) */}
        <AnimatePresence>
          {selectedProduct && selectedProduct.image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 320 }}
                className="relative max-w-4xl w-full aspect-[4/3] max-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative w-full h-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
