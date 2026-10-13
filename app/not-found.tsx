import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import NotFoundSection from '@/components/sections/NotFound';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages?.not_found?.metadata?.title || '404 - Page Not Found | Medicare Life Sciences',
  description: pages?.not_found?.metadata?.description || 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-gray-800 flex flex-col justify-between">
      <div>
        <Topbar data={common.Topbar} />
        <Header data={common.Header} />

        <main>
          {/* Breadcrumb is deliberately omitted per request */}
          <NotFoundSection data={sections?.not_found} />
        </main>
      </div>

      <Footer data={common.Footer} />
    </div>
  );
}
