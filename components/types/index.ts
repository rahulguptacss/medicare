import siteJson from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
  active?: boolean;
  children?: LinkType[];
}

export type NavItem = LinkType;

export interface TopbarSocialItem {
  icon: string;
  href: string;
}

export interface TopbarContactItem {
  icon: string;
  title: string;
  subtitle?: string;
  href?: string;
}

export interface TopbarData {
  socials?: TopbarSocialItem[];
  contact_info?: TopbarContactItem[];
}

export interface HeaderData {
  logo?: string;
  logo_text?: string;
  links?: LinkType[];
  button_text?: string;
  button_link?: string;
}


export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbData {
  title?: string;
  items?: BreadcrumbItem[];
  breadcrumb?: BreadcrumbItem[];
  image?: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  title?: string;
  breadcrumb?: BreadcrumbItem[];
  items?: BreadcrumbItem[];
  className?: string;
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PageMeta {
  title: string;
  pageName: string;
  metadata: { title: string; description?: string };
  components?: PageComponent[];
  breadcrumb?: BreadcrumbData;
}

export interface GalleryItem {
  id?: number | string;
  title: string;
  category?: string;
  image: string;
}

export interface GallerySectionData {
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  items?: GalleryItem[];
}

export interface FaqItem {
  id?: number | string;
  number?: string;
  question: string;
  answer: string;
}

export interface FaqContactInfo {
  icon: string;
  title: string;
  subtitle: string;
}

export interface FaqSidebar {
  image?: string;
  icon?: string;
  title?: string;
  description?: string;
  button?: {
    text: string;
    href: string;
  };
  contact_info?: FaqContactInfo[];
}

export interface FaqSectionData {
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  sidebar?: FaqSidebar;
  items?: FaqItem[];
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  details: string;
  subtext?: string;
}

export interface ContactInfoCard {
  title?: string;
  titleHighlight?: string;
  description?: string;
  image?: string;
  items?: ContactInfoItem[];
}

export interface ContactFormFields {
  name_label?: string;
  name_placeholder?: string;
  email_label?: string;
  email_placeholder?: string;
  phone_label?: string;
  phone_placeholder?: string;
  subject_label?: string;
  subject_placeholder?: string;
  subject_options?: string[];
  message_label?: string;
  message_placeholder?: string;
}

export interface ContactFormCard {
  title?: string;
  titleHighlight?: string;
  description?: string;
  fields?: ContactFormFields;
  button?: {
    text: string;
  };
}

export interface ContactMapData {
  company_name?: string;
  address?: string;
  embed_url?: string;
}

export interface ContactSectionData {
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  info_card?: ContactInfoCard;
  form_card?: ContactFormCard;
  map?: ContactMapData;
}

export interface EnquirySocialItem {
  icon: string;
  href: string;
}

export interface EnquiryLeftItem {
  icon: string;
  title: string;
  details: string;
  subtext?: string;
}

export interface EnquiryLeftCard {
  subtitle?: string;
  title_line1?: string;
  title_line2?: string;
  description?: string;
  items?: EnquiryLeftItem[];
  socials?: EnquirySocialItem[];
}

export interface EnquiryFormFields {
  name_label?: string;
  name_placeholder?: string;
  email_label?: string;
  email_placeholder?: string;
  phone_label?: string;
  phone_placeholder?: string;
  subject_label?: string;
  subject_placeholder?: string;
  subject_options?: string[];
  message_label?: string;
  message_placeholder?: string;
  attachment?: {
    title: string;
    description: string;
    button_text: string;
  };
  terms_text?: string;
}

export interface EnquiryFormCard {
  subtitle?: string;
  title?: string;
  description?: string;
  fields?: EnquiryFormFields;
  button?: {
    text: string;
  };
}

export interface EnquirySectionData {
  left_card?: EnquiryLeftCard;
  form_card?: EnquiryFormCard;
}

export interface ManufacturingOverview {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  image?: string;
}

export interface ManufacturingFeature {
  icon: string;
  title: string;
}

export interface ManufacturingInfrastructure {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  image?: string;
  features?: ManufacturingFeature[];
}

export interface ManufacturingMachinery {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  images?: string[];
}

export interface ManufacturingCapabilityItem {
  icon: string;
  badge_color?: string;
  title: string;
  description: string;
}

export interface ManufacturingCapabilities {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  items?: ManufacturingCapabilityItem[];
}

export interface ManufacturingProcessStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export interface ManufacturingProcess {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  steps?: ManufacturingProcessStep[];
}

export interface ManufacturingHygieneSafety {
  badge?: string;
  title_part1?: string;
  title_part2?: string;
  description?: string;
  image?: string;
  features?: ManufacturingFeature[];
}

export interface ManufacturingFacilitiesData {
  overview?: ManufacturingOverview;
  infrastructure?: ManufacturingInfrastructure;
  machinery?: ManufacturingMachinery;
  capabilities?: ManufacturingCapabilities;
  process?: ManufacturingProcess;
  hygiene_safety?: ManufacturingHygieneSafety;
}

export const siteData = siteJson;
export { siteJson };
export const common = siteJson?.common || {};
export const template = (siteJson?.categories?.Healthcare?.templateComponents?.['template-1'] as any) || {};
export const pages: Record<string, any> = template?.pages || {};
export const sections: Record<string, any> = template?.sections || {};

export function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
