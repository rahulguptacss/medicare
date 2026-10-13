"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Pill, Droplet, Syringe, Activity, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export interface ProductItem {
  title: string;
  image?: string;
  link?: string;
  icon: string;
}

export interface ProductsHeaderSection {
  subtitle?: string;
  title?: string;
  title_highlight?: string;
  title_end?: string;
  description?: string;
  image?: string;
}

export interface ProductsPagination {
  prev_text?: string;
  next_text?: string;
}

export interface ProductsData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  header_section?: ProductsHeaderSection;
  items_per_page?: number;
  pagination?: ProductsPagination;
  product_items?: ProductItem[];
  items?: ProductItem[];
  button?: {
    text: string;
    href: string;
  };
}

export interface ProductsProps {
  data: ProductsData;
  isPage?: boolean;
  hideHeader?: boolean;
  hideButton?: boolean;
  gridCols?: string;
}

export default function Products({ 
  data, 
  isPage = false, 
  hideHeader = false, 
  hideButton = false, 
  gridCols 
}: ProductsProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill': return <Pill className="w-5 h-5" />;
      case 'Droplet': return <Droplet className="w-5 h-5" />;
      case 'Syringe': return <Syringe className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Eye': return <Eye className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      default: return <Pill className="w-5 h-5" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Full Products Page Mode
  if (isPage) {
    const headerData = data?.header_section;
    const itemsPerPage = data?.items_per_page || 9;
    const baseItems = data?.product_items || data?.items || [];
    
    // Create paginated items (multiplied for rich pagination demonstration)
    const allItems = [...baseItems, ...baseItems, ...baseItems.slice(0, 3)];
    const totalPages = Math.max(1, Math.ceil(allItems.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
      const gridElem = document.getElementById('products-grid-section');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }
    };

    return (
      <div className="bg-[#f8fbff]">
        {/* Page Header Section */}
        {headerData && (
          <section className="pt-12 pb-4 lg:pt-16 lg:pb-4 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-4">
                    <span className="w-8 h-[2px] bg-[#00b4d8]"></span>
                    <span className="text-[#0b2c4d] text-[12px] font-bold tracking-[0.15em] uppercase">
                      {headerData?.subtitle || "OUR PRODUCTS"}
                    </span>
                    <span className="w-8 h-[2px] bg-[#00b4d8] lg:hidden"></span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b2c4d] mb-6 leading-tight">
                    {headerData?.title || "Our"}{' '}
                    <span className="text-[#00b4d8]">{headerData?.title_highlight || "Pharmaceutical"}</span>
                    <br className="hidden lg:block"/>{' '}
                    {headerData?.title_end || "Products"}
                  </h2>
                  <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-6">
                    {headerData?.description || "We offer a comprehensive range of high-quality pharmaceutical products that cater to diverse healthcare needs, manufactured under strict quality standards. Our products are formulated to ensure safety, efficacy and better health outcomes for people across all age groups."}
                  </p>
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 w-full relative"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[300px] sm:h-[350px] w-full">
                    <div className="absolute inset-0 bg-[#0b2c4d]/10"></div>
                    <img 
                      src={headerData?.image || "/banner/mfg2.webp"} 
                      alt={headerData?.title_end || "Pharmaceutical Products"} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        )}

        {/* Product Grid & Pagination Section */}
        <section id="products-grid-section" className="pb-16 pt-6 bg-[#f8fbff] min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
            >
              {currentItems.map((item: ProductItem, idx: number) => (
                <motion.div 
                  variants={cardVariants}
                  key={`${item.title}-${idx}`} 
                  className="bg-white rounded-[1rem] shadow-[0_4px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group p-1.5 transition-all hover:shadow-[0_8px_25px_rgb(0,180,216,0.12)] relative hover:-translate-y-1"
                >
                  {/* Image Section */}
                  <div className="relative rounded-[0.75rem] overflow-hidden h-[180px] bg-gray-50">
                    <img 
                      src={item.image || `/services/${(idx % 8) + 1}.webp`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="relative bg-white pt-3 pb-4 px-2 sm:px-3 flex flex-col rounded-b-[1rem]">
                    <div className="absolute -top-8 left-3 w-[52px] h-[52px] bg-[#f0f8ff] rounded-full flex items-center justify-center border-4 border-white z-10 text-[#00b4d8] group-hover:bg-[#00b4d8] group-hover:text-white transition-colors duration-300 shadow-sm">
                      {getIcon(item.icon)}
                    </div>
                    
                    <div className="pl-[60px] pr-1 flex flex-col justify-center min-h-[50px]">
                      <h3 className="font-extrabold text-[#0b2c4d] text-[14px] sm:text-[15px] leading-tight mb-1.5">
                        {item.title}
                      </h3>
                      <Link 
                        href={item.link || "#"} 
                        className="text-[11px] sm:text-xs font-bold text-[#0073a8] flex items-center gap-1.5 group-hover:text-[#00b4d8] transition-colors mt-auto"
                      >
                        View Products <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <button 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border border-[#e3eff6] text-[#00b4d8] font-bold text-sm hover:bg-[#f0f8ff] transition-colors bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" /> {data?.pagination?.prev_text || "Previous"}
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    return (
                      <button 
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-all ${
                          currentPage === page 
                            ? 'bg-[#00b4d8] text-white scale-110 shadow-md' 
                            : 'bg-white border border-gray-100 text-gray-500 hover:border-[#00b4d8] hover:text-[#00b4d8]'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  
                  <button 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full border-2 border-black text-[#00b4d8] font-bold text-sm hover:bg-gray-50 transition-colors bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {data?.pagination?.next_text || "Next"} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Home Page Section Mode (Default)
  const defaultCols = gridCols || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="py-6 lg:py-10 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 lg:mb-8"
          >
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#00b4d8]"></span>
              <span className="text-[#0b2c4d] text-[11px] font-bold tracking-[0.15em] uppercase">
                {data?.subtitle || "OUR PRODUCTS"}
              </span>
              <span className="w-8 h-[2px] bg-[#00b4d8]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#0b2c4d] mb-1.5 leading-tight">
              {data?.title_line1 || "Wide Range of"} <span className="text-[#00b4d8]">{data?.title_highlight || "Pharmaceutical Products"}</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base px-4">
              {data?.description || "We offer a comprehensive range of high-quality pharmaceutical products across various therapeutic segments, ensuring access to affordable and effective medications."}
            </p>
          </motion.div>
        )}

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={`grid ${defaultCols} gap-3 lg:gap-4 gap-y-4 lg:gap-y-6`}
        >
          {data?.items?.map((item: ProductItem, idx: number) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="bg-white rounded-[1rem] shadow-[0_4px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group p-1.5 transition-all hover:shadow-[0_8px_25px_rgb(0,180,216,0.12)] relative hover:-translate-y-1"
            >
              
              {/* Image Section */}
              <div className="relative rounded-[0.75rem] overflow-hidden h-[170px] bg-gray-50">
                <img 
                  src={item.image || `/services/${idx + 1}.webp`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Content Section */}
              <div className="relative bg-white pt-3 pb-4 px-2 sm:px-3 flex flex-col rounded-b-[1rem]">
                {/* Overlapping Icon */}
                <div className="absolute -top-8 left-3 w-[52px] h-[52px] bg-[#f0f8ff] rounded-full flex items-center justify-center border-4 border-white z-10 text-[#00b4d8] group-hover:bg-[#00b4d8] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {getIcon(item.icon)}
                </div>
                
                {/* Text Content */}
                <div className="pl-[60px] pr-1 flex flex-col justify-center min-h-[50px]">
                  <h3 className="font-extrabold text-[#0b2c4d] text-[14px] sm:text-[15px] leading-tight mb-1.5">
                    {item.title}
                  </h3>
                  <Link href={item.link || "#"} className="text-[11px] sm:text-xs font-bold text-[#0073a8] flex items-center gap-1.5 group-hover:text-[#00b4d8] transition-colors mt-auto">
                    View Products <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        {!hideButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6 lg:mt-8"
          >
            <Link 
              href={data?.button?.href || "#"} 
              className="inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#009bc2] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold shadow-lg shadow-[#00b4d8]/30 transition-all group"
            >
              <span className="text-sm">{data?.button?.text || "View All Products"}</span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#00b4d8] group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}