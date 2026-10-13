"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Syringe } from 'lucide-react';
import { ManufacturingCapabilities as ManufacturingCapabilitiesType } from '@/components/types';

export default function ManufacturingCapabilities({ data }: { data?: ManufacturingCapabilitiesType }) {
  if (!data) return null;

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'tablets':
      case 'pill':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M7 17L17 7" />
          </svg>
        );
      case 'capsules':
      case 'capsule':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)" />
            <path d="M9 15L15 9" />
          </svg>
        );
      case 'syrups':
      case 'bottle':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 2h4" />
            <path d="M10 5h4" />
            <path d="M8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8z" />
            <path d="M12 11v6" />
            <path d="M9 14h6" />
          </svg>
        );
      case 'injections':
      case 'syringe':
        return <Syringe className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />;
      case 'ointments':
      case 'ointments & creams':
      case 'tube':
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 2h10v3H7z" />
            <path d="M8 5v5l2 11h4l2-11V5z" />
            <path d="M10 13h4" />
          </svg>
        );
      default:
        return <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />;
    }
  };

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Subtitle with lines */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2">
            <span className="w-6 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
            <span className="text-[#00a2c0] text-[11px] sm:text-[13px] font-bold tracking-[0.16em] uppercase">
              {data.badge || "MANUFACTURING CAPABILITIES"}
            </span>
            <span className="w-6 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#071536] leading-[1.18] tracking-tight mb-2">
            {data.title_part1 || "Diverse"}{" "}
            <span className="text-[#00a2c0]">
              {data.title_part2 || "Product Range"}
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#5f738a] text-[13px] sm:text-[14.5px] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            {data.description}
          </p>

          {/* 5 Product Range Cards: 2-column balanced grid on mobile, 3-column on tablet, 5-column on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4.5">
            {data.items?.map((item, idx) => {
              const isLastOdd = idx === 4;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl sm:rounded-2xl border border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,162,192,0.12)] hover:-translate-y-1 transition-all duration-300 p-3.5 sm:p-5 flex flex-col items-center text-center group ${
                    isLastOdd ? 'col-span-2 md:col-span-1 max-w-[260px] md:max-w-none mx-auto w-full' : ''
                  }`}
                >
                  {/* Circular Icon Badge */}
                  <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full ${item.badge_color || 'bg-[#00a2c0]'} text-white flex items-center justify-center mb-2.5 sm:mb-3.5 shadow-xs group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    {getCapabilityIcon(item.icon)}
                  </div>
                  <h3 className="text-[14px] sm:text-[16px] font-bold text-[#071536] mb-1 sm:mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-[11px] sm:text-[12.5px] leading-snug sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
