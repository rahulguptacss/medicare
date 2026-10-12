"use client";

import React, { useEffect, useState, useRef } from 'react';
import { FlaskConical, Pill, Globe, Users } from 'lucide-react';

const AnimatedCounter = ({ valueStr }: { valueStr: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const numMatch = valueStr.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = valueStr.replace(/\d/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && targetNum > 0) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNum / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else if (isVisible && targetNum === 0) {
       setCount(0);
    }
  }, [isVisible, targetNum]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default function Stats({ data }: any) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-[#0b2c4d]" strokeWidth={2} />;
      case 'Pill': return <Pill className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-[#0b2c4d]" strokeWidth={2} />;
      case 'Globe': return <Globe className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-[#0b2c4d]" strokeWidth={2} />;
      case 'Users': return <Users className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-[#0b2c4d]" strokeWidth={2} />;
      default: return <FlaskConical className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-[#0b2c4d]" strokeWidth={2} />;
    }
  };

  const fallbacks = [
    { value: "15+", label: "Years of Experience", icon: "FlaskConical" },
    { value: "500+", label: "Products Range", icon: "Pill" },
    { value: "25+", label: "Countries Served", icon: "Globe" },
    { value: "1000+", label: "Satisfied Customers", icon: "Users" }
  ];

  const items = data?.items?.length > 0 ? data.items : fallbacks;

  return (
    <section className="py-4 lg:py-5 bg-[#f0f8fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item: any, idx: number) => (
            <div key={idx} className={`flex flex-col sm:flex-row items-center sm:justify-start lg:justify-center gap-3 sm:gap-5 lg:gap-6 py-6 sm:py-8 lg:py-2 px-2 sm:px-4 lg:px-0 text-center sm:text-left border-[#cbe1ee] ${idx % 2 === 0 ? 'border-r' : ''} ${idx < items.length - 2 ? 'border-b lg:border-b-0' : ''} ${idx !== items.length - 1 ? 'lg:border-r' : 'lg:border-r-0'}`}>
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-[#e3f2fa] flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] sm:text-[28px] lg:text-[36px] font-black text-[#0092ad] leading-[1.1] mb-0.5 tracking-tight">
                  <AnimatedCounter valueStr={item.value} />
                </span>
                <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-[#4b5563]">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}