import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.faq?.metadata?.title || 'Frequently Asked Questions - Medicare Life Sciences',
  description: pages.faq?.metadata?.description || 'Find answers to frequently asked questions about our pharmaceutical products, manufacturing facilities, certifications, and third-party manufacturing.',
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.faq?.breadcrumb} />

        <Faq data={sections.faq} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
