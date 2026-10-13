"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CtaBanner({ data }: any) {
  return (
    <section className="relative py-6 lg:py-8 bg-[#082a45] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear" }}
          src={data?.image || "/banner/cta.webp"} 
          alt={data?.title_line1 || "CTA Background"} 
          className="w-full h-full object-cover lg:object-[center_right]" 
        />
        {/* Dark gradient overlay for text readability on smaller screens if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082a45] via-[#082a45]/90 to-transparent lg:via-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[650px]"
        >
          
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-1">
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] bg-[#00a2c0] block"
            ></motion.span>
            <span className="text-white text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase">
              {data?.subtitle || "LET'S CONNECT"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-tight mb-2">
            <span className="text-white block">{data?.title_line1 || "Looking for a Trusted"}</span>
            <span className="text-[#00a2c0] block">{data?.title_line2 || "Pharmaceutical Partner?"}</span>
          </h2>

          {/* Description */}
          <p className="text-white/90 text-[15px] lg:text-[16px] leading-relaxed mb-4 max-w-[550px]">
            Let's work together for a healthier and brighter future. Get in touch with us for product information, bulk enquiries or business opportunities.
          </p>

          {/* Button */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={data?.button?.href || "/enquiry-now"} 
            className="inline-flex items-center gap-4 bg-[#00a2c0] hover:bg-[#008b9e] text-white pl-6 pr-2 py-2 rounded-full font-bold transition-all group"
          >
            <span className="text-[15px]">{data?.button?.text?.replace(' →', '') || "Enquiry Now"}</span>
            <span className="w-8 h-8 rounded-full bg-white text-[#00a2c0] flex items-center justify-center group-hover:bg-gray-100 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </span>
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}