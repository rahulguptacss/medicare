"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  Check
} from 'lucide-react';
import { ContactSectionData } from '@/components/types';

export default function Contact({ data }: { data?: ContactSectionData }) {
  const subtitle = data?.subtitle || "CONTACT US";
  const title = data?.title || "Get In Touch";
  const titleHighlight = data?.titleHighlight || "With Us";
  const description = data?.description || "We are here to assist you with your manufacturing requirements, product enquiries and business collaborations. Feel free to reach out to us.";

  const infoCard = data?.info_card;
  const formCard = data?.form_card;
  const mapData = data?.map;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom Dropdown State
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject) {
      setIsSubjectOpen(true);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const getInfoIcon = (iconName: string) => {
    const commonClass = "w-5 h-5 text-[#00a2c0] group-hover:text-white transition-colors duration-300 stroke-[2]";
    switch (iconName.toLowerCase()) {
      case 'mappin':
      case 'map_pin':
      case 'location':
        return <MapPin className={commonClass} />;
      case 'phone':
        return <Phone className={commonClass} />;
      case 'mail':
        return <Mail className={commonClass} />;
      case 'clock':
        return <Clock className={commonClass} />;
      default:
        return <MapPin className={commonClass} />;
    }
  };

  const subjectOptions = formCard?.fields?.subject_options || [
    "Contract Manufacturing",
    "Product Inquiry",
    "Third-Party Manufacturing",
    "Export Collaboration",
    "Quality & Compliance",
    "General Inquiry"
  ];

  return (
    <section id="contact-section" className="pt-6 sm:pt-7 lg:pt-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5 sm:mb-6 lg:mb-7"
        >
          {/* Subtitle with horizontal theme cyan lines */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-1.5">
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#00a2c0]"></span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071536] tracking-tight mb-2 sm:mb-2.5">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-[#64748b] text-[14px] sm:text-[15px] lg:text-[16px] max-w-[760px] mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Two Major Cards: Information & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-12">

          {/* Left Card: Our Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 lg:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col md:flex-row gap-5 lg:gap-6 justify-between items-stretch"
          >
            {/* Info details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071536] mb-1.5">
                  {infoCard?.title || "Our Contact"}{" "}
                  <span className="text-[#00a2c0]">{infoCard?.titleHighlight || "Information"}</span>
                </h3>
                <p className="text-[#64748b] text-[13px] sm:text-[13.5px] leading-relaxed mb-5">
                  {infoCard?.description || "Have a question or need assistance? Reach out to us through any of the following contact details."}
                </p>

                {/* 4 Contact Items */}
                <div className="space-y-4">
                  {infoCard?.items?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group cursor-pointer">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#00a2c0]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00a2c0] transition-all duration-300 shadow-sm">
                        {getInfoIcon(item.icon)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#64748b]">
                          {item.title}
                        </span>
                        <span className="text-[13.5px] sm:text-[14px] font-bold text-[#071536] leading-snug group-hover:text-[#00a2c0] transition-colors">
                          {item.details}
                        </span>
                        {item.subtext && (
                          <span className="text-[12px] text-[#64748b] mt-0.5">
                            {item.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical Building Photo */}
            <div className="w-full md:w-[190px] lg:w-[210px] shrink-0 rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm min-h-[260px] md:min-h-full">
              <img
                src={infoCard?.image || "/banner/about.webp"}
                alt="Medicare Headquarters"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Card: Send Us a Message (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white rounded-3xl border border-gray-200/80 p-5 sm:p-6 lg:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#071536] mb-1.5">
                {formCard?.title || "Send Us a"}{" "}
                <span className="text-[#00a2c0]">{formCard?.titleHighlight || "Message"}</span>
              </h3>
              <p className="text-[#64748b] text-[13px] sm:text-[13.5px] leading-relaxed mb-5">
                {formCard?.description || "Fill out the form below and our team will get back to you shortly."}
              </p>

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#071536] mb-1">
                      {formCard?.fields?.name_label || "Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formCard?.fields?.name_placeholder || "Enter your full name"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#071536] mb-1">
                      {formCard?.fields?.email_label || "Email Address"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={formCard?.fields?.email_placeholder || "Enter your email address"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#071536] mb-1">
                      {formCard?.fields?.phone_label || "Phone Number"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        // Strictly numbers and optional +
                        const digitsOnly = e.target.value.replace(/[^0-9+]/g, '');
                        setFormData(prev => ({ ...prev, phone: digitsOnly }));
                      }}
                      onKeyDown={(e) => {
                        // Allow navigation and edit keys
                        if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                          return;
                        }
                        // Allow + only at beginning
                        if (e.key === '+' && e.currentTarget.selectionStart === 0 && !e.currentTarget.value.includes('+')) {
                          return;
                        }
                        // Disallow non-numeric characters
                        if (!/^[0-9]$/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      inputMode="numeric"
                      pattern="[0-9+]*"
                      maxLength={15}
                      placeholder={formCard?.fields?.phone_placeholder || "Enter your phone number"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all"
                    />
                  </div>

                  {/* Custom Styled Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-bold text-[#071536] mb-1">
                      {formCard?.fields?.subject_label || "Subject"} <span className="text-red-500">*</span>
                    </label>

                    {/* Dropdown Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-left flex items-center justify-between transition-all bg-white cursor-pointer ${
                        isSubjectOpen
                          ? 'border-[#00a2c0] ring-2 ring-[#00a2c0]/15 shadow-sm'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      aria-haspopup="listbox"
                      aria-expanded={isSubjectOpen}
                    >
                      <span className={formData.subject ? "text-[#071536] font-medium" : "text-gray-400"}>
                        {formData.subject || formCard?.fields?.subject_placeholder || "Select a subject"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          isSubjectOpen ? 'rotate-180 text-[#00a2c0]' : ''
                        }`}
                      />
                    </button>

                    {/* Floating Dropdown Menu */}
                    <AnimatePresence>
                      {isSubjectOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-0 right-0 top-full mt-1.5 z-40 bg-white rounded-xl border border-gray-100 shadow-[0_12px_32px_rgba(0,0,0,0.12)] py-1.5 max-h-56 overflow-y-auto list-none"
                          role="listbox"
                        >
                          {subjectOptions.map((opt, i) => {
                            const isSelected = formData.subject === opt;
                            return (
                              <li
                                key={i}
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, subject: opt }));
                                  setIsSubjectOpen(false);
                                }}
                                className={`px-3.5 py-2 text-xs sm:text-sm cursor-pointer flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? 'bg-[#00a2c0]/10 text-[#00a2c0] font-semibold'
                                    : 'text-[#071536] hover:bg-gray-50 hover:text-[#00a2c0]'
                                }`}
                                role="option"
                                aria-selected={isSelected}
                              >
                                <span>{opt}</span>
                                {isSelected && <Check className="w-4 h-4 text-[#00a2c0]" />}
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    {/* Hidden input for form validation */}
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      required
                      readOnly
                      tabIndex={-1}
                      className="opacity-0 pointer-events-none absolute bottom-0 left-0 w-full h-0"
                    />
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-[#071536] mb-1">
                    {formCard?.fields?.message_label || "Message"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formCard?.fields?.message_placeholder || "Write your message here..."}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Feedback Notification */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs sm:text-sm flex items-center gap-2 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      Thank you! Your message has been sent successfully. We will get back to you shortly.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 sm:py-3.5 px-6 rounded-full bg-[#00a2c0] hover:bg-[#008b9e] text-white font-bold text-[14.5px] sm:text-[15px] flex items-center justify-center gap-3 shadow-md shadow-[#00a2c0]/25 hover:shadow-lg transition-all group disabled:opacity-60 cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : formCard?.button?.text || "Submit Message"}</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#00a2c0] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Full-width Map Section Matching Screenshot */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full relative h-[360px] sm:h-[420px] lg:h-[460px] bg-slate-100 overflow-hidden border-t border-b border-gray-200"
      >
        <iframe
          title="Medicare Lifesciences Location Map"
          src={mapData?.embed_url || "https://maps.google.com/maps?q=Baddi%2C%20Himachal%20Pradesh%20Pharma%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        ></iframe>

        {/* Floating Custom Location Badge matching the screenshot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex items-center gap-2">
          {/* Red Location Marker */}
          <div className="relative flex items-center justify-center">
            <div className="w-5 h-5 bg-red-600 rounded-full animate-ping opacity-30 absolute"></div>
            <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg relative z-10">
              <MapPin className="w-4 h-4 fill-white" />
            </div>
          </div>

          {/* Location Info Box */}
          <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-gray-100 flex flex-col text-left">
            <span className="text-[13px] font-extrabold text-[#071536]">
              {mapData?.company_name || "Medicare Lifesciences"}
            </span>
            <span className="text-[11px] text-gray-500 font-medium max-w-[210px] leading-tight">
              {mapData?.address || "123 Education Lane, New York, NY 10001"}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
