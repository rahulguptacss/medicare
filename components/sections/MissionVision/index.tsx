"use client";
import React from 'react';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVision({ data }: { data?: any }) {
  const subtitle = data?.subtitle || "OUR MISSION & VISION";
  const title = data?.title || "Our";
  const titleHighlight = data?.titleHighlight || "Mission & Vision";
  const description = data?.description || "Guided by a strong purpose and a clear vision, we strive to deliver high-quality pharmaceutical products for a healthier and brighter tomorrow.";

  const mission = data?.mission || {
    title: "Our",
    highlight: "Mission",
    description: "Our mission is to improve human health by providing high-quality, safe and effective pharmaceutical products that meet global standards. We are committed to innovation, ethical practices and customer satisfaction to make healthcare more accessible for all.",
    image: "/services/1.webp"
  };

  const vision = data?.vision || {
    title: "Our",
    highlight: "Vision",
    description: "Our vision is to be a globally trusted pharmaceutical company, recognized for our commitment to quality, innovation and sustainable growth, while contributing to a healthier and brighter future for communities around the world.",
    image: "/services/8.webp"
  };

  return (
    <section className="py-10 lg:py-12 relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-[0.03]">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-[#00b4d8]">
            <circle cx="20" cy="20" r="8" />
            <circle cx="80" cy="30" r="12" />
            <circle cx="50" cy="80" r="10" />
            <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <line x1="80" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="20" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 opacity-[0.03]">
          <svg width="250" height="250" viewBox="0 0 100 100" fill="currentColor" className="text-[#00b4d8]">
            <circle cx="30" cy="70" r="15" />
            <circle cx="70" cy="20" r="10" />
            <circle cx="80" cy="80" r="8" />
            <line x1="30" y1="70" x2="70" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="70" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="70" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 lg:mb-5"
        >
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="w-8 lg:w-12 h-[1px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-8 lg:w-12 h-[1px] bg-[#00a2c0]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b2c4d] mb-1 lg:mb-2 leading-tight">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>
          <p className="text-[#64748b] max-w-[650px] mx-auto text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#f2f8fc] rounded-2xl overflow-hidden shadow-sm relative flex min-h-[240px] lg:min-h-[260px] group border border-blue-50/50"
          >
            {/* Left Content Area */}
            <div className="w-[55%] p-6 lg:p-8 flex flex-col justify-center z-20 relative">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#0b2c4d] flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-[#0b2c4d] font-bold text-lg lg:text-xl leading-none mb-1">{mission.title}</h3>
                  <h3 className="text-[#007bb5] font-black text-xl lg:text-2xl leading-none">{mission.highlight}</h3>
                  <div className="w-8 lg:w-10 h-[3px] bg-[#00b4d8] mt-1.5 lg:mt-2"></div>
                </div>
              </div>
              <p className="text-[#4b5563] text-[12px] lg:text-[13px] leading-[1.6]">
                {mission.description}
              </p>
            </div>

            {/* Right Image Area */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full z-10">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={mission.image}
                  alt={mission.highlight || "Our Mission"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#00b4d8]/10 mix-blend-multiply"></div>

                {/* SVG Overlay to create the slanted curve and cyan border */}
                <svg className="absolute -left-1 top-0 w-[120px] lg:w-[150px] h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M -10,0 L 100,0 L 40,75 C 35,88 40,100 60,100 L -10,100 Z" fill="#f2f8fc" />
                  <path d="M 100,0 L 40,75 C 35,88 40,100 60,100" stroke="#00b4d8" strokeWidth="6" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#f0fbf8] rounded-2xl overflow-hidden shadow-sm relative flex min-h-[240px] lg:min-h-[260px] group border border-teal-50/50"
          >
            {/* Left Content Area */}
            <div className="w-[55%] p-6 lg:p-8 flex flex-col justify-center z-20 relative">
              <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#008f7a] flex items-center justify-center shrink-0 shadow-md">
                  <Eye className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-[#0b2c4d] font-bold text-lg lg:text-xl leading-none mb-1">{vision.title}</h3>
                  <h3 className="text-[#008f7a] font-black text-xl lg:text-2xl leading-none">{vision.highlight}</h3>
                  <div className="w-8 lg:w-10 h-[3px] bg-[#00c0a3] mt-1.5 lg:mt-2"></div>
                </div>
              </div>
              <p className="text-[#4b5563] text-[12px] lg:text-[13px] leading-[1.6]">
                {vision.description}
              </p>
            </div>

            {/* Right Image Area */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] h-full z-10">
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={vision.image}
                  alt={vision.highlight || "Our Vision"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#008f7a]/10 mix-blend-multiply"></div>

                {/* SVG Overlay to create the slanted curve and teal border */}
                <svg className="absolute -left-1 top-0 w-[120px] lg:w-[150px] h-full z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Fill matches card background */}
                  <path d="M -10,0 L 100,0 L 40,75 C 35,88 40,100 60,100 L -10,100 Z" fill="#f0fbf8" />
                  {/* Teal border stroke */}
                  <path d="M 100,0 L 40,75 C 35,88 40,100 60,100" stroke="#00c0a3" strokeWidth="6" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
