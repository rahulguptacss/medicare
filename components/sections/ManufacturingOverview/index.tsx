"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ManufacturingOverview as ManufacturingOverviewType } from '@/components/types';

export default function ManufacturingOverview({ data }: { data?: ManufacturingOverviewType }) {
  if (!data) return null;

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col justify-center py-1">
            {/* Subtitle with lines */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-7 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
              <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase">
                {data.badge || "MANUFACTURING FACILITIES"}
              </span>
              <span className="w-7 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
            </div>

            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#071536] leading-[1.15] tracking-tight mb-3">
              {data.title_part1 || "World-Class"}{" "}
              <span className="text-[#00a2c0] block sm:inline">
                {data.title_part2 || "Manufacturing Facilities"}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#5f738a] text-[14px] sm:text-[15px] leading-relaxed max-w-[540px]">
              {data.description}
            </p>
          </div>

          {/* Right Image: Height matches content exactly */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 group h-[220px] sm:h-[260px] lg:h-full min-h-[220px]">
              <Image
                src={data.image || "/banner/corporate.webp"}
                alt={data.title_part2 || "Manufacturing Facilities"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
