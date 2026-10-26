import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.contact?.metadata?.title || 'Contact Us - Medicare Life Sciences',
  description: pages.contact?.metadata?.description || 'Get in touch with Medicare Life Sciences for your manufacturing requirements, product enquiries, and business collaborations.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.contact?.breadcrumb} />

        <Contact data={sections.contact} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
