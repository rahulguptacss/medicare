"use client";

import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Topbar({ data }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden md:block bg-[#0b2c4d] text-white overflow-hidden w-full"
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row text-xs min-h-[50px]">
        
        {/* Left side: Dark blue background with contact info */}
        <div className="flex-1 flex items-center justify-center md:justify-start px-4 lg:px-12 py-3 md:py-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-3 lg:gap-8">
            {data?.contact_info?.map((info: any, idx: number) => (
              <React.Fragment key={idx}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {info.icon === 'Phone' && <Phone className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                    {info.icon === 'MapPin' && <MapPin className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                    {info.icon === 'Mail' && <Mail className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs leading-tight text-center md:text-left">{info.title}</span>
                    <span className="text-[10px] text-gray-300 leading-tight mt-0.5 hidden sm:block">{info.subtitle}</span>
                  </div>
                </motion.div>
                {idx < data.contact_info.length - 1 && (
                  <div className="hidden md:block w-px h-7 bg-white/20"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
  
        {/* Right side: Teal background with slant */}
        <div className="relative bg-[#008e9b] px-4 md:px-10 lg:px-16 flex items-center justify-center py-3 md:py-0 shrink-0 before:content-[''] before:absolute before:left-full before:top-0 before:bottom-0 before:w-[50vw] before:bg-[#008e9b]">
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-[#008e9b] transform -translate-x-4 skew-x-[20deg]"></div>
        
        <div className="flex items-center gap-3 relative z-10">
          {data?.socials?.map((social: any, idx: number) => (
            <motion.a 
              key={idx} 
              href={social.href} 
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#008e9b] hover:bg-gray-100 transition-colors shadow-sm"
            >
              {social.icon === 'Facebook' && <FaFacebookF className="w-3.5 h-3.5" />}
              {social.icon === 'Twitter' && <FaTwitter className="w-3.5 h-3.5" />}
              {social.icon === 'Linkedin' && <FaLinkedinIn className="w-3.5 h-3.5" />}
              {social.icon === 'Instagram' && <FaInstagram className="w-3.5 h-3.5" />}
            </motion.a>
          ))}
        </div>
      </div>

      </div>
    </motion.div>
  );
}