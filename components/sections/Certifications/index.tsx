"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications({ data }: any) {
  return (
    <section 
      className="py-10 lg:py-16 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data?.bg_image || "/banner/certificationsbg.png"}')` }}
    >

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-1.5">
            <span className="w-8 lg:w-12 h-[1px] bg-[#64748b]"></span>
            <span className="text-[#0b2c4d] text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase">
              {data?.subtitle || "TRUSTED QUALITY STANDARDS"}
            </span>
            <span className="w-8 lg:w-12 h-[1px] bg-[#64748b]"></span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b2c4d] mb-2 leading-[1.15]">
            {data?.title_line1 || "OUR"} <span className="text-[#00a2c0]">{data?.title_highlight || "CERTIFICATIONS"}</span>
          </h2>

          {/* Description */}
          <p className="text-[#475569] max-w-[650px] mx-auto text-[13px] sm:text-[14px] lg:text-[15px] mb-3 lg:mb-4 leading-relaxed">
            {data?.description || "Our certifications reflect our commitment to global quality, safety and excellence in pharmaceutical manufacturing."}
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ 
            visible: { transition: { staggerChildren: 0.15 } }, 
            hidden: {} 
          }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-0"
        >
          {data?.items?.map((item: any, idx: number) => (
            <motion.div 
              key={idx} 
              variants={{ 
                hidden: { opacity: 0, y: 30, scale: 0.8 }, 
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } } 
              }}
              className="bg-white p-2.5 sm:p-3 lg:p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center w-[calc(33.33%-0.5rem)] min-w-[90px] max-w-[110px] sm:max-w-none sm:w-[130px] lg:w-[160px] aspect-square hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgb(0,162,192,0.15)] transition-all duration-300"
            >
              <img 
                src={item.image || `/og/${idx + 1}.png`} 
                alt={item.alt || "Certification Logo"} 
                className="max-w-[90%] max-h-[90%] object-contain" 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}