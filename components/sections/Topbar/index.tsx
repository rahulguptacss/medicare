"use client";

import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { common, TopbarData } from '@/components/types';

export default function Topbar({ data }: { data?: TopbarData | any }) {
  const topbarData = data || common?.Topbar;
  const contactInfo = topbarData?.contact_info || [];
  const socials = topbarData?.socials || [];

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
            {contactInfo.map((info: any, idx: number) => {
              const isPhone = info.icon === 'Phone';
              const isMail = info.icon === 'Mail';
              const href = info.href || (isPhone ? `tel:${info.title}` : isMail ? `mailto:${info.title}` : undefined);

              const content = (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {info.icon === 'Phone' && <Phone className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                    {info.icon === 'MapPin' && <MapPin className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                    {info.icon === 'Mail' && <Mail className="w-3.5 h-3.5 text-[#0b2c4d]" />}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-xs leading-tight text-center md:text-left">{info.title}</span>
                    {info.subtitle && (
                      <span className="text-[10px] text-gray-300 leading-tight mt-0.5 hidden sm:block">{info.subtitle}</span>
                    )}
                  </div>
                </div>
              );

              return (
                <React.Fragment key={idx}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    {href ? (
                      <a href={href} className="hover:text-cyan-200 transition-colors">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </motion.div>
                  {idx < contactInfo.length - 1 && (
                    <div className="hidden md:block w-px h-7 bg-white/20"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
  
        {/* Right side: Teal background with slant */}
        <div className="relative bg-[#008e9b] px-4 md:px-10 lg:px-16 flex items-center justify-center py-3 md:py-0 shrink-0 before:content-[''] before:absolute before:left-full before:top-0 before:bottom-0 before:w-[50vw] before:bg-[#008e9b]">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-[#008e9b] transform -translate-x-4 skew-x-[20deg]"></div>
          
          <div className="flex items-center gap-3 relative z-10">
            {socials.map((social: any, idx: number) => (
              <motion.a 
                key={idx} 
                href={social.href || '#'} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.icon}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#008e9b] hover:bg-gray-100 transition-colors shadow-sm"
              >
                {social.icon === 'Facebook' && <FaFacebookF className="w-3.5 h-3.5" />}
                {(social.icon === 'Twitter' || social.icon === 'X' || social.icon === 'FaXTwitter') && <FaXTwitter className="w-3.5 h-3.5" />}
                {social.icon === 'Linkedin' && <FaLinkedinIn className="w-3.5 h-3.5" />}
                {social.icon === 'Instagram' && <FaInstagram className="w-3.5 h-3.5" />}
                {social.icon === 'Youtube' && <FaYoutube className="w-3.5 h-3.5" />}
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}