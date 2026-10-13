import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Team from '@/components/sections/Team';
import CtaBanner from '@/components/sections/CtaBanner';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.team?.metadata?.title || 'Our Team - Medicare Life Sciences',
  description: 'Meet our expert team of healthcare professionals and medical specialists at Medicare Life Sciences.',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.team?.breadcrumb} />

        <Team data={sections.team} />

        <CtaBanner data={sections.cta_banner} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
