"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, FlaskConical, Award } from 'lucide-react';
import { ManufacturingHygieneSafety as ManufacturingHygieneSafetyType } from '@/components/types';

export default function ManufacturingHygieneSafety({ data }: { data?: ManufacturingHygieneSafetyType }) {
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
          {/* Left Image: Matches content height */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100 group h-[260px] sm:h-[300px] lg:h-full min-h-[260px]">
              <Image
                src={data.image || "/expertise/4.webp"}
                alt="Hygiene and Safety Standards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 flex flex-col justify-center py-1">
            {/* Subtitle with lines */}
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-7 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
              <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase">
                {data.badge || "HYGIENE & SAFETY STANDARDS"}
              </span>
              <span className="w-7 sm:w-9 h-[2px] bg-[#00a2c0] rounded-full"></span>
            </div>

            {/* Title */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold text-[#071536] leading-[1.15] tracking-tight mb-3">
              {data.title_part1 || "Safety"}{" "}
              <span className="text-[#00a2c0]">
                {data.title_part2 || "at Every Step"}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[#5f738a] text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-[540px]">
              {data.description}
            </p>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {data.features?.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f0f9fc] border border-[#d9f0f8] rounded-xl sm:rounded-2xl p-3 sm:p-3.5 text-center hover:border-[#00a2c0] hover:shadow-xs transition-all duration-300"
                >
                  <div className="flex justify-center mb-1.5 text-[#00a2c0]">
                    {idx === 0 && <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />}
                    {idx === 1 && <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />}
                    {idx === 2 && <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />}
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-bold text-[#071536] leading-tight block">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
