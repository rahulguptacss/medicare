"use client";

import React from 'react';
import { ShieldCheck, Users, Settings, Handshake, Target, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  icon?: string;
}

interface Card {
  title: string;
  description: string;
  icon?: string;
}

interface AboutData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  title_line2?: string;
  description?: string;
  features?: Feature[];
  button?: {
    text: string;
    href: string;
  };
  image?: string;
  cards?: Card[];
}

export default function About({ data }: { data: AboutData }) {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0: return <ShieldCheck className="w-7 h-7 lg:w-[30px] lg:h-[30px]" strokeWidth={2} />;
      case 1: return <Users className="w-7 h-7 lg:w-[30px] lg:h-[30px]" strokeWidth={2} />;
      case 2: return <Settings className="w-7 h-7 lg:w-[30px] lg:h-[30px]" strokeWidth={2} />;
      case 3: return <Handshake className="w-7 h-7 lg:w-[30px] lg:h-[30px]" strokeWidth={2} />;
      default: return <ShieldCheck className="w-7 h-7 lg:w-[30px] lg:h-[30px]" strokeWidth={2} />;
    }
  };

  const getCardIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />;
      case 1: return <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />;
      case 2: return <Users className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />;
      default: return <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={2} />;
    }
  };

  // Safe fallbacks to ensure the layout matches the screenshot even if data is partial
  const features = data?.features && data.features.length > 0 ? data.features : [
    { title: "High Quality Products" },
    { title: "Patient-Centric Approach" },
    { title: "Innovation Driven" },
    { title: "Global Healthcare Impact" }
  ];

  const cards = data?.cards && data.cards.length > 0 ? data.cards : [
    { title: "Our Mission", description: "Better Healthcare for All" },
    { title: "Our Vision", description: "To Be a Global Pharma Leader" },
    { title: "Our Values", description: "Quality, Integrity & Patient Care" }
  ];

  return (
    <section className="pt-10 pb-6 lg:pt-12 lg:pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-8 items-center">
        
        {/* Left Column Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:pl-4 xl:pl-8"
        >
          {/* Subtitle */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-[#00b4d8]"></span>
            <span className="text-[#0b2c4d] text-xs font-bold tracking-[0.2em] uppercase">
              {data?.subtitle || "ABOUT US"}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0b2c4d] mb-1 leading-[1.15]">
            {data?.title_line1 || "Medicare"} <span className="text-[#00b4d8]">{data?.title_highlight || "Life Sciences"}</span>
          </h2>
          
          <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0b2c4d] mb-3">
            {data?.title_line2 || "Committed to a Healthier Tomorrow"}
          </h3>

          <p className="text-[#4b5563] text-sm sm:text-[15px] leading-relaxed mb-4 max-w-[95%]">
            {data?.description || "Medicare Life Sciences is a trusted pharmaceutical company engaged in the manufacturing and supply of high-quality, affordable medicines. We are driven by a strong commitment to improve global healthcare through innovation, quality and patient-centric approach."}
          </p>

          {/* Features Row */}
          <div className="flex items-start justify-between mb-6">
            {features.map((f, idx) => (
              <div 
                key={idx} 
                className={`flex-1 flex flex-col items-center text-center px-2 lg:px-3 ${idx !== features.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <div className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-[#eef8fc] flex items-center justify-center mb-3 mx-auto text-[#006894] shadow-sm">
                  {getFeatureIcon(idx)}
                </div>
                <span className="text-[10px] lg:text-[11px] font-bold text-[#0b2c4d] leading-snug max-w-[100px]">
                  {f.title}
                </span>
              </div>
            ))}
          </div>

          {/* Know More Button */}
          <a 
            href={data?.button?.href || "#"} 
            className="inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#009bc2] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold shadow-lg shadow-[#00b4d8]/30 transition-all group"
          >
            <span className="text-sm">{data?.button?.text || "Know More"}</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#00b4d8] group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* Right Column Image & Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 lg:mt-0 pl-2 pr-8 lg:pl-4 lg:pr-12 py-6"
        >
          {/* Background shapes */}
          <div className="absolute top-0 right-0 lg:right-4 bottom-8 lg:bottom-12 left-0 bg-[#e6f4fb] rounded-[2.5rem] lg:rounded-[3rem] -z-10"></div>
          
          {/* Dots Pattern top-left */}
          <div className="absolute -top-4 left-6 grid grid-cols-4 gap-2 opacity-40">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-[#00b4d8] rounded-full"></div>
            ))}
          </div>

          {/* Main Image */}
          <div className="rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl relative w-full aspect-[4/3.2]">
            <img 
              src={data?.image || "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
              alt="Facility" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Overlapping Right Cards */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 sm:-right-2 lg:-right-6 flex flex-col gap-2 sm:gap-3 lg:gap-4 z-10">
            {cards.map((card, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                key={idx} 
                className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 lg:p-4 pr-3 sm:pr-5 lg:pr-6 rounded-[0.75rem] lg:rounded-[1.25rem] shadow-[0_15px_40px_rgb(0,0,0,0.08)] flex items-center gap-2 sm:gap-3 lg:gap-4 w-[160px] sm:w-[200px] lg:w-[240px] border border-white/50 transform hover:-translate-x-1 sm:hover:-translate-x-2 transition-transform cursor-default"
              >
                <div className={`w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] rounded-full flex items-center justify-center shrink-0 shadow-sm ${idx === 1 ? 'bg-[#0091ad]' : 'bg-[#0b2c4d]'}`}>
                  {getCardIcon(idx)}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#0b2c4d] font-bold text-[14px] lg:text-[16px] mb-1">{card.title}</h4>
                  <div className="w-6 h-[2px] bg-[#00b4d8] mb-1.5 rounded-full"></div>
                  <p className="text-[#64748b] font-medium text-[10px] lg:text-[12px] leading-[1.3]">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}