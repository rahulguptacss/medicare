"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export default function Blogs({ data }: { data: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const items = data?.items || [];
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.blogs?.breadcrumb} />

        <section className="py-10 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-[#00a3ba]/20"></div>
                <span className="text-[#00a3ba] font-bold text-sm tracking-[0.2em] uppercase">
                  {data?.sectionTitle || 'BLOGS'}
                </span>
                <div className="w-12 h-[2px] bg-[#00a3ba]/20"></div>
              </div>
              <h2 className="text-4xl lg:text-[46px] font-black text-[#0b2c4d] tracking-tight">
                {data?.mainTitle || 'Our Latest '}
                <span className="text-[#00a3ba]">{data?.mainTitleHighlight || 'Blogs'}</span>
              </h2>
            </div>

            {/* Blogs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {currentItems.map((blog: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 border border-[#f0f4f8] group flex flex-col">
                  {/* Image & Date Badge */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-8 left-0 bg-[#09306b] text-white flex flex-col items-center justify-center w-[64px] h-[64px] z-10">
                      <span className="text-[18px] font-bold leading-none mb-1">{blog.day}</span>
                      <span className="text-[14px] font-medium leading-none">{blog.month}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-8 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center text-[#6b7280] text-[14px] mb-4">
                      <div className="flex items-center gap-2 hover:text-[#0066ff] cursor-pointer transition-colors">
                        <User className="w-[18px] h-[18px] text-[#0066ff]" strokeWidth={1.5} />
                        <span>{blog.author || 'Admin'}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blogs/${blog.slug || '#'}`} className="block group-hover:text-[#0066ff] transition-colors mb-3">
                      <h3 className="text-[20px] lg:text-[22px] font-bold text-[#06122b] leading-[1.3] line-clamp-2">
                        {blog.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-[#6b7280] text-[15px] leading-[1.6] mb-6 line-clamp-2 flex-1">
                      {blog.excerpt}
                    </p>

                    {/* Read More */}
                    <Link 
                      href={`/blogs/${blog.slug || '#'}`}
                      className="inline-flex items-center gap-2 text-[#06122b] font-bold text-[15px] hover:text-[#0066ff] transition-colors mt-auto w-fit group/link"
                    >
                      Read More
                      <div className="w-[24px] h-[24px] rounded-full bg-[#f0f4f8] flex items-center justify-center group-hover/link:bg-[#0066ff] transition-colors">
                        <ArrowRight className="w-[14px] h-[14px] text-[#06122b] group-hover/link:text-white transition-colors" strokeWidth={2} />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    currentPage === 1 
                      ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-white border-[#eef2f6] text-gray-500 hover:text-[#0b2c4d] hover:border-[#0b2c4d] hover:shadow-md'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all shadow-sm ${
                      currentPage === i + 1
                        ? 'bg-[#00a3ba] text-white border-transparent'
                        : 'bg-white border border-[#eef2f6] text-gray-500 hover:text-[#0b2c4d] hover:border-[#0b2c4d] hover:shadow-md'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                    currentPage === totalPages 
                      ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-white border-[#eef2f6] text-gray-500 hover:text-[#0b2c4d] hover:border-[#0b2c4d] hover:shadow-md'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
