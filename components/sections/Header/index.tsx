"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { common, HeaderData, LinkType } from '@/components/types';

/** Desktop Navigation Item with multi-level dropdown flyout support */
function DesktopNavItem({
  link,
  active,
  isActive,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
}) {
  const hasChildren = Boolean(link.children && link.children.length > 0);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className={`text-xs font-semibold h-full flex items-center relative transition-colors ${
          active ? 'text-[#008e9b]' : 'text-[#0b2c4d] hover:text-[#008e9b]'
        }`}
      >
        <div className="relative group">
          <span>{link.name}</span>
          {active ? (
            <motion.span
              layoutId="activeTab"
              className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#008e9b] rounded-full"
            />
          ) : (
            <span className="absolute -bottom-1.5 left-0 w-0 right-0 h-[2px] bg-[#008e9b] rounded-full transition-all duration-300 group-hover:w-full" />
          )}
        </div>
      </Link>
    );
  }

  // Multi-level Dropdown
  return (
    <div className="group/nav relative h-full flex items-center">
      <Link
        href={link.href}
        className={`text-xs font-semibold h-full flex items-center gap-1 relative transition-colors ${
          active ? 'text-[#008e9b]' : 'text-[#0b2c4d] group-hover/nav:text-[#008e9b]'
        }`}
      >
        <div className="relative flex items-center gap-1">
          <span>{link.name}</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover/nav:rotate-180 group-hover/nav:text-[#008e9b]" />
          {active ? (
            <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#008e9b] rounded-full" />
          ) : (
            <span className="absolute -bottom-1.5 left-0 w-0 right-0 h-[2px] bg-[#008e9b] rounded-full transition-all duration-300 group-hover/nav:w-full" />
          )}
        </div>
      </Link>

      {/* Level 1 Floating Dropdown Card */}
      <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 translate-y-2 transition-all duration-200 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100 group-hover/nav:translate-y-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-y-0 z-50">
        <div className="min-w-[220px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_16px_36px_-10px_rgba(11,44,77,0.12)]">
          <ul className="space-y-0.5">
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);
              const isSubActive = isActive(sub.href);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      className={`block rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                        isSubActive
                          ? 'bg-[#008e9b]/10 text-[#008e9b]'
                          : 'text-[#0b2c4d] hover:bg-[#008e9b]/5 hover:text-[#008e9b]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 2: Nested flyout dropdown (Dropdown inside dropdown)
              return (
                <li key={sub.name} className="group/sub relative">
                  <Link
                    href={sub.href}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                      isSubActive
                        ? 'bg-[#008e9b]/10 text-[#008e9b]'
                        : 'text-[#0b2c4d] hover:bg-[#008e9b]/5 hover:text-[#008e9b]'
                    }`}
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover/sub:translate-x-0.5 group-hover/sub:text-[#008e9b]" />
                  </Link>

                  {/* Level 2 Sub-Dropdown Card */}
                  <div className="pointer-events-none absolute left-full top-0 pl-2 opacity-0 translate-x-2 transition-all duration-200 group-hover/sub:pointer-events-auto group-hover/sub:opacity-100 group-hover/sub:translate-x-0 focus-within:pointer-events-auto focus-within:opacity-100 focus-within:translate-x-0 z-50">
                    <div className="min-w-[200px] rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_16px_36px_-10px_rgba(11,44,77,0.12)]">
                      <ul className="space-y-0.5">
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              className={`block rounded-xl px-3.5 py-2 text-[12.5px] font-semibold transition-colors ${
                                isActive(nested.href)
                                  ? 'bg-[#008e9b]/10 text-[#008e9b]'
                                  : 'text-[#0b2c4d] hover:bg-[#008e9b]/5 hover:text-[#008e9b]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Mobile Navigation Item with multi-level accordion support */
function MobileNavItem({
  link,
  active,
  isActive,
  onClose,
}: {
  link: LinkType;
  active: boolean;
  isActive: (href: string) => boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [subExpanded, setSubExpanded] = useState<Record<string, boolean>>({});
  const hasChildren = Boolean(link.children && link.children.length > 0);

  const toggleSub = (name: string) => {
    setSubExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        onClick={onClose}
        className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
          active
            ? 'bg-[#008e9b]/10 text-[#008e9b]'
            : 'text-[#0b2c4d] hover:bg-gray-50 hover:text-[#008e9b]'
        }`}
      >
        {link.name}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-between rounded-xl px-3.5 py-1 text-sm font-semibold transition ${
          active || expanded ? 'bg-[#008e9b]/10' : 'hover:bg-gray-50'
        }`}
      >
        <Link
          href={link.href}
          onClick={(e) => {
            if (link.href === '#' || !link.href) {
              e.preventDefault();
              setExpanded((prev) => !prev);
            } else {
              onClose();
            }
          }}
          className={`flex-1 py-2 transition ${
            active || expanded ? 'text-[#008e9b]' : 'text-[#0b2c4d]'
          }`}
        >
          {link.name}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label={`Toggle ${link.name} sub-menu`}
          className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all cursor-pointer ${
            expanded
              ? 'border-[#008e9b] text-[#008e9b] bg-[#008e9b]/10'
              : 'border-gray-200 text-[#0b2c4d] hover:border-[#008e9b] hover:text-[#008e9b]'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              expanded ? 'rotate-180 text-[#008e9b]' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l-2 border-[#008e9b]/40 ml-4"
          >
            {link.children?.map((sub) => {
              const hasSubChildren = Boolean(sub.children && sub.children.length > 0);
              const isSubOpen = Boolean(subExpanded[sub.name]);
              const isSubActive = isActive(sub.href);

              if (!hasSubChildren) {
                return (
                  <li key={sub.name}>
                    <Link
                      href={sub.href}
                      onClick={onClose}
                      className={`block rounded-lg px-3 py-2 text-xs font-semibold transition ${
                        isSubActive
                          ? 'bg-[#008e9b]/10 text-[#008e9b]'
                          : 'text-[#0b2c4d] hover:bg-gray-50 hover:text-[#008e9b]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  </li>
                );
              }

              // Level 2 inside mobile drawer
              return (
                <li key={sub.name} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between rounded-lg px-3 py-1 text-xs font-semibold ${
                      isSubActive || isSubOpen ? 'bg-[#008e9b]/10' : 'hover:bg-gray-50'
                    }`}
                  >
                    <Link
                      href={sub.href}
                      onClick={(e) => {
                        if (sub.href === '#' || !sub.href) {
                          e.preventDefault();
                          toggleSub(sub.name);
                        } else {
                          onClose();
                        }
                      }}
                      className={`flex-1 py-1 transition ${
                        isSubActive || isSubOpen ? 'text-[#008e9b]' : 'text-[#0b2c4d]'
                      }`}
                    >
                      {sub.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSub(sub.name)}
                      aria-expanded={isSubOpen}
                      aria-label={`Toggle ${sub.name} nested menu`}
                      className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all cursor-pointer ${
                        isSubOpen
                          ? 'border-[#008e9b] text-[#008e9b] bg-[#008e9b]/10'
                          : 'border-gray-200 text-[#0b2c4d] hover:border-[#008e9b] hover:text-[#008e9b]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isSubOpen ? 'rotate-180 text-[#008e9b]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isSubOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-3 pr-1 my-1 space-y-1 border-l border-[#008e9b]/25 ml-3"
                      >
                        {sub.children?.map((nested) => (
                          <li key={nested.name}>
                            <Link
                              href={nested.href}
                              onClick={onClose}
                              className={`block rounded-md px-2.5 py-1.5 text-[11.5px] font-semibold transition ${
                                isActive(nested.href)
                                  ? 'bg-[#008e9b]/10 text-[#008e9b]'
                                  : 'text-[#0b2c4d]/85 hover:bg-gray-50 hover:text-[#008e9b]'
                              }`}
                            >
                              {nested.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header({ data }: { data?: HeaderData | any }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const headerData = data || common?.Header;
  const logo = headerData?.logo || '/logo/logo.webp';
  const logoText = headerData?.logo_text || 'Medicare Life Sciences';
  const links: LinkType[] = headerData?.links || [];
  const buttonText = headerData?.button_text || 'Enquiry Now';
  const buttonLink = headerData?.button_link || '/enquiry-now';

  const isActive = (href: string) => {
    if (!href || href === '#') return false;
    return (
      pathname === href ||
      (href !== '/' && pathname.startsWith(href)) ||
      (href === '/faq' && pathname.startsWith('/faqs'))
    );
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm w-full"
    >
      <div className="max-w-[1400px] mx-auto w-full flex items-stretch h-16 md:h-20">
        {/* Brand Logo Area */}
        <div className="relative bg-gray-50 flex items-center shrink-0 w-auto md:w-56 xl:w-[280px] h-full md:before:content-[''] md:before:absolute md:before:right-full md:before:top-0 md:before:bottom-0 md:before:w-[50vw] md:before:bg-gray-50">
          <div className="hidden md:block absolute right-[-10px] top-0 bottom-0 w-6 bg-gray-50 transform skew-x-[15deg] border-r border-gray-200 z-10" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="px-2.5 sm:px-3 md:px-4 lg:px-6 relative z-20 flex items-center w-full h-full"
          >
            <Link href="/" className="flex items-center">
              <img
                src={logo}
                alt={logoText}
                className="h-12 sm:h-14 md:h-16 w-auto max-h-[52px] sm:max-h-[58px] md:max-h-none object-contain"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right side: Navigation and Button */}
        <div className="flex-1 flex items-center justify-end xl:justify-between px-4 lg:px-8 relative z-20 h-full">
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10 h-full">
            {links.map((link: LinkType, idx: number) => (
              <DesktopNavItem
                key={link.name + (link.href || idx)}
                link={link}
                active={isActive(link.href)}
                isActive={isActive}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center shrink-0 ml-auto xl:ml-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={buttonLink}
                className="flex items-center gap-1.5 md:gap-3 bg-[#008e9b] hover:bg-[#007a86] text-white px-4 md:pl-6 md:pr-1.5 py-2 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all group shadow-md shadow-[#008e9b]/20"
              >
                <span>{buttonText}</span>
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
              className="p-2 text-[#0b2c4d] hover:text-[#008e9b] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
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
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {links.map((link: LinkType) => (
                <MobileNavItem
                  key={link.name + link.href}
                  link={link}
                  active={isActive(link.href)}
                  isActive={isActive}
                  onClose={() => setIsMobileMenuOpen(false)}
                />
              ))}

              {buttonText && (
                <div className="pt-3 pb-1 border-t border-gray-100 mt-2">
                  <Link
                    href={buttonLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#008e9b] hover:bg-[#007a86] text-white py-3 px-4 rounded-xl text-sm font-bold shadow-md shadow-[#008e9b]/20 transition-colors"
                  >
                    <span>{buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}