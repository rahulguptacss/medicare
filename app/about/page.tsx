import React from 'react';
import Topbar from '../../components/sections/Topbar';
import Header from '../../components/sections/Header';
import Breadcrumb from '../../components/sections/Breadcrumb';
import About from '../../components/sections/About';
import Stats from '../../components/sections/Stats';
import MissionVision from '../../components/sections/MissionVision';
import Expertise from '../../components/sections/Expertise';
import WhyChooseUs from '../../components/sections/WhyChooseUs';
import Infrastructure from '../../components/sections/Infrastructure';
import Footer from '../../components/sections/Footer';
import { common, pages, sections } from '../../components/types';

export const metadata = {
  title: pages.about?.metadata?.title || 'About Us - Medicare Life Sciences',
  description: 'Learn more about Medicare Life Sciences, our mission, vision, expertise, and state-of-the-art infrastructure.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        <Breadcrumb data={pages?.about?.breadcrumb} />

        <About data={sections.about} hideButton={true} />

        <Stats data={sections.stats} />

        <MissionVision data={sections.mission_vision} />

        <Expertise data={sections.expertise} />

        <WhyChooseUs data={sections.why_choose_us} />

        <Infrastructure data={sections.infrastructure} />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
