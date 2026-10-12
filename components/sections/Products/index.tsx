"use client";

import React from 'react';
import { ArrowRight, Pill, Droplet, Syringe, Activity, Eye, Heart } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface ProductItem {
  title: string;
  image?: string;
  link?: string;
  icon: string;
}

interface ProductsData {
  subtitle?: string;
  title_line1?: string;
  title_highlight?: string;
  description?: string;
  items?: ProductItem[];
  button?: {
    text: string;
    href: string;
  };
}

interface ProductsProps {
  data: ProductsData;
}

export default function Products({ data }: ProductsProps) {
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

  return (
    <section className="py-6 lg:py-10 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
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

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 gap-y-4 lg:gap-y-6"
        >
          {data?.items?.map((item: ProductItem, idx: number) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="bg-white rounded-[1rem] shadow-[0_4px_15px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group p-1.5 transition-all hover:shadow-[0_8px_25px_rgb(0,180,216,0.12)] relative hover:-translate-y-1"
            >
              
              {/* Image Section */}
              <div className="relative rounded-[0.75rem] overflow-hidden h-[140px] bg-gray-50">
                <img 
                  src={item.image || `/services/${idx + 1}.png`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Content Section */}
              <div className="relative bg-white pt-2.5 pb-2.5 px-2 flex flex-col rounded-b-[1rem]">
                {/* Overlapping Icon */}
                <div className="absolute -top-8 left-3 w-[52px] h-[52px] bg-[#f0f8ff] rounded-full flex items-center justify-center border-4 border-white z-10 text-[#00b4d8] group-hover:bg-[#00b4d8] group-hover:text-white transition-colors duration-300 shadow-sm">
                  {getIcon(item.icon)}
                </div>
                
                {/* Text Content */}
                <div className="pl-[64px] pr-2 flex flex-col justify-center min-h-[36px]">
                  <h3 className="font-extrabold text-[#0b2c4d] text-[14px] sm:text-[15px] leading-tight mb-0.5">
                    {item.title}
                  </h3>
                  <a href={item.link || "#"} className="text-[11px] sm:text-xs font-bold text-[#0073a8] flex items-center gap-1.5 group-hover:text-[#00b4d8] transition-colors">
                    View Products <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 lg:mt-8"
        >
          <a 
            href={data?.button?.href || "#"} 
            className="inline-flex items-center gap-3 bg-[#00b4d8] hover:bg-[#009bc2] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold shadow-lg shadow-[#00b4d8]/30 transition-all group"
          >
            <span className="text-sm">{data?.button?.text || "View All Products"}</span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#00b4d8] group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}