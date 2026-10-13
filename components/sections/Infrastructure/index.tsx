"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, ShieldCheck, Settings } from 'lucide-react';

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Factory': return <Factory className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />;
    case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />;
    case 'Settings': return <Settings className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />;
    default: return <Factory className="w-7 h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />;
  }
};

export default function Infrastructure({ data }: { data?: any }) {
  const subtitle = data?.subtitle || "OUR INFRASTRUCTURE";
  const title = data?.title || "Our";
  const titleHighlight = data?.titleHighlight || "Infrastructure";
  const description = data?.description || "Our state-of-the-art infrastructure is the backbone of our commitment to quality, innovation and reliable supply of pharmaceutical products.";
  const image = data?.image || "/banner/corporate.webp";

  const cardTitle = data?.card?.title || "Our";
  const cardTitleHighlight = data?.card?.titleHighlight || "Corporate Facility";
  const cardDescription = data?.card?.description || "Our modern manufacturing and corporate facility is equipped with advanced technology, world-class equipment and a highly skilled team to ensure the highest standards of quality, safety and efficiency in every product we deliver.";
  const features = data?.card?.features || [
    { title: "Modern Facilities", icon: "Factory" },
    { title: "Quality Assured", icon: "ShieldCheck" },
    { title: "Global Standards", icon: "Settings" }
  ];

  return (
    <section className="py-10 lg:py-12 bg-[#f8fbff] overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-1">
            <span className="w-10 h-[2px] bg-[#00b4d8]"></span>
            <span className="text-[#00b4d8] text-[11px] font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-10 h-[2px] bg-[#00b4d8]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b2c4d] mb-2 leading-tight">
            {title} <span className="text-[#00b4d8]">{titleHighlight}</span>
          </h2>
          <p className="text-[#64748b] max-w-[800px] mx-auto text-[15px] lg:text-[16px] leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Content Wrapper */}
        <div className="relative">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-[calc(50%+50vw)] lg:w-[calc(15%+50vw)] ml-[calc(-50vw+50%)] h-[400px] sm:h-[500px] lg:h-[600px] rounded-r-3xl lg:rounded-r-[40px] overflow-hidden shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-[#0b2c4d]/10"></div>
            <img
              src={image}
              alt={cardTitleHighlight}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlapping Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[45%] bg-[#f4f9fc] rounded-[30px] shadow-[0_20px_50px_rgb(0,0,0,0.08)] p-8 lg:p-12 relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 mt-8 lg:mt-0"
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] rounded-full bg-[#e3eff6] text-[#00b4d8] flex items-center justify-center shrink-0">
                <Building2 className="w-10 h-10 lg:w-12 lg:h-12" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-[#0b2c4d] font-bold text-2xl lg:text-[28px] leading-none mb-1">{cardTitle}</span>
                <h3 className="text-3xl lg:text-[38px] font-bold text-[#00b4d8] leading-none">
                  {cardTitleHighlight}
                </h3>
                <div className="w-12 h-[3px] bg-[#00b4d8] mt-4"></div>
              </div>
            </div>

            <p className="text-[#64748b] text-[15px] lg:text-[16px] leading-relaxed mb-10">
              {cardDescription}
            </p>

            <div className="flex justify-between items-center">
              {features.map((feat: any, idx: number) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <div className="w-[1px] h-[60px] bg-blue-200/50"></div>}
                  <div className="flex-1 flex flex-col items-center text-center group">
                    <div className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-[#e3eff6] text-[#007bb5] flex items-center justify-center mb-3 lg:mb-4 group-hover:-translate-y-1 transition-transform">
                      {typeof feat.icon === 'string' ? getIcon(feat.icon) : feat.icon}
                    </div>
                    <span className="text-[14px] lg:text-[15px] font-bold text-[#0b2c4d] leading-tight">
                      {feat.title}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
