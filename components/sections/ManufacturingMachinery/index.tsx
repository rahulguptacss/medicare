"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ManufacturingMachinery as ManufacturingMachineryType } from '@/components/types';

export default function ManufacturingMachinery({ data }: { data?: ManufacturingMachineryType }) {
  if (!data) return null;

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
        >
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col justify-center py-1">
            {/* Subtitle with lines */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
              <span className="w-6 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
              <span className="text-[#00a2c0] text-[11px] sm:text-[13px] font-bold tracking-[0.16em] uppercase">
                {data.badge || "ADVANCED MACHINERY"}
              </span>
              <span className="w-6 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
            </div>

            {/* Title */}
            <h2 className="text-[24px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#071536] leading-[1.18] tracking-tight mb-2.5">
              {data.title_part1 || "Precision"}{" "}
              <span className="text-[#00a2c0]">
                {data.title_part2 || "& Innovation"}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#5f738a] text-[13px] sm:text-[15px] leading-relaxed max-w-[460px]">
              {data.description}
            </p>
          </div>

          {/* Right Images: 2 columns on mobile side by side */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4.5">
            {data.images?.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-gray-100 group relative h-[140px] sm:h-[190px] lg:h-[210px]"
              >
                <Image
                  src={img}
                  alt={`Machinery ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
