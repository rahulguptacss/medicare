"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GallerySectionData } from '@/components/types';

export default function Gallery({ data }: { data?: GallerySectionData }) {
  const subtitle = data?.subtitle || "GALLERY";
  const title = data?.title || "Our Manufacturing";
  const titleHighlight = data?.titleHighlight || "Gallery";
  const description = data?.description || "Take a look at our state-of-the-art manufacturing facilities, advanced technology, quality control processes and team in action.";
  const items = data?.items || [];

  // Lightbox state
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null || items.length === 0) return;
    setSelectedIdx((prev) => (prev === null ? 0 : (prev - 1 + items.length) % items.length));
  }, [selectedIdx, items.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null || items.length === 0) return;
    setSelectedIdx((prev) => (prev === null ? 0 : (prev + 1) % items.length));
  }, [selectedIdx, items.length]);

  const handleClose = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handleClose, handlePrev, handleNext]);

  return (
    <section id="gallery-section" className="py-8 sm:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          {/* Subtitle with horizontal cyan lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071536] tracking-tight mb-2.5 sm:mb-3">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-[#64748b] text-[14px] sm:text-[15px] lg:text-[16px] max-w-[760px] mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 4-Column Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
              onClick={() => setSelectedIdx(idx)}
              className="bg-white rounded-2xl border border-gray-200/90 p-2 sm:p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle Hover Gradient & Overlay Icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071536]/80 via-[#071536]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-3.5">
                  {item.category && (
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#00e5ff] drop-shadow-sm mb-1">
                      {item.category}
                    </span>
                  )}
                  <h4 className="text-white text-[13px] sm:text-[14px] font-bold leading-snug drop-shadow-sm line-clamp-1">
                    {item.title}
                  </h4>
                </div>

                {/* Floating Zoom Button */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#071536] group-hover:text-[#00a2c0] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && items[selectedIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#071536]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Dialog Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative max-w-4xl w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 bg-white">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#071536]">
                    {items[selectedIdx].title}
                  </h3>
                  {items[selectedIdx].category && (
                    <span className="text-xs font-semibold text-[#00a2c0]">
                      {items[selectedIdx].category}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {selectedIdx + 1} / {items.length}
                  </span>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
                    aria-label="Close lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative bg-gray-950 flex items-center justify-center max-h-[70vh] min-h-[300px] overflow-hidden">
                <img
                  src={items[selectedIdx].image}
                  alt={items[selectedIdx].title}
                  className="max-h-[70vh] w-auto object-contain mx-auto select-none"
                />

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#071536] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#071536] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
