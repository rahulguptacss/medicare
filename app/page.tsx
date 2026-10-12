import React from 'react';
import Topbar from '../components/sections/Topbar';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Manufacturing from '../components/sections/Manufacturing';
import Certifications from '../components/sections/Certifications';
import Testimonials from '../components/sections/Testimonials';
import CtaBanner from '../components/sections/CtaBanner';
import Footer from '../components/sections/Footer';
import { common, pages, sections } from '../components/types';

export const metadata = { title: pages.home.metadata.title };

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />
      <main>
        <Hero data={sections.hero} />
        <Products data={sections.products} />
        <About data={sections.about} />
        <Stats data={sections.stats} />
        <Manufacturing data={sections.manufacturing} />
        <Certifications data={sections.certifications} />
        <Testimonials data={sections.testimonials} />
        <CtaBanner data={sections.cta_banner} />
      </main>
      <Footer data={common.Footer} />
    </div>
  );
}
