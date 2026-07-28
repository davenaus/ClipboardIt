import siteMetadata from '../config/siteMetadata.json';

export const SITE_URL = siteMetadata.siteUrl.replace(/\/$/, '');
export const SITE_NAME = siteMetadata.siteName;
export const AUTHOR_NAME = siteMetadata.authorName;
export const DEFAULT_OG_IMAGE = siteMetadata.defaultOgImage;
export const CLIPBOARD_ADOBE_URL = siteMetadata.clipboardAdobeUrl;

export const absoluteUrl = (path = ''): string => {
  if (/^https?:\/\//i.test(path)) return path;
  if (!path || path === '/') return `${SITE_URL}/`;

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
