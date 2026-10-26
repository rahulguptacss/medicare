import React from 'react';
import Topbar from '@/components/sections/Topbar';
import Header from '@/components/sections/Header';
import Breadcrumb from '@/components/sections/Breadcrumb';
import ManufacturingOverview from '@/components/sections/ManufacturingOverview';
import ManufacturingInfrastructure from '@/components/sections/ManufacturingInfrastructure';
import ManufacturingMachinery from '@/components/sections/ManufacturingMachinery';
import ManufacturingCapabilities from '@/components/sections/ManufacturingCapabilities';
import ManufacturingProcess from '@/components/sections/ManufacturingProcess';
import ManufacturingHygieneSafety from '@/components/sections/ManufacturingHygieneSafety';
import Footer from '@/components/sections/Footer';
import { common, pages, sections } from '@/components/types';

export const metadata = {
  title: pages.manufacturing_facilities?.metadata?.title || 'Manufacturing Facilities - Medicare Life Sciences',
  description: pages.manufacturing_facilities?.metadata?.description || 'Explore our state-of-the-art WHO-GMP certified manufacturing facilities, modern infrastructure, advanced machinery, and diverse production capabilities.',
};

export default function ManufacturingFacilitiesPage() {
  const pageData = pages?.manufacturing_facilities;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Topbar data={common.Topbar} />
      <Header data={common.Header} />

      <main>
        {/* Breadcrumb Section */}
        <Breadcrumb data={pageData?.breadcrumb} />

        {/* 1. Manufacturing Overview Section */}
        <ManufacturingOverview 
          data={sections?.manufacturing_overview || sections?.manufacturing_facilities?.overview} 
        />

        {/* 2. Manufacturing Infrastructure Section */}
        <ManufacturingInfrastructure 
          data={sections?.manufacturing_infrastructure || sections?.manufacturing_facilities?.infrastructure} 
        />

        {/* 3. Manufacturing Machinery Section */}
        <ManufacturingMachinery 
          data={sections?.manufacturing_machinery || sections?.manufacturing_facilities?.machinery} 
        />

        {/* 4. Manufacturing Capabilities Section */}
        <ManufacturingCapabilities 
          data={sections?.manufacturing_capabilities || sections?.manufacturing_facilities?.capabilities} 
        />

        {/* 5. Manufacturing Process Section */}
        <ManufacturingProcess 
          data={sections?.manufacturing_process || sections?.manufacturing_facilities?.process} 
        />

        {/* 6. Manufacturing Hygiene & Safety Section */}
        <ManufacturingHygieneSafety 
          data={sections?.manufacturing_hygiene_safety || sections?.manufacturing_facilities?.hygiene_safety} 
        />
      </main>

      <Footer data={common.Footer} />
    </div>
  );
}
