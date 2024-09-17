import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, I am',
  title: 'Aryan Inguz,',
  tagline: 'Programming ideas into reality.',
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building scalable applications with complex architectures using Javascript, Typescript,  MERN/Nextjs, and React-Native.",
  specialText: 'A seasoned freelancer and open-sourcerer',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
