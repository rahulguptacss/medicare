import React from 'react';
import { MapPin, Mail, Phone, ChevronRight, Clock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer({ data }: any) {
  // Hardcoded lists matching the screenshot for perfect alignment
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Manufacturing Facilities", href: "/manufacturing" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Enquiry Now", href: "/enquiry" }
  ];

  const productRange = [
    { name: "Tablets", href: "/products/tablets" },
    { name: "Capsules", href: "/products/capsules" },
    { name: "Syrups", href: "/products/syrups" },
    { name: "Injections", href: "/products/injections" },
    { name: "Ointments & Creams", href: "/products/ointments" },
    { name: "Sachets & Powders", href: "/products/sachets" },
    { name: "Eye & Ear Drops", href: "/products/drops" },
    { name: "Respiratory Products", href: "/products/respiratory" }
  ];

  return (
    <footer className="relative bg-[#021f3a] text-gray-300 pt-12 pb-6 text-sm overflow-hidden border-t border-white/5">
      {/* Background Texture Element */}
      <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none w-full h-full">
         <img src="/banner/cta.png" className="w-full h-full object-cover" alt="" />
         <div className="absolute inset-0 bg-[#021f3a]/90"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-y-0 mb-10">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-3 lg:pr-8 xl:pr-10 lg:border-r border-white/10">
            <img src="/logo/white-logo.png" alt="Medicare Life Sciences" className="h-16 sm:h-20 mb-4 object-contain" />
            <p className="text-[#a8b8c8] text-[11px] leading-relaxed mb-5 pr-4">
              We are committed to delivering high quality pharmaceutical products for a healthier and brighter future.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-[#3b5998] flex items-center justify-center text-white transition-transform hover:-translate-y-1 shadow-lg">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#007bb5] flex items-center justify-center text-white transition-transform hover:-translate-y-1 shadow-lg">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#1da1f2] flex items-center justify-center text-white transition-transform hover:-translate-y-1 shadow-lg">
                <FaTwitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center text-white transition-transform hover:-translate-y-1 shadow-lg">
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:px-4 xl:px-5 lg:border-r border-white/10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link, idx) => (
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
          <div className="lg:col-span-2 lg:px-4 xl:px-5 lg:border-r border-white/10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              Our Product Range
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-1.5">
              {productRange.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[#a8b8c8] hover:text-[#00a2c0] transition-colors flex items-center gap-2 text-[11px]">
                    <ChevronRight className="w-3 h-3 text-[#00a2c0]" strokeWidth={3} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 lg:px-8 xl:px-10 lg:border-r border-white/10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              Contact Information
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Our Address</h5>
                  <p className="text-[#a8b8c8] text-[11px] leading-relaxed">123 Pharma City, Industrial Area,<br/>New Delhi - 110001, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Call Us</h5>
                  <p className="text-[#a8b8c8] text-[11px] leading-relaxed">+91 98765 43210<br/>+91 11 2345 6789</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0d3b66] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-white font-semibold text-[12px] mb-0.5">Email Us</h5>
                  <p className="text-[#a8b8c8] text-[11px] leading-relaxed break-words">info@medicarelifesciences.com</p>
                </div>
              </li>

            </ul>
          </div>

          {/* Column 5: Gallery */}
          <div className="lg:col-span-2 lg:pl-8 xl:pl-10">
            <h4 className="text-white font-bold text-[14px] mb-4 relative pb-2">
              Our Gallery
              <span className="absolute bottom-0 left-0 w-6 h-[2px] bg-[#00a2c0]"></span>
            </h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {(data?.gallery?.length > 0 ? data.gallery.slice(0, 4) : [
                { image: "/services/1.png", alt: "Gallery 1" },
                { image: "/services/2.png", alt: "Gallery 2" },
                { image: "/services/3.png", alt: "Gallery 3" },
                { image: "/services/4.png", alt: "Gallery 4" }
              ]).map((g: any, idx: number) => (
                <img key={idx} src={g.image} className="w-full h-12 sm:h-14 object-cover rounded-md border border-white/20 hover:opacity-80 transition-opacity cursor-pointer" alt={g.alt || `Gallery ${idx + 1}`} />
              ))}
            </div>
            <a href="/gallery" className="text-[#00a2c0] hover:text-white transition-colors text-[11px] font-semibold flex items-center gap-1.5 inline-flex">
              View All Photos <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-[#00a2c0] flex flex-col items-center justify-center gap-4 text-[#a8b8c8] text-[11px] text-center w-full">
          <p>Copyright © 2026. All rights reserved. Powered by Lestow</p>
        </div>
      </div>
    </footer>
  );
}