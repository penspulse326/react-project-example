import type { LinkDescriptor } from 'react-router';

export const fontLinks: LinkDescriptor[] = [
  {
    rel: 'preload',
    href: '/fonts/noto-sans-tc-400.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    href: '/fonts/noto-sans-tc-700.woff2',
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
];
