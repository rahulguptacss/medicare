import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbProps } from '@/components/types';

export default function Breadcrumb({ data, title, breadcrumb, items, className }: BreadcrumbProps) {
  const displayTitle = data?.title || title || 'Details';
  const displayItems = data?.items || data?.breadcrumb || breadcrumb || items || [
    { label: 'Home', href: '/' },
    { label: displayTitle }
  ];
  const bgImage = data?.image || '/banner/mfg1.webp';

  return (
    <div className={`relative ${className || "pt-20 pb-8 lg:pt-24 lg:pb-10"} bg-[#0b2c4d] overflow-hidden text-center flex flex-col items-center justify-center`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="Banner" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#0b2c4d]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2c4d] to-transparent opacity-80"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-white/10 rounded-full"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-[#00b4d8]/20 rounded-full"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white mb-4 lg:mb-6 tracking-tight">
          {displayTitle}
        </h1>
        
        <div className="flex items-center gap-2 text-sm sm:text-[15px] font-medium bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
          {displayItems.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-4 h-4 text-[#00b4d8]" />}
              {idx === displayItems.length - 1 || !item.href || item.href === '#' ? (
                <span className="text-white">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-gray-300 hover:text-[#00b4d8] transition-colors">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
