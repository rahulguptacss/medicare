"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Thermometer, User, CheckCircle, CheckCircle2 } from 'lucide-react';

import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export default function ProductDetails({ product }: { product: any }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Thermometer': return <Thermometer className="w-6 h-6" />;
      case 'User': return <User className="w-6 h-6" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={product?.breadcrumb || pages?.product_details?.breadcrumb} />

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            
            {/* Top Overview Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
              
              {/* Left Gallery */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.6 }} 
                className="w-full lg:w-5/12 flex flex-col gap-4"
              >
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
                  <img 
                    src={product.images[activeImageIdx]} 
                    alt={product.title} 
                    className="w-full h-full object-cover mix-blend-multiply" 
                  />
                  
                  {/* Arrows */}
                  <button onClick={handlePrevImage} className="absolute left-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#00b4d8] transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={handleNextImage} className="absolute right-4 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-[#00b4d8] transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Thumbnails */}
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((img: string, idx: number) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative rounded-lg overflow-hidden bg-gray-100 aspect-square border-2 transition-all ${
                        activeImageIdx === idx ? 'border-[#00b4d8] shadow-sm' : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.6 }} 
                className="w-full lg:w-7/12 flex flex-col justify-center"
              >
                <div className="mb-0">
                  <span className="inline-block bg-[#ebf8fa] text-[#008ba3] text-[13px] sm:text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                    {product.badge}
                  </span>
                  
                  <h1 className="text-3xl lg:text-[42px] font-black text-[#0b2c4d] mb-2 leading-[1.1] tracking-tight">
                    {product.title.split(product.titleHighlight)[0]} 
                    {product.titleHighlight && (
                      <span className="text-[#00a3ba]">{product.titleHighlight}</span>
                    )}
                    {product.titleHighlight && product.title.split(product.titleHighlight)[1]}
                  </h1>
                  
                  <p className="text-gray-500 text-[16px] sm:text-[17px] mb-0">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-gray-500 text-[15px] sm:text-[16px] leading-[1.8] mb-3">
                  {product.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4">
                  {product.features.map((feature: any, idx: number) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-2 w-full">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#eaf6f8] flex items-center justify-center text-[#0073a8]">
                        {getIconComponent(feature.icon)}
                      </div>
                      <span className="text-[11px] sm:text-[12px] font-extrabold text-[#0b2c4d] leading-[1.3]">
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div>
                  <Link href="/enquiry-now" className="inline-flex items-center bg-[#0b2c4d] text-white rounded-[100px] transition-all group pl-8 pr-1.5 py-1.5 relative h-[56px] hover:bg-[#08223d] shadow-lg shadow-[#0b2c4d]/20">
                    {/* Dark gradient overlay to create dual-tone button effect */}
                    <div className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#00a3ba] to-transparent opacity-80 rounded-r-[100px]"></div>
                    
                    <span className="font-bold text-[16px] mr-8 z-10 relative">Enquiry Now</span>
                    <div className="relative w-[44px] h-[44px] bg-[#00a3ba] rounded-full flex items-center justify-center shrink-0 z-10 transition-transform group-hover:scale-105">
                      <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center text-[#0b2c4d]">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>

            </div>

            {/* Bottom Details Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start"
            >
              
              {/* Product Overview Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Product <span className="text-[#00a3ba]">Overview</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row gap-6 items-start">
                  <p className="text-gray-500 text-[15px] sm:text-[15px] leading-[1.8] flex-1">
                    {product.overview.text}
                  </p>
                  <div className="w-[120px] h-[120px] rounded-[16px] overflow-hidden shrink-0 bg-[#eaf6f8]">
                    <img src={product.overview.image} alt="Overview" className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                </div>
              </div>

              {/* Composition Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Composition / <span className="text-[#00a3ba]">Active Ingredients</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#eef2f6] text-[15px]">
                  <table className="w-full text-left">
                    <thead className="bg-[#f8fbff]">
                      <tr>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-r border-[#eef2f6] w-1/2">Composition</th>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-[#eef2f6] w-1/2">Each Uncoated Tablet Contains</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.composition.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[#eef2f6] last:border-0">
                          <td className="py-4 px-5 text-[#0b2c4d] border-r border-[#eef2f6]">{item.name}</td>
                          <td className="py-4 px-5 text-gray-500">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Strength & Dosage Form Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Strength & <span className="text-[#00a3ba]">Dosage Form</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#eef2f6] text-[15px]">
                  <table className="w-full text-left">
                    <thead className="bg-[#f8fbff]">
                      <tr>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-r border-[#eef2f6] w-1/2">Strength</th>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-[#eef2f6] w-1/2">Dosage Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[#eef2f6] last:border-0">
                        <td className="py-4 px-5 text-gray-500 border-r border-[#eef2f6]">{product.strengthDosage.strength}</td>
                        <td className="py-4 px-5 text-gray-500">{product.strengthDosage.dosageForm}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Features Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Key <span className="text-[#00a3ba]">Features</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <ul className="space-y-4">
                  {product.keyFeatures.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <svg className="w-[22px] h-[22px] text-[#00a3ba] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-gray-500 text-[15px] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Product <span className="text-[#00a3ba]">Specifications</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#eef2f6] text-[15px]">
                  <table className="w-full text-left">
                    <thead className="bg-[#f8fbff]">
                      <tr>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-r border-[#eef2f6] w-1/3">Parameter</th>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-[#eef2f6] w-2/3">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[#eef2f6] last:border-0">
                          <td className="py-4 px-5 text-[#0b2c4d] font-semibold border-r border-[#eef2f6]">{item.parameter}</td>
                          <td className="py-4 px-5 text-gray-500">{item.specification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packaging Details Card */}
              <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#eef2f6] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-[22px] font-black text-[#0b2c4d] mb-3">
                    Packaging <span className="text-[#00a3ba]">Details</span>
                  </h3>
                  <div className="w-10 h-[3px] bg-[#0b2c4d]"></div>
                </div>
                <div className="overflow-hidden rounded-xl border border-[#eef2f6] text-[15px]">
                  <table className="w-full text-left">
                    <thead className="bg-[#f8fbff]">
                      <tr>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-r border-[#eef2f6] w-1/2">Pack Size</th>
                        <th className="py-4 px-5 font-extrabold text-[#0b2c4d] border-b border-[#eef2f6] w-1/2">Packaging Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.packaging.map((item: any, idx: number) => (
                        <tr key={idx} className="border-b border-[#eef2f6] last:border-0">
                          <td className="py-4 px-5 text-gray-500 border-r border-[#eef2f6]">{item.packSize}</td>
                          <td className="py-4 px-5 text-gray-500">{item.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </motion.div>

          </div>
        </section>

        <CtaBanner data={sections.cta_banner} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}

