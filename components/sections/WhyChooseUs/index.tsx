"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Users, Handshake, Clock, Globe } from 'lucide-react';

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'Award': return <Award className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    case 'Lightbulb': return <Lightbulb className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    case 'Users': return <Users className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    case 'Handshake': return <Handshake className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    case 'Clock': return <Clock className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    case 'Globe': return <Globe className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
    default: return <Award className="w-8 h-8 lg:w-9 lg:h-9 text-white" />;
  }
};

export default function WhyChooseUs({ data }: { data?: any }) {
  const subtitle = data?.subtitle || "WHY CHOOSE US";
  const title = data?.title || "Why";
  const titleHighlight = data?.titleHighlight || "Choose Us";
  const description = data?.description || "We are committed to delivering superior pharmaceutical products and building long-term partnerships through quality, reliability and trust.";

  const features = data?.items || [
    {
      title: "High-Quality Products",
      description: "We ensure the highest quality standards in every product we manufacture.",
      icon: "Award",
      gradient: "from-[#0b2c4d] to-[#1a5b9c]"
    },
    {
      title: "Advanced Technology",
      description: "Modern infrastructure and advanced technology for better healthcare solutions.",
      icon: "Lightbulb",
      gradient: "from-[#009e90] to-[#00d0bc]"
    },
    {
      title: "Experienced Team",
      description: "A team of skilled professionals dedicated to innovation and excellence.",
      icon: "Users",
      gradient: "from-[#0b2c4d] to-[#1a5b9c]"
    },
    {
      title: "Customer-Focused Approach",
      description: "We build strong and long-term relationships with our partners and customers.",
      icon: "Handshake",
      gradient: "from-[#009e90] to-[#00d0bc]"
    },
    {
      title: "Timely Delivery",
      description: "Reliable supply chain and efficient distribution for on-time delivery.",
      icon: "Clock",
      gradient: "from-[#0b2c4d] to-[#1a5b9c]"
    },
    {
      title: "Global Standards",
      description: "Our products meet international regulatory standards for global acceptance.",
      icon: "Globe",
      gradient: "from-[#009e90] to-[#00d0bc]"
    }
  ];

  return (
    <section className="relative pt-10 pb-28 lg:pt-14 lg:pb-40 bg-[#0b2c4d] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/banner/whychooseus.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2c4d] via-[#0b2c4d]/80 to-transparent"></div>
        {/* Extra decorative elements like in the screenshot */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </div>
        <div className="absolute top-20 right-20 opacity-10">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 lg:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 lg:w-12 h-[1px] bg-[#00b4d8]"></span>
            <span className="text-[#00b4d8] text-[11px] lg:text-xs font-bold tracking-[0.2em] uppercase">
              {subtitle}
            </span>
            <span className="w-8 lg:w-12 h-[1px] bg-[#00b4d8]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white mb-3 leading-tight">
            {title} <span className="text-[#00b4d8]">{titleHighlight}</span>
          </h2>
          <p className="text-white max-w-[750px] mx-auto text-[14px] lg:text-[16px] leading-relaxed opacity-90">
            {description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {features.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[20px] p-5 lg:p-6 flex items-start gap-4 lg:gap-5 shadow-xl hover:-translate-y-1 transition-transform group"
            >
              <div
                className={`w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] shrink-0 rounded-full flex items-center justify-center shadow-md bg-gradient-to-br ${item.gradient || 'from-[#0b2c4d] to-[#1a5b9c]'}`}
              >
                {typeof item.icon === 'string' ? getIcon(item.icon) : item.icon}
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[17px] lg:text-[19px] font-bold text-[#0b2c4d] mb-1.5 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[#64748b] text-[13px] lg:text-[14px] leading-relaxed pr-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
