"use client";

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import ValueProposition from '@/components/ValueProposition';
import BenefitsPanel from '@/components/BenefitsPanel';
import ComplianceSection from '@/components/ComplianceSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'emma',
    name: 'Emma',
    logo: '/EMMA_logo.png',
    link: '#',
    bgColor: 'bg-[#FDF4E7]',
  },
  {
    id: 'kat',
    name: 'Kat',
    logo: '/KAT_logo.png',
    link: '#',
    bgColor: 'bg-[#C6E9FA]',
  },
  {
    id: 'leon',
    name: 'Leon',
    logo: '/leon-logo.png',
    link: 'https://leon-coming-soon.vercel.app/',
    bgColor: 'bg-[#F9A8AE]',
  },
  {
    id: 'tom',
    name: 'Tom',
    logo: '/TOM_logo.png',
    link: '#',
    bgColor: 'bg-[#F6CC9A]',
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <FeaturesGrid />
        <ValueProposition />
        <BenefitsPanel />
        <ComplianceSection />
        <CallToAction />
        
        {/* Our Products Section */}
        <section className="bg-[#051625] py-16">
          <div className="max-w-[1180px] mx-auto px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-tight">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link 
                  key={product.id}
                  href={product.link}
                  {...(product.link.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block bg-white rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                >
                  <div className={`h-64 relative flex items-center justify-center p-8 ${product.bgColor}`}>
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Image 
                        src={product.logo} 
                        alt={`${product.name} Logo`}
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-5 border-t border-gray-100 flex items-center justify-center bg-white">
                    <h3 className="text-gray-900 font-bold text-lg uppercase tracking-wide">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
