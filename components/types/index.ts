export const siteJson = require('../data/data.json');
export const common = siteJson.common;
export const template = siteJson.categories.Healthcare.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
export const toSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');
