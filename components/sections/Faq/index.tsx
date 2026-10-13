"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Minus, 
  Headphones, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { FaqSectionData } from '@/components/types';

export default function Faq({ data }: { data?: FaqSectionData }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const subtitle = data?.subtitle || "FAQS";
  const title = data?.title || "Frequently Asked";
  const titleHighlight = data?.titleHighlight || "Questions";
  const items = data?.items || [];
  const sidebar = data?.sidebar;

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const getContactIcon = (iconName?: string) => {
    switch (iconName?.toLowerCase()) {
      case 'phone':
        return <Phone className="w-4 h-4 text-[#00a2c0]" />;
      case 'mail':
        return <Mail className="w-4 h-4 text-[#00a2c0]" />;
      case 'mappin':
      case 'map_pin':
      case 'location':
        return <MapPin className="w-4 h-4 text-[#00a2c0]" />;
      default:
        return <Phone className="w-4 h-4 text-[#00a2c0]" />;
    }
  };

  return (
    <section id="faq-section" className="py-6 sm:py-8 lg:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-7 lg:mb-8"
        >
          {/* Subtitle with horizontal theme cyan lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071536] tracking-tight">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Column: FAQ Accordion List */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-2 sm:gap-2.5">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              const itemNumber = item.number || String(idx + 1).padStart(2, '0');

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (idx % 6) * 0.04 }}
                  className={`rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border border-[#00a2c0]/40 bg-[#f0fbfd]/50 shadow-[0_4px_18px_rgba(0,162,192,0.06)]'
                      : 'border border-[#e2e8f0] bg-white hover:border-[#00a2c0]/40 hover:shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between py-2.5 px-3.5 sm:py-3 sm:px-4 text-left gap-3 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 flex-1">
                      {/* Number Badge */}
                      <span
                        className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-[12px] sm:text-[13px] shrink-0 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#00a2c0] text-white shadow-sm shadow-[#00a2c0]/30'
                            : 'bg-[#00a2c0]/10 text-[#00a2c0] group-hover:bg-[#00a2c0]/20'
                        }`}
                      >
                        {itemNumber}
                      </span>

                      {/* Question Text */}
                      <span className="font-bold text-[#071536] text-[14.5px] sm:text-[15.5px] leading-snug group-hover:text-[#00a2c0] transition-colors">
                        {item.question}
                      </span>
                    </div>

                    {/* Toggle Icon Button */}
                    <div
                      className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#00a2c0] text-white'
                          : 'bg-[#00a2c0]/10 text-[#00a2c0] group-hover:bg-[#00a2c0] group-hover:text-white'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expanded Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-0.5 pb-3.5 pl-11 sm:pl-13 pr-4 sm:pr-6 text-[#475569] text-[13.5px] sm:text-[14px] leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 self-start z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-[#e2e8f0] p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col"
            >
              {/* Sidebar Image */}
              <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 mb-4 relative group shadow-sm">
                <img
                  src={sidebar?.image || "/banner/mfg2.webp"}
                  alt="Support Specialist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Headset Icon */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#00a2c0] text-white flex items-center justify-center shadow-md shadow-[#00a2c0]/25 mb-3 mx-auto">
                <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-extrabold text-[#071536] text-center mb-1.5">
                {sidebar?.title || "Still Have Questions?"}
              </h3>
              <p className="text-[#64748b] text-[13px] sm:text-[13.5px] text-center leading-relaxed mb-4">
                {sidebar?.description || "Our team is here to help you with any queries related to our products, manufacturing process or services."}
              </p>

              {/* Contact Us Button */}
              <Link
                href={sidebar?.button?.href || "/contact"}
                className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-[#00a2c0] hover:bg-[#008b9e] text-white font-bold text-[14px] sm:text-[14.5px] flex items-center justify-center gap-2.5 shadow-md shadow-[#00a2c0]/20 hover:shadow-lg transition-all group mb-4"
              >
                <span>{sidebar?.button?.text || "Contact Us"}</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#00a2c0] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>

              {/* Contact Info List */}
              <div className="space-y-3 pt-3 border-t border-[#f1f5f9]">
                {sidebar?.contact_info?.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#00a2c0]/10 flex items-center justify-center shrink-0 mt-0.5">
                      {getContactIcon(info.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#071536] font-bold text-[13px] sm:text-[13.5px]">
                        {info.title}
                      </span>
                      {info.subtitle && (
                        <span className="text-[#64748b] text-[11.5px] sm:text-[12px]">
                          {info.subtitle}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
