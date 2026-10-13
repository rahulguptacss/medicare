"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PlusPattern = ({ className }: { className: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0H24V16H40V24H24V40H16V24H0V16H16V0Z" />
  </svg>
);

export default function Hero({ data }: any) {
  const slides = data?.slides?.length > 0 ? data.slides : (data ? [data] : []);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeData = slides[currentSlide];

  return (
    <section className="relative min-h-[450px] lg:min-h-[500px] flex items-center overflow-hidden bg-[#07325b] text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg-pattern.webp')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07325b] via-[#07325b]/90 to-transparent"></div>
      
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PlusPattern className="absolute bottom-10 left-10 text-white/5 w-16 h-16 lg:w-24 lg:h-24" />
        <PlusPattern className="absolute top-16 right-[20%] text-white/5 w-12 h-12 lg:w-16 lg:h-16" />
        <div className="absolute top-1/4 right-10 w-32 h-32 border-[10px] border-dotted border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full py-16 lg:py-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <div className="max-w-xl xl:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-4"
              >
                <span className="w-6 h-[2px] bg-[#02c3c6]"></span>
                <span className="text-gray-300 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                  {activeData?.badge_text || "YOUR HEALTH, OUR PRIORITY"}
                </span>
              </motion.div>
              
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4"
              >
                {activeData?.title_line1 || "Quality Medicines"} <br/>
                {activeData?.title_line2 || "for a "} 
                <span className="text-[#02c3c6]">
                  {activeData?.title_highlight || "Healthier"} <br className="hidden lg:block" /> {activeData?.title_line3 || "Tomorrow"}
                </span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed max-w-[90%] mx-auto lg:mx-0"
              >
                {activeData?.description || "We are committed to manufacturing high-quality, safe and affordable pharmaceutical products to improve lives and build a healthier world."}
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                <a 
                  href={activeData?.primary_button?.href || "#"} 
                  className="group bg-[#02c3c6] hover:bg-[#02a9ab] text-white pl-5 pr-1.5 py-1.5 rounded-full font-bold transition-all flex items-center gap-3 shadow-lg shadow-[#02c3c6]/20"
                >
                  <span className="text-xs md:text-sm">{activeData?.primary_button?.text?.replace(' →', '') || "Explore Our Products"}</span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#02c3c6] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
                
                <a 
                  href={activeData?.secondary_button?.href || "#"} 
                  className="group border border-white/60 hover:border-white hover:bg-white/5 text-white pl-1.5 pr-5 py-1.5 rounded-full font-bold transition-all flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#07325b] group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
                  </div>
                  <span className="text-xs md:text-sm font-medium">{activeData?.secondary_button?.text || "Watch Video"}</span>
                </a>
              </motion.div>
            </div>

            {/* Right Content - Scientist Image & Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mx-auto lg:ml-auto w-full max-w-[420px] mt-8 lg:mt-0"
            >
              {/* Main Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
                <img 
                  src={activeData?.image || "/banner/banner.webp"} 
                  alt="Scientist" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 lg:bottom-8 -right-2 lg:-right-8 bg-white text-[#07325b] p-5 lg:p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center min-w-[180px] lg:min-w-[200px]"
              >
                <div className="mb-3">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16V40M24 24V40M34 16V40M10 40H38" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 16H17M21 24H27M31 16H37" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 28V36M24 32V36M34 28V36" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-3xl lg:text-4xl font-black text-[#0b1b36] leading-none mb-2">{activeData?.floating_badge?.value || "700+"}</span>
                <span className="text-[10px] lg:text-xs font-semibold text-gray-500 mb-3">{activeData?.floating_badge?.label || "Laboratory Experts"}</span>
                <span className="w-8 h-1 bg-[#02c3c6] rounded-full"></span>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Navigation Arrows on sides */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-[#07325b] rounded-full items-center justify-center z-20 shadow-xl hover:bg-gray-100 transition hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-[#07325b] rounded-full items-center justify-center z-20 shadow-xl hover:bg-gray-100 transition hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide ? "bg-[#02c3c6] w-6" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
      
    </section>
  );
}