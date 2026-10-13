"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Factory, ClipboardCheck, PackageCheck, ArrowRight } from 'lucide-react';
import { ManufacturingProcess as ManufacturingProcessType } from '@/components/types';

export default function ManufacturingProcess({ data }: { data?: ManufacturingProcessType }) {
  if (!data) return null;

  const getProcessIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'leaf':
      case 'raw material':
        return <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a2c0] stroke-[2]" />;
      case 'factory':
      case 'manufacturing':
        return <Factory className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a2c0] stroke-[2]" />;
      case 'clipboardcheck':
      case 'quality check':
        return <ClipboardCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a2c0] stroke-[2]" />;
      case 'packagecheck':
      case 'packaging':
        return <PackageCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a2c0] stroke-[2]" />;
      default:
        return <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-[#00a2c0] stroke-[2]" />;
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
              {data.badge || "PRODUCTION PROCESS"}
            </span>
            <span className="w-6 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
          </div>

          {/* Title */}
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold text-[#071536] leading-[1.18] tracking-tight mb-2">
            {data.title_part1 || "From"}{" "}
            <span className="text-[#00a2c0]">
              {data.title_part2 || "Raw Material to Finished Product"}
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#5f738a] text-[13px] sm:text-[14.5px] leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            {data.description}
          </p>

          {/* 4 Process Step Cards: 2-column on mobile, 4-column on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 relative">
            {data.steps?.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-3.5 sm:p-5 pt-5 sm:pt-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 relative text-left group flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <span className="absolute -top-3 left-4 sm:left-5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0284c7] text-white font-extrabold text-[10px] sm:text-xs flex items-center justify-center shadow-xs">
                  {step.step}
                </span>

                <div>
                  <div className="mb-2 sm:mb-3 group-hover:scale-105 transition-transform">
                    {getProcessIcon(step.icon)}
                  </div>
                  <h3 className="text-[14px] sm:text-[17px] font-bold text-[#071536] mb-1 sm:mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#64748b] text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Flow Arrow to next card (visible on desktop) */}
                {idx < (data.steps?.length || 0) - 1 && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 text-[#00a2c0] items-center justify-center shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
