import React from 'react';
import Blogs from '@/components/sections/Blogs/index';
import { pages, sections } from '@/components/types';

export const metadata = {
  title: pages.blogs?.metadata?.title || 'Our Blogs | Medicare Life Sciences',
  description: 'Read the latest blogs and news from Medicare Life Sciences.',
};

export default function BlogsPage() {
  return <Blogs data={sections.blogs} />;
}
