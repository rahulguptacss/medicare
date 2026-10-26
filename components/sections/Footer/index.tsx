import React from 'react';
import { MapPin, Mail, Phone, ChevronRight, Clock } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer({ data }: any) {
  // All menus and content called directly from data.json with clean fallbacks
  const quickLinks = data?.quick_links || [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing Facilities", href: "/manufacturing-facilities" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Enquiry Now", href: "/enquiry-now" }
  ];

  const productRange = data?.product_range || [
    { name: "Paracetamol Tablets IP 500 mg", href: "/products/paracetamol-tablets-ip-500-mg" },
    { name: "Omeprazole Capsules 20 mg", href: "/products/omeprazole-capsules-20-mg" },
    { name: "Ambroxol Hydrochloride Syrup", href: "/products/ambroxol-hydrochloride-syrup" },
    { name: "Ceftriaxone Injection IP 1g", href: "/products/ceftriaxone-injection-ip-1g" },
    { name: "Mupirocin Ointment 2% w/w", href: "/products/mupirocin-ointment-2-ww" },
    { name: "Oral Rehydration Salts (ORS)", href: "/products/oral-rehydration-salts" },
    { name: "Moxifloxacin Eye Drops", href: "/products/moxifloxacin-eye-drops" },
    { name: "Salbutamol Inhaler", href: "/products/salbutamol-inhaler" }
  ];

  const quickLinksTitle = data?.quick_links_title || "Quick Links";
  const productRangeTitle = data?.product_range_title || "Our Product Range";
  const contactTitle = data?.contact_title || "Contact Information";
  const aboutText = data?.description || "We are committed to delivering high quality pharmaceutical products for a healthier and brighter future.";
  const logoSrc = data?.logo || "/logo/white-logo.webp";
  const logoAlt = data?.logo_text || "Medicare Life Sciences";
  const copyrightText = data?.copyright || "Copyright © 2026. All rights reserved. Powered by Lestow";

  return (
    <footer className="relative bg-[#021f3a] text-gray-300 pt-12 pb-6 text-sm overflow-hidden border-t border-white/5">
      {/* Background Texture Element */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-full h-full">
        <img src="/banner/cta.webp" className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-[#021f3a]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-0 lg:gap-y-0 mb-10">

          {/* Column 1: Logo & About */}
          <div className="lg:pr-8 xl:pr-10 lg:border-r border-white/10">
            <img src={logoSrc} alt={logoAlt} className="h-16 sm:h-20 mb-4 object-contain" />
            <p className="text-[#a8b8c8] text-[11px] leading-relaxed mb-5 pr-2">
              {aboutText}
            </p>
            <div className="flex gap-2">
              {(data?.socials || [
                { icon: "Facebook", href: "https://www.facebook.com/" },
                { icon: "Linkedin", href: "https://www.linkedin.com/" },
                { icon: "Twitter", href: "https://x.com/" },
                { icon: "Instagram", href: "https://www.instagram.com/" },
                { icon: "Youtube", href: "https://www.youtube.com/" }
              ]).map((social: any, idx: number) => {
                const getSocialBg = (icon: string) => {
                  switch (icon?.toLowerCase()) {
                    case 'facebook': return 'bg-[#3b5998]';
                    case 'linkedin': return 'bg-[#007bb5]';
                    case 'twitter':
                    case 'x': return 'bg-black hover:bg-neutral-800';
                    case 'instagram': return 'bg-[#e1306c]';
                    case 'youtube': return 'bg-[#ff0000]';
                    default: return 'bg-[#00a2c0]';
                  }
                };
                return (
                  <a
                    key={idx}
                    href={social.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.icon}
                    className={`w-7 h-7 rounded-full ${getSocialBg(social.icon)} flex items-center justify-center text-white transition-transform hover:-translate-y-1 shadow-lg`}
                  >
                    {social.icon?.toLowerCase() === 'facebook' && <FaFacebookF className="w-3.5 h-3.5" />}
                    {social.icon?.toLowerCase() === 'linkedin' && <FaLinkedinIn className="w-3.5 h-3.5" />}
                    {(social.icon?.toLowerCase() === 'twitter' || social.icon?.toLowerCase() === 'x') && <FaXTwitter className="w-3.5 h-3.5" />}
                    {social.icon?.toLowerCase() === 'instagram' && <FaInstagram className="w-3.5 h-3.5" />}
                    {social.icon?.toLowerCase() === 'youtube' && <FaYoutube className="w-3.5 h-3.5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:px-6 xl:px-8 lg:border-r border-white/10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              {quickLinksTitle}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link: any, idx: number) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#a8b8c8] hover:text-[#00a2c0] transition-colors flex items-center gap-2 text-[11px]">
                    <ChevronRight className="w-3 h-3 text-[#00a2c0]" strokeWidth={3} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Range */}
          <div className="lg:px-6 xl:px-8 lg:border-r border-white/10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              {productRangeTitle}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-1.5">
              {productRange.map((link: any, idx: number) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#a8b8c8] hover:text-[#00a2c0] transition-colors flex items-center gap-2 text-[11px] leading-snug">
                    <ChevronRight className="w-3 h-3 text-[#00a2c0] shrink-0" strokeWidth={3} />
                    <span className="truncate block" title={link.name}>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:pl-6 xl:pl-8">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              {contactTitle}
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Our Address</h5>
                  <p className="text-[#a8b8c8] text-[11px] leading-relaxed">
                    {data?.contact?.address ? data.contact.address.split('\n').map((line: string, i: number) => (
                      <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                    )) : (
                      <>123 Education Lane,<br />New York, NY 10001</>
                    )}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Call Us</h5>
                  <a href={`tel:${data?.contact?.phone || '+100000000000'}`} className="text-[#a8b8c8] hover:text-[#00a2c0] transition-colors text-[11px] leading-relaxed block">
                    {data?.contact?.phone || '+100000000000'}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Email Us</h5>
                  <a href={`mailto:${data?.contact?.email || 'info@xyz.com'}`} className="text-[#a8b8c8] hover:text-[#00a2c0] transition-colors text-[11px] leading-relaxed break-words block">
                    {data?.contact?.email || 'info@xyz.com'}
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-[#00a2c0] flex flex-col items-center justify-center gap-4 text-[#a8b8c8] text-[11px] text-center w-full">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}