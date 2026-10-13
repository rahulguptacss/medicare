"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Microscope, ShieldCheck, Truck } from 'lucide-react';

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Factory': return <Factory className="w-7 h-7 text-white" />;
    case 'Microscope': return <Microscope className="w-7 h-7 text-white" />;
    case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-white" />;
    case 'Truck': return <Truck className="w-7 h-7 text-white" />;
    default: return <ShieldCheck className="w-7 h-7 text-white" />;
  }
};

export default function Expertise({ data }: { data?: any }) {
  const subtitle = data?.subtitle || "OUR EXPERTISE";
  const title = data?.title || "Our";
  const titleHighlight = data?.titleHighlight || "Expertise";
  const description = data?.description || "With years of experience and advanced capabilities, we deliver high-quality pharmaceutical solutions across diverse therapeutic segments.";

  const cards = data?.items || [
    {
      title: "Manufacturing",
      description: "State-of-the-art manufacturing facilities ensuring high-quality and consistent production.",
      icon: "Factory",
      image: "/banner/mfg1.webp",
      color: "#0b2c4d"
    },
    {
      title: "Research",
      description: "Continuous research and innovation to develop effective and affordable medicines.",
      icon: "Microscope",
      image: "/banner/about.webp",
      color: "#00a2c0"
    },
    {
      title: "Quality Testing",
      description: "Rigorous quality control and testing at every stage to meet global standards.",
      icon: "ShieldCheck",
      image: "/services/7.webp",
      color: "#007bb5"
    },
    {
      title: "Distribution",
      description: "Strong distribution network ensuring timely delivery across domestic and international markets.",
      icon: "Truck",
      image: "/services/4.webp",
      color: "#00967a"
    }
  ];

  return (
    <section className="py-8 lg:py-10 relative overflow-hidden">
      {/* Background with blurred image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2fa] via-[#f0f6fa] to-white z-10 opacity-90"></div>
        <img
          src="/banner/mfg2.webp"
          alt="Background"
          className="w-full h-full object-cover blur-md opacity-40 mix-blend-multiply"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-0">
            <span className="w-8 lg:w-12 h-[1px] bg-[#00a2c0]"></span>
            <span className="text-[#00a2c0] text-[11px] lg:text-xs font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-8 lg:w-12 h-[1px] bg-[#00a2c0]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0b2c4d] mb-1 leading-tight">
            {title} <span className="text-[#00a2c0]">{titleHighlight}</span>
          </h2>
          <p className="text-[#64748b] max-w-[700px] mx-auto text-[14px] lg:text-[16px] leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {cards.map((card: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-3 sm:p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="mt-2 mb-4 w-[72px] h-[72px] rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: card.color }}
              >
                {typeof card.icon === 'string' ? getIcon(card.icon) : card.icon}
              </div>

              <h3 className="text-[17px] font-bold text-[#0b2c4d] mb-2">{card.title}</h3>

              <div
                className="w-10 h-[2px] mb-4 opacity-80"
                style={{ backgroundColor: card.color }}
              ></div>

              <p className="text-[#64748b] text-[13px] leading-relaxed px-2 mb-6 flex-1">
                {card.description}
              </p>

              <div className="w-full h-[140px] relative overflow-hidden rounded-2xl mt-auto">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
