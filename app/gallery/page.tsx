import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Gallery from '@/components/sections/Gallery';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.gallery?.metadata?.title || 'Our Gallery - Medicare Life Sciences',
  description: pages.gallery?.metadata?.description || 'Take a look at our state-of-the-art manufacturing facilities, advanced technology, quality control processes and team in action.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.gallery?.breadcrumb} />

        <Gallery data={sections.gallery} />

        <CtaBanner data={sections.cta_banner} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
