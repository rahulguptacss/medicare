import { notFound } from 'next/navigation';
import ProductDetails from '@/components/sections/ProductDetails';
import { sections } from '@/components/types';

const productDetails = sections.productDetails || {};

const categoryAliases: Record<string, string> = {
  'tablets': 'paracetamol-tablets-ip-500-mg',
  'capsules': 'omeprazole-capsules-20-mg',
  'syrups': 'ambroxol-hydrochloride-syrup',
  'injections': 'ceftriaxone-injection-ip-1g',
  'ointments': 'mupirocin-ointment-2-ww',
  'sachets': 'oral-rehydration-salts',
  'drops': 'moxifloxacin-eye-drops',
  'respiratory': 'salbutamol-inhaler',
  'powders': 'oral-rehydration-salts',
  'supplements': 'vitamin-d3-tablets'
};

export function generateStaticParams() {
  const allSlugs = [...Object.keys(productDetails), ...Object.keys(categoryAliases)];
  return allSlugs.map((slug) => ({
    slug,
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;
  const slug = categoryAliases[rawSlug] || rawSlug;
  const product = productDetails[slug as keyof typeof productDetails];

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
