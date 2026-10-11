// Local blog images ship as `<slug>.webp` (1600w) plus a `<slug>-800.webp` variant.
export const blogImageSrcSet = (url: string): string | undefined =>
  url.startsWith('/blog/') && url.endsWith('.webp')
    ? `${url.replace(/\.webp$/, '-800.webp')} 800w, ${url} 1600w`
    : undefined;
