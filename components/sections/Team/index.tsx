"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  specialty: string;
  image: string;
}

interface TeamSectionData {
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  items?: TeamMember[];
}

export default function Team({ data }: { data?: TeamSectionData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const subtitle = data?.subtitle || "OUR TEAM";
  const title = data?.title || "Meet Our Expert";
  const titleHighlight = data?.titleHighlight || "Team";
  const description = data?.description || "Our team of experienced professionals is dedicated to ensuring high-quality healthcare solutions through innovation, expertise and a commitment to excellence.";

  const members = data?.items || [];
  const totalPages = Math.ceil(members.length / itemsPerPage) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMembers = members.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const element = document.getElementById('team-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team-section" className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-5 lg:mb-6"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071536] tracking-tight mb-2.5 sm:mb-3">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>

          <p className="text-[#64748b] text-[14px] sm:text-[15px] lg:text-[16px] max-w-[760px] mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Team Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-4"
          >
            {currentMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (idx % itemsPerPage) * 0.05 }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#e2e8f0]/80 p-3 sm:p-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3.8] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Info Container */}
                <div className="text-center pt-3.5 pb-1.5 flex flex-col items-center">
                  <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-[#071536] group-hover:text-[#00a2c0] transition-colors mb-1.5">
                    {member.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#00a2c0] rounded-full mb-1.5"></div>
                  <p className="text-[#64748b] text-[13px] sm:text-[14px] font-medium m-0">
                    {member.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 ${
                currentPage === 1
                  ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400'
                  : 'border-gray-200 text-[#071536] hover:bg-gray-50 hover:border-[#00a2c0] hover:text-[#00a2c0]'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-[14px] sm:text-[15px] transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0066d4] text-white shadow-md'
                      : 'border border-gray-200 text-[#071536] hover:bg-gray-50 hover:border-[#00a2c0] hover:text-[#00a2c0]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-200 ${
                currentPage === totalPages
                  ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400'
                  : 'border-gray-200 text-[#071536] hover:bg-gray-50 hover:border-[#00a2c0] hover:text-[#00a2c0]'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
