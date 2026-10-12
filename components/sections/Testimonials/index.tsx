"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials({ data }: any) {
  const [index, setIndex] = useState(0);
  const reviews = data?.reviews || [];

  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  if (!reviews.length) return null;

  const currentReview = reviews[index];

  return (
    <section className="py-10 lg:py-14 bg-[#f8fbfc] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#eef6fc] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70 -z-10"></div>
      <div className="absolute bottom-20 right-10 opacity-30 -z-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#00a2c0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div className="absolute top-32 right-16 opacity-10 -z-10">
        <svg width="120" height="120" viewBox="0 0 44 44" fill="#00a2c0">
          <path d="M12.5 5.5C8.634 5.5 5.5 8.634 5.5 12.5C5.5 16.366 8.634 19.5 12.5 19.5C13.882 19.5 15.172 19.1 16.273 18.423C15.656 22.84 31.164 26.248 26.828 26.684C26.03 26.764 25.5 27.525 25.643 28.312C25.772 29.023 26.375 29.5 27.083 29.5C33.717 29.5 39.5 24.12 39.5 17.5V12.5C39.5 8.634 36.366 5.5 32.5 5.5H31.5Z" />
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
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
              {data?.subtitle || "TESTIMONIALS"}
            </span>
            <span className="w-8 lg:w-12 h-[1px] bg-[#00a2c0]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b2c4d] mb-0 leading-tight">
            {data?.title_line1 || "What Our"} <span className="text-[#00a2c0]">{data?.title_highlight || "Clients Say"}</span>
          </h2>
          <p className="text-[#64748b] max-w-[650px] mx-auto text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed">
            {data?.description || "Trusted by healthcare professionals and partners worldwide for our quality products and reliable services."}
          </p>
        </motion.div>

        {/* Main Card Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.04)] flex flex-col md:flex-row p-3 sm:p-4 md:p-5 lg:p-5 gap-4 lg:gap-5 items-stretch relative z-10"
        >
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col justify-between pt-2 sm:pt-4 px-3 sm:px-4 lg:px-6 pb-2">
            <div>
              <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#fd8b51] mb-1 lg:mb-2" viewBox="0 0 44 44" fill="none">
                <path d="M12.5 5.5C8.634 5.5 5.5 8.634 5.5 12.5C5.5 16.366 8.634 19.5 12.5 19.5C13.882 19.5 15.172 19.1 16.273 18.423C15.656 22.84 12.164 26.248 7.828 26.684C7.03 26.764 6.5 27.525 6.643 28.312C6.772 29.023 7.375 29.5 8.083 29.5C14.717 29.5 20.5 24.12 20.5 17.5V12.5C20.5 8.634 17.366 5.5 13.5 5.5H12.5ZM31.5 5.5C27.634 5.5 24.5 8.634 24.5 12.5C24.5 16.366 27.634 19.5 31.5 19.5C32.882 19.5 34.172 19.1 35.273 18.423C34.656 22.84 31.164 26.248 26.828 26.684C26.03 26.764 25.5 27.525 25.643 28.312C25.772 29.023 26.375 29.5 27.083 29.5C33.717 29.5 39.5 24.12 39.5 17.5V12.5C39.5 8.634 36.366 5.5 32.5 5.5H31.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[90px] sm:min-h-[80px] lg:min-h-[90px]"
                >
                  <p className="text-[#0b2c4d] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] font-medium mb-2 lg:mb-3">
                    {currentReview.text}
                  </p>
                  <h4 className="text-[#0b2c4d] font-bold text-[17px] lg:text-[19px] mb-1">{currentReview.author}</h4>
                  <span className="text-[#64748b] text-[13px] lg:text-[14px]">{currentReview.role}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 mt-2 lg:mt-3">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#eaf5fb] text-[#00a2c0] flex items-center justify-center hover:bg-[#00a2c0] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </motion.button>
              <div className="flex items-center gap-1.5 lg:gap-2 px-2">
                {reviews.map((_: any, i: number) => (
                  <motion.button 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    key={i} 
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-300 ${i === index ? 'w-3 h-3 bg-[#00a2c0]' : 'w-2 h-2 bg-[#e2e8f0] hover:bg-[#cbd5e1]'}`}
                  ></motion.button>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#eaf5fb] text-[#00a2c0] flex items-center justify-center hover:bg-[#00a2c0] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </motion.button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full md:w-[42%] lg:w-[45%] relative mt-6 md:mt-0">
            {/* Dark Blue Background Shape */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-full h-[85%] bg-[#0b5b88] rounded-[1.5rem] lg:rounded-[2rem] -z-10 hidden sm:block"></div>
            
            <div className="relative w-full h-[150px] sm:h-[180px] md:h-full min-h-[160px] lg:min-h-[200px] rounded-[1.25rem] lg:rounded-[1.5rem] overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={currentReview.image}
                  alt={currentReview.author}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Floating Rating Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 -left-2 sm:-left-6 lg:bottom-4 lg:-left-8 bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-20 flex flex-col items-center sm:items-start"
            >
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div key={star} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + (star * 0.1) }}>
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-[#0b2c4d] font-bold text-[11px] sm:text-[13px]">{currentReview.badge}</span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}