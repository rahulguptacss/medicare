import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Products from '@/components/sections/Products';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.products?.metadata?.title || 'Our Products - Medicare Life Sciences',
  description: pages.products?.metadata?.description || 'We offer a comprehensive range of high-quality pharmaceutical products that cater to diverse healthcare needs, manufactured under strict quality standards.',
};

export default function ProductsPage() {
  const pageData = pages?.products;

  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        {/* Breadcrumb Section */}
        <Breadcrumb data={pageData?.breadcrumb} />

        {/* Products Section */}
        <Products data={sections.products} isPage={true} />

        {/* CTA Banner Section */}
        <CtaBanner data={sections.cta_banner} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}

