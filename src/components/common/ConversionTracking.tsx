import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import { extraPlugins } from '../../data/extraPlugins';
import { CLIPBOARD_ADOBE_URL } from '../../utils/site';

// Outbound clicks measure interest, not completed purchases on Adobe Exchange.
export default function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const destination = new URL(link.href, window.location.href);
      const sourcePath = window.location.pathname;
      const isArticle = sourcePath.startsWith('/blog/');
      const placement = link.dataset.trackPlacement || (link.closest('nav') ? 'navigation' : link.closest('footer') ? 'footer' : 'content');
      const product = destination.href === CLIPBOARD_ADOBE_URL ? 'Clipboard It' :
        extraPlugins.find(plugin => plugin.primaryCtaHref === destination.href)?.name;
      try {
        if (product) {
          track('adobe_exchange_click', {
            product,
            source_path: sourcePath,
            placement
          });
        } else if (isArticle && link.closest('.article-product, .markdown-content') && destination.origin === window.location.origin && destination.pathname === '/') {
          track('article_product_click', { source_path: sourcePath, product: 'Clipboard It', product_fit: link.closest<HTMLElement>('main')?.dataset.productFit || 'context', placement });
        } else if (sourcePath !== '/installation' && destination.origin === window.location.origin && destination.pathname === '/installation') {
          track('installation_guide_click', { source_path: sourcePath, product: 'Clipboard It', placement });
        }
      } catch {
        // Analytics must never interrupt navigation.
      }
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('auxclick', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('auxclick', handleClick);
    };
  }, []);
  return null;
}
