"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ data }: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm w-full"
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-stretch h-16 md:h-20">
        
        <div className="relative bg-gray-50 flex items-center shrink-0 w-auto md:w-56 xl:w-[280px] h-full md:before:content-[''] md:before:absolute md:before:right-full md:before:top-0 md:before:bottom-0 md:before:w-[50vw] md:before:bg-gray-50">
          <div className="hidden md:block absolute right-[-10px] top-0 bottom-0 w-6 bg-gray-50 transform skew-x-[15deg] border-r border-gray-200 z-10"></div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="px-3 md:px-4 lg:px-6 relative z-20 flex items-center w-full h-full"
          >
            <Link href="/">
              <img src={data?.logo || '/logo/logo.png'} alt="Medicare Life Sciences" className="h-10 md:h-16 object-contain" />
            </Link>
          </motion.div>
        </div>
  
        {/* Right side: Navigation and Button */}
        <div className="flex-1 flex items-center justify-end xl:justify-between px-4 lg:px-8 relative z-20 h-full">
        
        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 h-full">
          {data?.links?.map((link: any, idx: number) => (
            <Link 
              key={idx} 
              href={link.href} 
              className={`text-xs font-semibold h-full flex items-center relative transition-colors ${
                link.active ? 'text-[#008e9b]' : 'text-[#0b2c4d] hover:text-[#008e9b]'
              }`}
            >
              <div className="relative group">
                <span>{link.name}</span>
                {link.active ? (
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#008e9b] rounded-full"
                  />
                ) : (
                  <span className="absolute -bottom-1.5 left-0 w-0 right-0 h-[2px] bg-[#008e9b] rounded-full transition-all duration-300 group-hover:w-full"></span>
                )}
              </div>
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center shrink-0 ml-auto xl:ml-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href={data?.button_link || '#'} 
              className="flex items-center gap-1.5 md:gap-3 bg-[#008e9b] hover:bg-[#007a86] text-white px-4 md:pl-6 md:pr-1.5 py-2 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all group shadow-md shadow-[#008e9b]/20"
            >
              <span>{data?.button_text}</span>
              <div className="hidden md:flex w-8 h-8 rounded-full bg-white items-center justify-center shrink-0 group-hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#008e9b] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <ArrowRight className="w-3.5 h-3.5 md:hidden" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex xl:hidden ml-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#0b2c4d] hover:text-[#008e9b] transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 xl:hidden overflow-hidden flex flex-col"
          >
            <div className="px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {data?.links?.map((link: any, idx: number) => (
                <Link 
                  key={idx} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    link.active ? 'bg-[#008e9b]/10 text-[#008e9b]' : 'text-[#0b2c4d] hover:bg-gray-50 hover:text-[#008e9b]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}