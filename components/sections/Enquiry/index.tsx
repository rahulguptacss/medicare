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
  Check, 
  Paperclip, 
  X 
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { EnquirySectionData } from '@/components/types';

export default function Enquiry({ data }: { data?: EnquirySectionData }) {
  const leftCard = data?.left_card;
  const formCard = data?.form_card;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agreedTerms: false
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Custom Dropdown State
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agreedTerms: false
      });
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  const getLeftIcon = (iconName: string) => {
    const commonClass = "w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#071536] group-hover:text-white transition-colors duration-300 stroke-[2.2]";
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

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF className="w-3.5 h-3.5" />;
      case 'instagram':
        return <FaInstagram className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedinIn className="w-3.5 h-3.5" />;
      case 'twitter':
      case 'x':
        return <FaXTwitter className="w-3.5 h-3.5" />;
      case 'youtube':
        return <FaYoutube className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const subjectOptions = formCard?.fields?.subject_options || [
    "Contract Manufacturing",
    "Third-Party Manufacturing",
    "Bulk Order Enquiry",
    "Product Information",
    "Regulatory & Export",
    "Quality Assurance",
    "Other"
  ];

  return (
    <section id="enquiry-section" className="py-8 sm:py-10 lg:py-14 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Column: Let's Discuss Your Requirements Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#edf7fc] rounded-2xl border border-[#dcf0fa] p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,162,192,0.03)] h-full"
          >
            <div>
              {/* Subtitle */}
              <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase mb-2 block">
                {leftCard?.subtitle || "GET IN TOUCH"}
              </span>

              {/* Title */}
              <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-[#071536] leading-[1.15] tracking-tight mb-2.5">
                {leftCard?.title_line1 || "Let's Discuss"}<br />
                {leftCard?.title_line2 || "Your Requirements"}
              </h2>

              {/* Description */}
              <p className="text-[#5f738a] text-[13.5px] sm:text-[14px] leading-relaxed mb-5 max-w-[360px]">
                {leftCard?.description || "Share your enquiry with us and our team will get back to you with the best possible solution."}
              </p>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-4.5">
                {leftCard?.items?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 sm:gap-4 group cursor-pointer">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#cff0fa] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#00a2c0] group-hover:scale-105 transition-all duration-300 shadow-xs">
                      {getLeftIcon(item.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] sm:text-[15.5px] font-bold text-[#071536] leading-snug mb-0.5">
                        {item.title}
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] text-[#556987] leading-snug">
                        {item.details}
                      </span>
                      {item.subtext && (
                        <span className="text-[13px] sm:text-[13.5px] text-[#556987] leading-snug block mt-0.5">
                          {item.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Row */}
            {leftCard?.socials && leftCard.socials.length > 0 && (
              <div className="flex items-center gap-3 pt-6 sm:pt-8 mt-auto">
                {leftCard.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#eef8fd] border-[1.5px] border-[#38bdf8] flex items-center justify-center text-[#071536] hover:bg-[#00a2c0] hover:border-[#00a2c0] hover:text-white transition-all duration-300 shadow-xs"
                    aria-label={social.icon}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column: Enquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full"
          >
            {/* Form Subtitle */}
            <span className="text-[#00a2c0] text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase mb-1.5 block">
              {formCard?.subtitle || "SEND US AN ENQUIRY"}
            </span>

            {/* Form Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071536] tracking-tight mb-2">
              {formCard?.title || "Enquiry Form"}
            </h3>

            {/* Form Description */}
            <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed mb-6">
              {formCard?.description || "Fill in the details below and we will get back to you shortly."}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#071536] mb-1">
                    {formCard?.fields?.name_label || "Your Name"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={formCard?.fields?.name_placeholder || "Enter your name"}
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
                    placeholder={formCard?.fields?.email_placeholder || "Enter your email"}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      const digitsOnly = e.target.value.replace(/[^0-9+]/g, '');
                      setFormData(prev => ({ ...prev, phone: digitsOnly }));
                    }}
                    onKeyDown={(e) => {
                      if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                        return;
                      }
                      if (e.key === '+' && e.currentTarget.selectionStart === 0 && !e.currentTarget.value.includes('+')) {
                        return;
                      }
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

                {/* Custom Dropdown for Subject */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-bold text-[#071536] mb-1">
                    {formCard?.fields?.subject_label || "Subject"} <span className="text-red-500">*</span>
                  </label>
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

              {/* Row 3: Your Message */}
              <div>
                <label className="block text-xs font-bold text-[#071536] mb-1">
                  {formCard?.fields?.message_label || "Your Message"} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formCard?.fields?.message_placeholder || "Write your enquiry here..."}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#071536] placeholder-gray-400 focus:outline-none focus:border-[#00a2c0] focus:ring-2 focus:ring-[#00a2c0]/15 transition-all resize-none"
                ></textarea>
              </div>

              {/* Row 4: Attach Files (Optional) Box */}
              <div className="bg-gray-50/80 border border-gray-200/80 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#071536] shrink-0 shadow-xs">
                    <Paperclip className="w-4 h-4 text-[#00a2c0]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[13px] font-bold text-[#071536]">
                      {formCard?.fields?.attachment?.title || "Attach Files (Optional)"}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500">
                      {selectedFile ? (
                        <span className="text-[#00a2c0] font-semibold">{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                      ) : (
                        formCard?.fields?.attachment?.description || "You can upload documents, images or reference files (Max 5MB)"
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  {selectedFile ? (
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="px-3 py-1.5 text-xs text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" /> Remove
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs sm:text-sm font-semibold text-[#071536] shadow-2xs hover:border-[#00a2c0] transition-all cursor-pointer"
                  >
                    {selectedFile ? "Change File" : formCard?.fields?.attachment?.button_text || "Choose File"}
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                </div>
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
                    Thank you! Your enquiry has been received. Our team will get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 5: Checkbox & Submit Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <label className="flex items-start sm:items-center gap-2.5 cursor-pointer text-xs sm:text-[13px] text-[#64748b] select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreedTerms}
                    onChange={(e) => setFormData({ ...formData, agreedTerms: e.target.checked })}
                    className="w-4 h-4 mt-0.5 sm:mt-0 rounded text-[#00a2c0] focus:ring-[#00a2c0] accent-[#00a2c0] cursor-pointer shrink-0"
                  />
                  <span>
                    {formCard?.fields?.terms_text || "I agree to the Terms & Conditions and Privacy Policy."}
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-7 rounded-xl sm:rounded-full bg-[#00a2c0] hover:bg-[#008b9e] text-white font-bold text-sm sm:text-[14.5px] flex items-center justify-center gap-2.5 shadow-md shadow-[#00a2c0]/25 hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer shrink-0"
                >
                  <span>{isSubmitting ? "Sending..." : formCard?.button?.text || "Send Enquiry"}</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
