import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Enquiry from '@/components/sections/Enquiry';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.enquiry?.metadata?.title || 'Enquiry Now - Medicare Life Sciences',
  description: pages.enquiry?.metadata?.description || 'Share your enquiry with Medicare Life Sciences for contract manufacturing, product requirements, and business collaborations.',
};

export default function EnquiryPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.enquiry?.breadcrumb} />

        <Enquiry data={sections.enquiry} />

        <CtaBanner data={sections.cta_banner} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
