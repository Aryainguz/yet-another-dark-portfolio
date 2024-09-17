import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are the technologies I ship most of my projects with:',
    items: [
      'NextJS',
      'MERN Stack',
      'React Native',
      'PostgreSQL/MySQL',
      'AWS',
      'Cloudflare',
    ],
  },
  img: '/aryan-image.jpg',
};
