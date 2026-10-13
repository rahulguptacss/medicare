import React from 'react';
import BlogDetail from '@/components/sections/BlogDetail';
import { sections, pages } from '@/components/types';
import { notFound } from 'next/navigation';

const blogDetails: Record<string, any> = sections.blogDetails || {};
const blogList: any[] = sections.blogs?.items || [];

export function generateStaticParams() {
  const slugs = new Set([
    ...Object.keys(blogDetails),
    ...blogList.map((b: any) => b.slug)
  ]);
  return Array.from(slugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let blog = blogDetails[slug] || blogList.find((b: any) => b.slug === slug);
  if (!blog && slug === 'telehealth-services-are-ready') {
    blog = blogDetails['the-importance-of-quality-control'] || blogList[0];
  }
  
  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: `${blog.title} | Medicare Life Sciences`,
    description: blog.excerpt || blog.intro,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let blog = blogDetails[slug];
  if (!blog && slug === 'telehealth-services-are-ready') {
    blog = blogDetails['the-importance-of-quality-control'];
  }
  if (!blog) {
    blog = blogList.find((b: any) => b.slug === slug);
  }

  if (!blog) {
    notFound();
  }

  const recentPosts = blogList.filter((b: any) => b.slug !== slug).slice(0, 5);

  return <BlogDetail blog={blog} recentPosts={recentPosts} />;
}
